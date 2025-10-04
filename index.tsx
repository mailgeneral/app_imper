/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- DATOS DE LA MARCA ---
const profile = {
    name: "Imperdellanta",
    bio: "La solución definitiva y ecológica para la protección de tu patrimonio. ¡Contáctanos!",
    // URL del avatar de la marca
    avatarUrl: "avatar.png",
};

// --- ENLACES PRINCIPALES DE IMPERDELLANTA ---
// Iconos SVG personalizados para cada servicio.
const links = [
    {
        title: "Asistente Virtual",
        url: "https://mailgeneral.github.io/bot_app/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 12c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S7 14.33 7 13.5 7.67 12 8.5 12zm3.5 5.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5zm3.5-5.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/></svg>`
    },
    {
        title: "WhatsApp Ventas",
        url: "https://wa.me/5212228496995",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.52 12.01c-.25-.12-1.47-.72-1.7-.8s-.39-.12-.56.12c-.17.25-.64.8-.79.96s-.3.19-.55.06-1.06-.39-2.02-1.25c-.75-.67-1.25-1.5-1.4-1.75s-.02-.38.11-.5c.12-.12.25-.3.38-.45s.17-.25.25-.41c.08-.17 0-.3-.06-.41s-.56-1.34-.76-1.84-.4-.42-.55-.42h-.5c-.15 0-.38.06-.55.25s-.64.64-.79 1.55.81 1.8 1.16 2.15c.35.35 1.58 2.48 3.82 3.39 2.24.9 2.24.6 2.64.58.4-.02 1.29-.53 1.47-1.04.19-.51.19-.94.13-1.04s-.19-.18-.44-.3z"/></svg>`
    },
    {
        title: "Marcar a Ventas",
        url: "tel:2228496995",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`
    },
    {
        title: "Tienda en Línea (MercadoLibre)",
        url: "https://drino.short.gy/TIENDA-EN-LINEA-MELI",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.24 17 6.5 17h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45z"/></svg>`
    },
    {
        title: "Página Web Oficial",
        url: "https://drino.short.gy/WEB-VENTAS-IMPER",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-2v-2h2c.55 0 1-.45 1-1V8h3c.55 0 1-.45 1-1s-.45-1-1-1h-1.45c-.49-1.7-1.98-3-3.55-3-1.48 0-2.8.9-3.4 2.22C6.68 5.6 5.36 5 4 5c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1h2v2H4c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1c1.1 0 2-.9 2-2v-1l4.79 4.79c.63.19 1.29.3 2.01.3 2.21 0 4-1.79 4-4 0-1.19-.53-2.25-1.36-2.96z"/></svg>`
    },
    {
        title: "Ubicación en Google Maps",
        url: "https://maps.app.goo.gl/MdxqV9RaTW3jBqe28",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>`
    },
    {
        title: "Lista de Precios Oficial",
        url: "https://drino.short.gy/IMPERDELLANTA_PRECIOS",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.22-1.05-.59-1.42zM13 20.01L4 11V4h7l9 9-7 7.01z"/><circle cx="6.5" cy="6.5" r="1.5"/></svg>`
    },
    {
        title: "Calculadora de Materiales",
        url: "https://drino.short.gy/CACULADORA-IMPERMEABILIZANTE",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm1 4h2v2H5V6zm3 0h2v2H8V6zm3 0h2v2h-2V6zm-6 3h2v2H5V9zm3 0h2v2H8V9zm3 0h2v2h-2V9zm-6 3h8v2H5v-2z"/></svg>`
    },
    {
        title: "Galería de Proyectos",
        url: "https://drino.short.gy/PROYECTOS",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>`
    },
    {
        title: "Todos Nuestros Enlaces",
        url: "https://linktr.ee/imperdellanta",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>`
    }
];

// --- LÓGICA DE LA APLICACIÓN ---

/**
 * Renderiza el perfil del usuario en el encabezado.
 */
function renderProfile() {
    const avatar = document.getElementById('avatar') as HTMLImageElement;
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
        
        // Para enlaces que no son 'tel:', abrir en nueva pestaña.
        if (!link.url.startsWith('tel:')) {
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer';
        }

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
            navigator.serviceWorker.register('sw.js')
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
});