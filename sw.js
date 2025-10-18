/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Se incrementa la versión del caché para forzar la reinstalación del Service Worker
const CACHE_NAME = 'linkhub-v4'; 
const ASSETS_TO_CACHE = [
    '.',
    'index.html',
    'index.css',
    'index.js',
    'manifest.json',
    'icon-192.png',
    'icon-512.png',
    'avatar.png',
    'precios.json'
];

// Evento 'install': se dispara cuando el Service Worker se instala.
// Aquí es donde pre-cacheamos los recursos estáticos de la aplicación.
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache abierto y recursos pre-cacheados');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Evento 'activate': se dispara después de la instalación.
// Aquí limpiamos cachés antiguos que ya no se necesitan.
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Borrando caché antiguo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            ).then(() => {
                // Tomar control inmediato de todos los clientes (pestañas)
                return self.clients.claim();
            });
        })
    );
});


// Evento 'fetch': Implementamos la estrategia "Stale-While-Revalidate".
self.addEventListener('fetch', event => {
    // No interceptamos peticiones que no sean GET
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(event.request).then(cachedResponse => {
                // 1. Ir a la red en segundo plano para obtener la versión más reciente
                const fetchedResponsePromise = fetch(event.request).then(networkResponse => {
                    // Si la respuesta de la red es válida, la guardamos en el caché para la próxima vez
                    if (networkResponse && networkResponse.status === 200) {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                }).catch(error => {
                    // Si la red falla, no hacemos nada, nos quedamos con la versión del caché si existe
                    console.warn('Fetch failed; returning offline page instead.', error);
                    return cachedResponse; // Devolvemos la respuesta cacheada si la red falla
                });

                // 2. Devolver la respuesta del caché inmediatamente si existe, si no, esperar a la red
                return cachedResponse || fetchedResponsePromise;
            });
        })
    );
});

// Listener para recibir mensajes del cliente
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});