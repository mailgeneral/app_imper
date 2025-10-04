/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const CACHE_NAME = 'linkhub-v3';
const ASSETS_TO_CACHE = [
    '.',
    'index.html',
    'index.css',
    'index.js',
    'manifest.json',
    'icon-192.png',
    'icon-512.png',
    'avatar.png' // Cachear también el nuevo avatar
];

// Evento 'install': se dispara cuando el Service Worker se instala.
// Aquí es donde pre-cacheamos los recursos estáticos de la aplicación.
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache abierto');
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
            );
        })
    );
});


// Evento 'fetch': se dispara cada vez que la aplicación realiza una solicitud de red.
// Implementamos una estrategia "Cache First": primero busca en el caché, y si no lo encuentra, va a la red.
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Si la respuesta está en el caché, la retornamos
                if (response) {
                    return response;
                }
                // Si no, hacemos la solicitud a la red
                return fetch(event.request);
            })
    );
});
