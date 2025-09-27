// Fix: Wrap the entire script in an IIFE to avoid global scope pollution and resolve redeclaration conflicts.
(function() {
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- DATOS DE EJEMPLO ---
// Siéntete libre de modificar esta sección con tu propia información.
const profile = {
    name: "@TuNombre",
    bio: "¡Bienvenido a mi hub de enlaces! Aquí encontrarás todo lo importante.",
    // Puedes usar una URL a tu propia imagen
    avatarUrl: "https://avatar.iran.liara.run/public/boy?username=LinkHub",
};

// Añade o quita enlaces como necesites.
// Los iconos son SVG. Puedes encontrar más en sitios como https://heroicons.com/
const links = [
    {
        title: "Mi Sitio Web",
        url: "https://example.com",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`
    },
    {
        title: "GitHub",
        url: "https://github.com",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-1.02-.01-1.85-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/></svg>`
    },
    {
        title: "LinkedIn",
        url: "https://linkedin.com",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-12 5v9h3V8h-3zM8.5 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM17 8h-2c-1.1 0-2 .9-2 2v7h3v-4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V17h3v-5c0-2.21-1.79-4-4-4z"/></svg>`
    },
    {
        title: "Correo Electrónico",
        url: "mailto:tuemail@example.com",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
    }
];

// --- LÓGICA DE LA APLICACIÓN ---

let deferredPrompt;

/**
 * Maneja el evento 'beforeinstallprompt' para mostrar nuestro propio botón de instalación.
 */
function setupInstallButton() {
    const installButton = document.getElementById('install-button');
    if (!installButton) return;

    window.addEventListener('beforeinstallprompt', (e) => {
        // Previene que Chrome muestre el mini-infobar
        e.preventDefault();
        // Guarda el evento para que pueda ser disparado más tarde.
        deferredPrompt = e;
        // Muestra nuestro botón de instalación personalizado
        installButton.style.display = 'block';

        installButton.addEventListener('click', async () => {
            // Oculta nuestro botón, ya que solo se puede usar una vez.
            installButton.style.display = 'none';
            // Muestra el diálogo de instalación
            deferredPrompt.prompt();
            // Espera a que el usuario responda
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`El usuario respondió al diálogo: ${outcome}`);
            // Limpiamos la variable, ya no la necesitamos
            deferredPrompt = null;
        });
    });
}


/**
 * Renderiza el perfil del usuario en el encabezado.
 */
function renderProfile() {
    const avatar = document.getElementById('avatar');
    const userName = document.getElementById('userName');
    const bio = document.getElementById('bio');

    if (avatar && userName && bio) {
        avatar.src = profile.avatarUrl;
        avatar.alt = `Avatar de ${profile.name}`;
        userName.textContent = profile.name;
        bio.textContent = profile.bio;
    }
}

/**
 * Renderiza los botones de enlace en el contenedor principal.
 */
function renderLinks() {
    const container = document.getElementById('links-container');
    if (!container) return;

    // Limpiar contenedor existente
    container.innerHTML = '';

    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'link-button';
        // Para enlaces externos, es buena práctica añadir esto por seguridad y SEO.
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';

        linkElement.innerHTML = `
            ${link.icon}
            <span>${link.title}</span>
        `;
        container.appendChild(linkElement);
    });
}

/**
 * Registra el Service Worker para la funcionalidad PWA y offline.
 */
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registrado con éxito:', registration.scope);
                })
                .catch(error => {
                    console.log('Fallo en el registro de ServiceWorker:', error);
                });
        });
    }
}

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderLinks();
    registerServiceWorker();
    setupInstallButton(); // <-- Añadimos la nueva función aquí
});
})();
