// Fix: Wrap the entire script in an IIFE to avoid global scope pollution and resolve redeclaration conflicts.
(function() {
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- DATOS DE LA MARCA ---
const profile = {
    name: "Imperdellanta",
    bio: "La solución definitiva y ecológica para la protección de tu patrimonio. ¡Contáctanos!",
    avatarUrl: "avatar.png",
};

// --- DATOS PARA GUÍA OFFLINE ---
const offlineData = {
    products: [
        {
            name: "IMPERDELLANTA 7 (Cubeta 19L)",
            precio_lista: 799.00,
            precio_venta: 719.00,
            promocion_activa: true,
            descripcion_oferta: "¡Aprovecha nuestro descuento por Apertura de Nuevo Local! Válido hasta el 31 de octubre.",
            details: `<strong>Clasificación:</strong> Equilibrio perfecto entre resistencia y precio.<br><br>
                      <strong>Descripción:</strong> Impermeabilizante elastomérico con caucho reciclado y fibra de celulosa. No necesita malla de refuerzo.<br><br>
                      <strong>Beneficios Clave:</strong> Durabilidad de 7+ años, resiste humedad y rayos UV, reduce calor y ruido, secado rápido.<br><br>
                      <strong>Rendimiento:</strong> 20 m² por cubeta de 19L (a dos capas).`
        },
        {
            name: "IMPERDELLANTA 12 (Cubeta 19L)",
            precio_lista: 899.00,
            precio_venta: 809.00,
            promocion_activa: true,
            descripcion_oferta: "¡Aprovecha nuestro descuento por Apertura de Nuevo Local! Válido hasta el 31 de octubre.",
            details: `<strong>Clasificación:</strong> Máxima protección y durabilidad.<br><br>
                      <strong>Descripción:</strong> Impermeabilizante premium con resina de alto desempeño y caucho reciclado. Máxima elasticidad y resistencia.<br><br>
                      <strong>Beneficios Clave:</strong> Durabilidad de 12+ años, soporta cambios climáticos bruscos, sin malla de refuerzo, amigable con el ambiente.<br><br>
                      <strong>Rendimiento:</strong> 20 m² por cubeta de 19L (a dos capas).`
        },
        {
            name: "RESANADOR RS-MAX (Envase 1L)",
            precio_lista: 199.00,
            precio_venta: 199.00,
            promocion_activa: false,
            descripcion_oferta: "",
            details: `<strong>Clasificación:</strong> Blindaje anti goteras y fisuras.<br><br>
                      <strong>Descripción:</strong> Pasta para resanar grietas y fisuras con máxima resistencia y elasticidad. Solución definitiva a goteras.<br><br>
                      <strong>Beneficios Clave:</strong> Durabilidad de 10 años, alta adherencia, repele agua y humedad, elongación del 150%.<br><br>
                      <strong>Presentación:</strong> 1L incluye malla de fibra de vidrio.`
        },
        {
            name: "SELLADOR SELLAPLUS EX (Garrafa 1L)",
            precio_lista: 199.00,
            precio_venta: 199.00,
            promocion_activa: false,
            descripcion_oferta: "",
            details: `<strong>Clasificación:</strong> Extra adherente, el vínculo perfecto.<br><br>
                      <strong>Descripción:</strong> Sellador acrílico concentrado que actúa como puente de adherencia entre la superficie y el acabado final.<br><br>
                      <strong>Beneficios Clave:</strong> Aumenta durabilidad y rendimiento del impermeabilizante, sella poros, protege contra salitre, secado rápido.<br><br>
                      <strong>Rendimiento:</strong> 38-40 m² por litro de sellador diluido.`
        },
        {
            name: "PINTURA LIDERPINT (Cubeta 19L)",
            precio_lista: 747.00,
            precio_venta: 747.00,
            promocion_activa: false,
            descripcion_oferta: "",
            details: `<strong>Clasificación:</strong> Calidad económica para interiores.<br><br>
                      <strong>Descripción:</strong> Pintura vinil-acrílica económica ideal para obras y paredes interiores que buscan un acabado mate uniforme.<br><br>
                      <strong>Beneficios Clave:</strong> Económica y rendidora, fácil aplicación, garantía de 3 años en interiores.<br><br>
                      <strong>Rendimiento:</strong> 70-90 m² por cubeta de 19L.`
        },
        {
            name: "PINTURA OLYMPUS 300 (Cubeta 19L)",
            precio_lista: 1780.00,
            precio_venta: 1780.00,
            promocion_activa: false,
            descripcion_oferta: "",
            details: `<strong>Clasificación:</strong> Pintura premium para exteriores.<br><br>
                      <strong>Descripción:</strong> Pintura vinil-acrílica de alto desempeño con excelente poder cubriente y gran resistencia a los rayos UV y al intemperismo.<br><br>
                      <strong>Beneficios Clave:</strong> Calidad premium, lavable (resiste 4000+ ciclos), alto rendimiento, ideal para fachadas.<br><br>
                      <strong>Rendimiento:</strong> 130-170 m² por cubeta de 19L.`
        }
    ],
    applicationGuide: [
        "<strong>Limpiar la superficie:</strong> Debe estar seca y libre de polvo, grasa o residuos.",
        "<strong>Reparar fisuras:</strong> Usar RESANADOR RS-MAX en grietas y puntos críticos.",
        "<strong>Sellar la superficie:</strong> Aplicar una capa de SELLADOR SELLAPLUS EX diluido y dejar secar 1 hora.",
        "<strong>Primera capa de Imperdellanta:</strong> Aplicar en sentido vertical y dejar secar de 1 a 3 horas.",
        "<strong>Segunda capa de Imperdellanta:</strong> Aplicar en sentido horizontal (cruzado) y dejar secar 3 horas antes de exponer al agua.",
    ],
    contact: {
        address: "25 poniente 1902 | 72410 Los Volcanes, Puebla, Pue.",
        phone: "222-849-6995",
        hours: [
            "<strong>Lunes a Viernes:</strong> 9:00 - 17:30",
            "<strong>Sábado:</strong> 9:00 - 14:00"
        ]
    },
    faq: [
        {
            question: "¿Puedo aplicar Imperdellanta sobre un impermeabilizante viejo?",
            answer: "Sí, pero es crucial. Debes retirar todo el material viejo que esté suelto o mal adherido. La superficie debe estar completamente limpia y seca para garantizar la máxima adherencia del nuevo producto."
        },
        {
            question: "¿Realmente no necesito malla de refuerzo?",
            answer: "¡Correcto! Nuestros impermeabilizantes Imperdellanta 7 y 12 están reforzados con fibra de celulosa, lo que elimina la necesidad de usar malla en la mayoría de las superficies, ahorrándote tiempo y dinero."
        },
        {
            question: "¿Qué pasa si llueve poco después de aplicar?",
            answer: "El tiempo de secado al tacto es de 1-3 horas por capa. Es ideal aplicar con un pronóstico de al menos 24 horas sin lluvia para asegurar un curado correcto y evitar que el acabado se vea afectado."
        }
    ]
};


// --- ENLACES PRINCIPALES DE IMPERDELLANTA ---
const links = [
    {
        title: "Guía Rápida (Offline)",
        url: "#offline-guide",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-.46 0-.91.03-1.34.09.23.69.48 1.45.74 2.25.75 2.25 1.05 4.86 1.1 7.16-.05 2.3-.35 4.91-1.1 7.16-.26.8-.51 1.56-.74 2.25.43.06.88.09 1.34.09 1.95 0 4.05-.4 5.5-1.5 1.45 1.1 3.55 1.5 5.5 1.5 1.17 0 2.39-.15 3.5-.5.84-2.21 1.1-4.78 1-7S21.84 7.21 21 5zM4.09 6.34C4.06 6.23 4.03 6.11 4 6c1.11-.35 2.33-.5 3.5-.5 1.95 0 4.05.4 5.5 1.5V18c-1.45-1.1-3.55-1.5-5.5-1.5-.46 0-.91.03-1.34.09.23-.69.48-1.45.74-2.25.75-2.25 1.05-4.86 1.1-7.16-.05-2.3-.35-4.91-1.1-7.16-.18-.54-.36-1.09-.55-1.65z"/></svg>`
    },
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
        url: "https://drino.short.gy/CACULADORA-IMPERMEABILIZante",
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

let deferredPrompt;

/**
 * Maneja el evento 'beforeinstallprompt' para mostrar nuestro propio botón de instalación.
 */
function setupInstallButton() {
    const installButton = document.getElementById('install-button');
    if (!installButton) return;

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installButton.style.display = 'block';

        installButton.addEventListener('click', async () => {
            installButton.style.display = 'none';
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`El usuario respondió al diálogo: ${outcome}`);
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
    container.innerHTML = '';

    links.forEach(link => {
        if (link.url === '#offline-guide') {
            const buttonElement = document.createElement('button');
            buttonElement.className = 'link-button';
            buttonElement.innerHTML = `${link.icon}<span>${link.title}</span>`;
            buttonElement.addEventListener('click', showOfflineGuide);
            container.appendChild(buttonElement);
        } else {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = 'link-button external'; // Add 'external' class for offline styling
            if (!link.url.startsWith('tel:')) {
                linkElement.target = '_blank';
                linkElement.rel = 'noopener noreferrer';
            }
            linkElement.innerHTML = `${link.icon}<span>${link.title}</span>`;
            container.appendChild(linkElement);
        }
    });
}

/**
 * Renderiza el contenido de la guía offline.
 */
function renderOfflineGuide() {
    const container = document.getElementById('offline-guide-container');
    if (!container) return;

    const productsHtml = offlineData.products.map(p => {
        let priceHtml = '';
        if (p.promocion_activa && p.precio_lista > p.precio_venta) {
            priceHtml = `
                <p class="product-price">
                    <span class="list-price">$${p.precio_lista.toFixed(2)} MXN</span>
                    <span class="sale-price">$${p.precio_venta.toFixed(2)} MXN</span>
                </p>
                <p class="offer-description">🔥 ${p.descripcion_oferta}</p>
            `;
        } else {
            priceHtml = `
                <p class="product-price">
                    <span class="sale-price">$${p.precio_venta.toFixed(2)} MXN</span>
                </p>
            `;
        }
        
        return `
            <div class="accordion-item">
                <button class="accordion-header">${p.name}</button>
                <div class="accordion-content">
                    ${priceHtml}
                    <p class="price-vat"><small>(IVA incluido)</small></p>
                    <p>${p.details}</p>
                </div>
            </div>
        `;
    }).join('');

    const applicationGuideHtml = `<ul>${offlineData.applicationGuide.map(step => `<li>${step}</li>`).join('')}</ul>`;
    
    const contactHtml = `
        <p>${offlineData.contact.address}</p>
        <p><strong>Teléfono:</strong> ${offlineData.contact.phone}</p>
        <ul>${offlineData.contact.hours.map(h => `<li>${h}</li>`).join('')}</ul>
    `;

    const faqHtml = `<ul>${offlineData.faq.map(item => `<li><strong>${item.question}</strong><p>${item.answer}</p></li>`).join('')}</ul>`;

    const priceDisclaimerHtml = `
        <div class="price-disclaimer">
            <p>Precios offline pueden estar desactualizados, confirma los precios con la <a href="https://drino.short.gy/IMPERDELLANTA_PRECIOS" target="_blank" rel="noopener noreferrer">versión oficial aquí</a> cuando estés en línea.</p>
            <p class="small-text">Precios sujetos a cambios sin previo aviso.</p>
        </div>
    `;

    container.innerHTML = `
        <div class="guide-header">
            <button id="back-button" aria-label="Volver a enlaces">←</button>
            <h2>Guía Rápida</h2>
        </div>
        <div class="guide-section">
            <h3>Productos Esenciales</h3>
            ${priceDisclaimerHtml}
            ${productsHtml}
        </div>
        <div class="guide-section">
            <h3>Guía Rápida de Aplicación</h3>
            ${applicationGuideHtml}
        </div>
        <div class="guide-section">
            <h3>Tips Profesionales (FAQ)</h3>
            ${faqHtml}
        </div>
        <div class="guide-section">
            <h3>Contacto y Horarios</h3>
            ${contactHtml}
        </div>
    `;

    document.getElementById('back-button').addEventListener('click', showMainView);
    
    container.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            button.classList.toggle('active');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}

/**
 * Muestra la vista de la guía offline y oculta la principal.
 */
function showOfflineGuide() {
    document.getElementById('links-container').classList.add('hidden');
    document.getElementById('offline-guide-container').classList.remove('hidden');
    document.getElementById('bio').classList.add('hidden');
    document.getElementById('install-button').classList.add('hidden');
}

/**
 * Muestra la vista principal de enlaces y oculta la guía offline.
 */
function showMainView() {
    document.getElementById('links-container').classList.remove('hidden');
    document.getElementById('offline-guide-container').classList.add('hidden');
    document.getElementById('bio').classList.remove('hidden');
    // Re-show install button only if deferredPrompt is available
    if (deferredPrompt) {
        document.getElementById('install-button').style.display = 'block';
    } else {
        document.getElementById('install-button').classList.remove('hidden');
    }
}

/**
 * Actualiza la UI basada en el estado de la conexión.
 */
function updateOnlineStatus() {
    if (navigator.onLine) {
        document.body.classList.remove('offline');
    } else {
        document.body.classList.add('offline');
    }
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
    renderOfflineGuide();
    registerServiceWorker();
    setupInstallButton();

    // Setup online/offline status detection
    updateOnlineStatus();
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});
})();