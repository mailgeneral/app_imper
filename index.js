// Fix: Wrap the entire script in an IIFE to avoid global scope pollution and resolve redeclaration conflicts.
(function() {
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- DATOS DE LA MARCA ---
const profile = {
    name: "Imperdellanta",
    avatarUrl: "avatar.png",
};

// --- DATOS ESTÁTICOS Y DE PRECIOS ---
let preciosData = { productos: [] };
let productDetailsMap = {};
let offlineData = {};
let infoSlidesData = [];
let featuredProductInterval; // To hold the cycling interval

// --- ENLACES PRINCIPALES DE IMPERDELLANTA ---
const links = [
    {
        title: "Calculadora de Protección",
        url: "#calculator",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>`
    },
    {
        title: "Guía Rápida (Offline)",
        url: "#offline-guide",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-.46 0-.91.03-1.34.09.23.69.48 1.45.74 2.25.75 2.25 1.05 4.86 1.1 7.16-.05 2.3-.35 4.91-1.1 7.16-.26.8-.51 1.56-.74 2.25.43.06.88.09 1.34.09 1.95 0 4.05-.4 5.5-1.5 1.45 1.1 3.55 1.5 5.5 1.5 1.17 0 2.39-.15 3.5-.5.84-2.21 1.1-4.78 1-7S21.84 7.21 21 5zM4.09 6.34C4.06 6.23 4.03 6.11 4 6c1.11-.35 2.33-.5 3.5-.5 1.95 0 4.05.4 5.5 1.5V18c-1.45-1.1-3.55-1.5-5.5-1.5-.46 0-.91.03-1.34.09.23-.69.48-1.45.74-2.25.75-2.25 1.05-4.86 1.1-7.16-.05-2.3-.35-4.91-1.1-7.16-.18-.54-.36-1.09-.55-1.65z"/></svg>`
    },
    {
        title: "Tienda en Línea (MercadoLibre)",
        url: "https://drino.short.gy/TIENDA-EN-LINEA-MELI",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.24 17 6.5 17h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45z"/></svg>`
    },
    {
        title: "Página Web",
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
 * Renderiza el carrusel de información dinámica con transición de desvanecimiento.
 */
function renderInfoSlider() {
    const container = document.getElementById('info-slider-container');
    const track = document.getElementById('info-slider-track');
    if (!container || !track || infoSlidesData.length === 0) return;

    // Aleatorizar el array de slides
    const shuffledSlides = [...infoSlidesData].sort(() => 0.5 - Math.random());

    track.innerHTML = shuffledSlides.map(slide => `
        <div class="info-slide" ${slide.targetProduct ? `data-target-product="${slide.targetProduct}"` : ''}>
            <strong>${slide.title}</strong>
            <p>${slide.text}</p>
        </div>
    `).join('');
    
    container.classList.remove('hidden');

    let currentSlideIndex = 0;
    const slides = track.querySelectorAll('.info-slide');
    const totalSlides = slides.length;

    if (totalSlides === 0) return;

    // Mostrar el primer slide inicialmente
    slides[currentSlideIndex].classList.add('active');

    function showNextSlide() {
        // Desvanecer el slide actual
        slides[currentSlideIndex].classList.remove('active');

        // Actualizar índice
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;

        // Mostrar el siguiente slide
        slides[currentSlideIndex].classList.add('active');
    }

    setInterval(showNextSlide, 7000); // Cambia de slide cada 7 segundos

    container.addEventListener('click', () => {
        const activeSlide = track.querySelector('.info-slide.active');
        if (!activeSlide) return; // Safety check

        const productName = activeSlide.getAttribute('data-target-product');
        
        // If the slide has a specific product, navigate directly to it.
        if (productName) {
            navigateToProduct(productName);
        } else {
            // Otherwise, take the user to the main guide view.
            showView('offline-guide-container');
        }
    });
}


/**
 * Maneja el cálculo y la visualización de la calculadora de protección.
 */
function handleCalculate(event) {
    event.preventDefault();
    const resultsContainer = document.getElementById('calculator-results');
    const sqMetersInput = document.getElementById('calc-sqMeters');
    const linearMetersInput = document.getElementById('calc-linearMeters');
    
    const sqMeters = parseFloat(sqMetersInput.value);
    const linearMeters = parseFloat(linearMetersInput.value) || 0;

    resultsContainer.classList.add('hidden');
    resultsContainer.innerHTML = '';

    if (!sqMeters || sqMeters < 1) {
        sqMetersInput.focus();
        return;
    }

    const imperProduct = preciosData.productos.find(p => p.sku === "IDL12-19L");
    const sealerProduct = preciosData.productos.find(p => p.sku === "SELLA-1L");
    const patcherProduct = preciosData.productos.find(p => p.sku === "RESAN-1L");

    if (!imperProduct || !sealerProduct || !patcherProduct) {
        resultsContainer.innerHTML = '<p>Error al cargar los precios. Intenta más tarde.</p>';
        resultsContainer.classList.remove('hidden');
        return;
    }

    const imperBuckets = Math.ceil(sqMeters / 20);
    const sealerBottles = Math.ceil(sqMeters / 40);
    const patcherKits = linearMeters > 0 ? Math.ceil(linearMeters / 4.5) : 0;

    const imperPrice = imperProduct.promocion_activa ? imperProduct.precio_venta : imperProduct.precio_lista;
    const sealerPrice = sealerProduct.precio_venta;
    const patcherPrice = patcherProduct.precio_venta;

    const totalImper = imperBuckets * imperPrice;
    const totalSealer = sealerBottles * sealerPrice;
    const totalPatcher = patcherKits * patcherPrice;

    const totalPrice = totalImper + totalSealer + totalPatcher;

    let messageLines = [
        `Hola PEDRO, solicito una cotización para proteger ${sqMeters} m². La calculadora me arrojó esta solución:`,
        `- ${imperBuckets} x IMPERDELLANTA 12`,
        `- ${sealerBottles} x SELLADOR SELLAPLUS EX`
    ];
    if (patcherKits > 0) {
        messageLines.push(`- ${patcherKits} x RESANADOR RS-MAX (para ${linearMeters}m de grietas)`);
    }
    messageLines.push(`(Total estimado: ${formatCurrency(totalPrice)})`);

    const message = messageLines.join('\n');
    const whatsappUrl = `https://wa.me/5212228496995?text=${encodeURIComponent(message)}`;
    
    let resultsList = `
        <li>
            <span>${imperBuckets} x IMPERDELLANTA 12</span>
            <strong>${formatCurrency(totalImper)}</strong>
        </li>
        <li>
            <span>${sealerBottles} x SELLADOR SELLAPLUS EX</span>
            <strong>${formatCurrency(totalSealer)}</strong>
        </li>
    `;
    if (patcherKits > 0) {
        resultsList += `
            <li>
                <span>${patcherKits} x RESANADOR RS-MAX</span>
                <strong>${formatCurrency(totalPatcher)}</strong>
            </li>
        `;
    }


    resultsContainer.innerHTML = `
        <h3>Solución de Protección Completa</h3>
        <p class="small-text" style="text-align:center; margin-top:-0.5rem; margin-bottom:1rem;">Para ${sqMeters} m² recomendamos:</p>
        <ul>
            ${resultsList}
        </ul>
        <div class="total-price">
            Total Estimado (IVA incluido)
            <strong>${formatCurrency(totalPrice)}</strong>
        </div>
        <a href="${whatsappUrl}" class="link-button results-cta external" target="_blank" rel="noopener noreferrer">Asegurar mi Proyecto Ahora</a>
        <p class="disclaimer">El especialista PEDRO confirmará tu cotización.</p>
    `;

    resultsContainer.classList.remove('hidden');
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


/**
 * Navega a la vista de guía y abre el acordeón del producto especificado.
 * @param {string} productName - El nombre del producto a mostrar.
 */
function navigateToProduct(productName) {
    showView('offline-guide-container');
    
    // Esperar un poco para que la vista sea visible y se pueda calcular scrollHeight
    setTimeout(() => {
        const guideContainer = document.getElementById('offline-guide-container');
        const accordionHeaders = guideContainer.querySelectorAll('.accordion-header');
        const targetHeader = Array.from(accordionHeaders).find(h => h.textContent.trim() === productName);

        if (targetHeader) {
            // Abrir el acordeón si no está abierto
            if (!targetHeader.classList.contains('active')) {
                const content = targetHeader.nextElementSibling;
                targetHeader.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
            // Desplazarse al elemento
            targetHeader.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
}


/**
 * Sets up and manages the dynamic featured product carousel.
 */
function setupFeaturedProductCarousel() {
    const container = document.getElementById('featured-product-container');
    if (!container || !preciosData.productos || !preciosData.productos.length) {
        return;
    }

    let productsToShow = preciosData.productos.filter(p => p.promocion_activa);
    const isRandomMode = productsToShow.length === 0;

    if (isRandomMode) {
        productsToShow = [...preciosData.productos];
    }
    
    if (productsToShow.length === 0) return;

    let currentIndex = -1;

    const updateProduct = () => {
        const card = container.querySelector('.featured-card');

        if (card) {
            card.style.opacity = '0';
        }

        setTimeout(() => {
            if (isRandomMode) {
                let nextIndex = currentIndex;
                if (productsToShow.length > 1) {
                    while (nextIndex === currentIndex) {
                        nextIndex = Math.floor(Math.random() * productsToShow.length);
                    }
                } else {
                    nextIndex = 0;
                }
                currentIndex = nextIndex;
            } else {
                currentIndex = (currentIndex + 1) % productsToShow.length;
            }

            const product = productsToShow[currentIndex];
            if (!product) return;
            
            const shortDesc = (productDetailsMap[product.nombre_producto]?.details || '')
                .split('<br><br>')[1]?.replace('<strong>Descripción:</strong> ', '') 
                || 'La mejor calidad para tu proyecto.';

            container.innerHTML = `
                <div class="featured-card">
                    <h3>🔥 ${product.promocion_activa ? 'Oferta Especial' : 'Producto Destacado'}</h3>
                    <p><strong>${product.nombre_producto}</strong></p>
                    <div class="price-section">
                        ${product.promocion_activa && product.precio_lista > product.precio_venta ? `<span class="list-price">${formatCurrency(product.precio_lista)}</span>` : ''}
                        <span class="sale-price">${formatCurrency(product.precio_venta)}</span>
                    </div>
                    <p>${product.promocion_activa ? product.descripcion_oferta : shortDesc}</p>
                    <button class="featured-cta" data-product-name="${product.nombre_producto}">Ver Detalles</button>
                </div>
            `;
            
            const newCard = container.querySelector('.featured-card');
            
            requestAnimationFrame(() => {
                newCard.style.opacity = '1';
            });
            
            const ctaButton = container.querySelector('.featured-cta');
            if (ctaButton) {
                ctaButton.addEventListener('click', (e) => {
                    const productName = e.target.getAttribute('data-product-name');
                    navigateToProduct(productName);
                });
            }
        }, card ? 500 : 0);
    };

    updateProduct();
    container.classList.remove('hidden');

    if (featuredProductInterval) clearInterval(featuredProductInterval);
    if(productsToShow.length > 1) {
        featuredProductInterval = setInterval(updateProduct, 30000); // 30 seconds
    }
}


/**
 * Renderiza los botones de enlace en el contenedor principal.
 */
function renderLinks() {
    const container = document.getElementById('links-container');
    if (!container) return;
    
    container.querySelectorAll('.link-button:not(#diagnostic-btn)').forEach(el => el.remove());

    links.forEach(link => {
        const isInternalAction = link.url.startsWith('#');
        const element = isInternalAction ? document.createElement('button') : document.createElement('a');
        
        element.className = 'link-button';
        if (!isInternalAction) {
            element.href = link.url;
            element.classList.add('external');
            if (!link.url.startsWith('tel:')) {
                element.target = '_blank';
                element.rel = 'noopener noreferrer';
            }
        }

        element.innerHTML = `${link.icon}<span>${link.title}</span>`;
        
        if (isInternalAction) {
            element.addEventListener('click', () => handleInternalLink(link.url));
        }

        container.appendChild(element);
    });
}


/**
 * Maneja la navegación interna para vistas como la guía.
 */
function handleInternalLink(url) {
    if (url === '#offline-guide') {
        showView('offline-guide-container');
    }
    if (url === '#diagnostic') {
        showView('diagnostic-container');
    }
    if (url === '#calculator') {
        showView('calculator-view-container');
    }
}


/**
 * Función genérica para mostrar una vista y ocultar las demás.
 */
function showView(viewId) {
    const mainContent = document.getElementById('main-content');
    // Selector corrected to only target direct children of main-content, preventing nested sections from being hidden.
    mainContent.querySelectorAll('#main-content > main, #main-content > section').forEach(view => view.classList.add('hidden'));
    
    const viewToShow = document.getElementById(viewId);
    if (viewToShow) {
        viewToShow.classList.remove('hidden');
    }

    const isMainView = viewId === 'links-container';
    document.getElementById('info-slider-container').classList.toggle('hidden', !isMainView);
    document.getElementById('featured-product-container').classList.toggle('hidden', !isMainView);
    document.getElementById('links-container').classList.toggle('hidden', !isMainView);

    if (isMainView) {
        // En la vista principal, mostramos los componentes relevantes que están dentro de #main-content
        document.getElementById('featured-product-container').classList.remove('hidden');
        document.getElementById('links-container').classList.remove('hidden');
    }
    
    document.getElementById('install-button').style.display = (isMainView && deferredPrompt) ? 'block' : 'none';
    
    const iosPrompt = document.getElementById('ios-install-prompt');
    if (iosPrompt) {
       const isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 && !window.MSStream);
       const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches;
       iosPrompt.classList.toggle('hidden', !isMainView || !isIos || isInStandaloneMode);
    }
}

/**
 * Renderiza la herramienta de diagnóstico.
 */
function renderDiagnosticTool() {
    const container = document.getElementById('diagnostic-container');
    if (!container) return;

    container.innerHTML = `
        <div class="view-header">
            <button id="back-button-diag" aria-label="Volver a enlaces">←</button>
            <h2>Diagnóstico de Protección</h2>
        </div>
        <form id="diagnostic-form" novalidate>
            <div id="diagnostic-content">
                <fieldset class="diagnostic-step">
                    <legend>Paso 1: Identifica tus Necesidades</legend>
                    <p class="small-text">Selecciona todos los problemas que afectan tus muros y/o techos.</p>
                    <div id="problems-group" class="diagnostic-options">
                        <label class="option-label">
                            <input type="checkbox" name="problem" value="Goteras Visibles">
                            <span class="checkbox-custom"></span>
                            Goteras Visibles durante la lluvia
                        </label>
                        <label class="option-label">
                            <input type="checkbox" name="problem" value="Humedad o Moho">
                            <span class="checkbox-custom"></span>
                            Manchas de Humedad o Moho
                        </label>
                        <label class="option-label">
                            <input type="checkbox" name="problem" value="Calor Excesivo">
                            <span class="checkbox-custom"></span>
                            Calor Excesivo en el interior
                        </label>
                        <label class="option-label">
                            <input type="checkbox" name="problem" value="Desgaste Superficie">
                            <span class="checkbox-custom"></span>
                            Desgaste o mal aspecto
                        </label>
                        <label class="option-label">
                            <input type="checkbox" name="problem" value="Protección Preventiva">
                            <span class="checkbox-custom"></span>
                            Protección Preventiva (evitar problemas a futuro)
                        </label>
                    </div>
                     <p id="problems-error" class="error-message hidden">Debes seleccionar al menos un problema.</p>
                </fieldset>

                <fieldset class="diagnostic-step">
                    <legend>Paso 2: Describe tu Proyecto</legend>
                    <div class="form-group">
                        <label for="sqMeters">¿Cuántos metros cuadrados (m²) necesitas proteger?</label>
                        <input type="number" id="sqMeters" name="sqMeters" placeholder="Ej: 80" min="1" required>
                        <p class="small-text">Ayuda: Mide el largo y el ancho, y multiplícalos.</p>
                        <p id="sqMeters-error" class="error-message hidden">Ingresa una superficie válida.</p>
                    </div>
                </fieldset>

                 <fieldset class="diagnostic-step">
                    <legend>Paso 3: Tus Datos de Contacto</legend>
                    <div class="form-group">
                        <label for="userNameDiag">Tu Nombre</label>
                        <input type="text" id="userNameDiag" name="userNameDiag" placeholder="Ej: Juan Pérez" required>
                        <p id="userNameDiag-error" class="error-message hidden">Por favor, ingresa tu nombre.</p>
                    </div>
                     <div class="form-group">
                        <label for="userPhone">Tu Teléfono (Opcional)</label>
                        <input type="tel" id="userPhone" name="userPhone" placeholder="Ej: 222 123 4567">
                        <p class="small-text">Para un contacto más rápido del especialista.</p>
                    </div>
                </fieldset>
            </div>
            <button id="diagnostic-submit-btn" type="submit" class="link-button">
                Recibir Diagnóstico por WhatsApp
            </button>
        </form>
         <div id="success-message" class="hidden">
            <h3>¡Solicitud en Camino!</h3>
            <p>Hemos abierto WhatsApp para que envíes tu solicitud al especialista PEDRO. Él se pondrá en contacto contigo a la brevedad.</p>
        </div>
    `;

    document.getElementById('back-button-diag').addEventListener('click', () => showView('links-container'));
    
    const form = document.getElementById('diagnostic-form');
    form.addEventListener('submit', handleDiagnosticSubmit);
}


/**
 * Maneja el envío del formulario de diagnóstico.
 */
function handleDiagnosticSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const submitBtn = document.getElementById('diagnostic-submit-btn');

    let isValid = true;
    
    form.querySelectorAll('.error-message').forEach(el => el.classList.add('hidden'));

    const selectedProblems = Array.from(form.querySelectorAll('input[name="problem"]:checked')).map(cb => cb.value);
    if (selectedProblems.length === 0) {
        document.getElementById('problems-error').classList.remove('hidden');
        isValid = false;
    }

    const sqMeters = form.elements.sqMeters.value;
    if (!sqMeters || sqMeters < 1) {
        document.getElementById('sqMeters-error').classList.remove('hidden');
        isValid = false;
    }

    const userName = form.elements.userNameDiag.value.trim();
    if (!userName) {
        document.getElementById('userNameDiag-error').classList.remove('hidden');
        isValid = false;
    }

    if (!isValid) return;

    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Procesando...';
    
    const userPhone = form.elements.userPhone.value.trim();
    const phoneText = userPhone ? `\n- Mi teléfono: ${userPhone}` : '';

    const problemsText = selectedProblems.join(', ');
    const message = `Hola PEDRO, mi nombre es ${userName}. Solicito un diagnóstico de protección.
- Problemas detectados: ${problemsText}
- Superficie a proteger: ${sqMeters} m²${phoneText}`;

    const whatsappUrl = `https://wa.me/5212228496995?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    document.getElementById('diagnostic-form').classList.add('hidden');
    document.getElementById('success-message').classList.remove('hidden');
    
    setTimeout(() => {
        showView('links-container');
        document.getElementById('diagnostic-form').classList.remove('hidden');
        document.getElementById('success-message').classList.add('hidden');
        form.reset();
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Recibir Diagnóstico por WhatsApp';
    }, 5000);
}


/**
 * Formatea un número como moneda MXN.
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    }).format(value);
}

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
 * Muestra un aviso de instalación para usuarios de iOS.
 */
function setupIosInstallPrompt() {
    const isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 && !window.MSStream);
    const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches;
    const iosInstallPrompt = document.getElementById('ios-install-prompt');
    const installButton = document.getElementById('install-button');

    if (isIos && !isInStandaloneMode && iosInstallPrompt) {
        iosInstallPrompt.classList.remove('hidden');
        if (installButton) {
           installButton.style.display = 'none';
        }
    }
}


/**
 * Renderiza el perfil del usuario en el encabezado.
 */
function renderProfile() {
    const avatar = document.getElementById('avatar');
    const userName = document.getElementById('userName');

    if (avatar && userName) {
        avatar.src = profile.avatarUrl;
        avatar.alt = `Avatar de ${profile.name}`;
        userName.textContent = profile.name;
    }
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
                    <span class="list-price">${formatCurrency(p.precio_lista)}</span>
                    <span class="sale-price">${formatCurrency(p.precio_venta)}</span>
                </p>
                <p class="offer-description">🔥 ${p.descripcion_oferta}</p>
            `;
        } else {
            priceHtml = `
                <p class="product-price">
                    <span class="sale-price">${formatCurrency(p.precio_venta)}</span>
                </p>
            `;
        }
        
        let upsellHtml = '';
        if (p.name.includes("IMPERDELLANTA 7")) {
            upsellHtml = `<p class="upsell-note">${offlineData.salesNudges.upgrade}</p>`;
        }

        const differentiatorsHtml = p.differentiators && p.differentiators.length > 0 ? `
            <div class="differentiators-section" style="margin-top: 1rem;">
                <p><strong>Diferenciadores Clave:</strong></p>
                <ul>
                    ${p.differentiators.map(d => `<li style="margin-bottom: 0.5rem;"><strong>${d.title}:</strong> ${d.description}</li>`).join('')}
                </ul>
            </div>
        ` : '';

        const whatsappMessage = encodeURIComponent(`Hola PEDRO, quiero el ${p.name} que vi en la app`);
        const whatsappUrl = `https://wa.me/5212228496995?text=${whatsappMessage}`;

        return `
            <div class="accordion-item">
                <button class="accordion-header">${p.name}</button>
                <div class="accordion-content">
                    ${priceHtml}
                    <p class="price-vat"><small>(IVA incluido)</small></p>
                    <p>${p.details}</p>
                    ${differentiatorsHtml}
                    ${upsellHtml}
                    <a href="${whatsappUrl}" class="direct-purchase-cta external" target="_blank" rel="noopener noreferrer">Quiero este producto</a>
                </div>
            </div>
        `;
    }).join('');

    const kitNudgeHtml = `<div class="sales-nudge">${offlineData.salesNudges.kit}</div>`;
    const applicationGuideHtml = `<ul>${offlineData.applicationGuide.map(step => `<li>${step}</li>`).join('')}</ul>`;
    const whyChooseUsHtml = `
        <h4>Nuestra Misión</h4>
        <p>${offlineData.mission}</p>
        <h4 style="margin-top: 1.5rem;">Nuestro Compromiso</h4>
        <p>${offlineData.commitment}</p>
        <h4 style="margin-top: 1.5rem;">Nuestros Valores</h4>
        <ul>${offlineData.differentiators.map(item => `<li><strong>${item.title}:</strong> ${item.content}</li>`).join('')}</ul>
    `;
    const contactHtml = `
        <p>${offlineData.contact.address}</p>
        <p><strong>Teléfono:</strong> ${offlineData.contact.phone}</p>
        <ul>${offlineData.contact.hours.map(h => `<li>${h}</li>`).join('')}</ul>
    `;
    const faqHtml = offlineData.faq.map(item => `
        <div class="accordion-item">
            <button class="accordion-header">${item.question}</button>
            <div class="accordion-content">
                <p>${item.answer}</p>
            </div>
        </div>
    `).join('');
    const priceDisclaimerHtml = `
        <div class="price-disclaimer">
            <p>Precios offline pueden estar desactualizados. Cuando te conectes, confirma los precios vigentes en la <a href="https://drino.short.gy/IMPERDELLANTA_PRECIOS" target="_blank" rel="noopener noreferrer">lista oficial aquí</a>.</p>
            <p class="small-text">Precios sujetos a cambios sin previo aviso.</p>
        </div>
    `;

    container.innerHTML = `
        <div class="view-header">
            <button id="back-button" aria-label="Volver a enlaces">←</button>
            <h2>Guía Rápida</h2>
        </div>
        <div class="guide-section">
            <h3>Productos Esenciales</h3>
            ${priceDisclaimerHtml}
            ${productsHtml}
            ${kitNudgeHtml}
        </div>
        <div class="guide-section">
            <h3>Información Clave</h3>
            <div class="accordion-item">
                <button class="accordion-header">Por Qué Elegir Imperdellanta</button>
                <div class="accordion-content">
                    ${whyChooseUsHtml}
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-header">Guía Rápida de Aplicación</button>
                <div class="accordion-content">
                    ${applicationGuideHtml}
                </div>
            </div>
             <div class="accordion-item">
                <button class="accordion-header">${offlineData.purchaseOptions.title}</button>
                <div class="accordion-content">
                    ${offlineData.purchaseOptions.content}
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-header">${offlineData.forProfessionals.title}</button>
                <div class="accordion-content">
                    ${offlineData.forProfessionals.content}
                </div>
            </div>
        </div>
        <div class="guide-section">
            <h3>Preguntas Frecuentes (FAQ)</h3>
            ${faqHtml}
        </div>
        <div class="guide-section">
            <h3>Contacto y Horarios</h3>
            ${contactHtml}
        </div>
    `;

    document.getElementById('back-button').addEventListener('click', () => showView('links-container'));
    
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
                    // Forzar la comprobación de una actualización en cada carga.
                    registration.update();
                })
                .catch(error => {
                    console.log('Fallo en el registro de ServiceWorker:', error);
                });

            // Este evento se dispara cuando el service worker que controla la página cambia.
            // Es el momento perfecto para recargar y obtener el nuevo contenido.
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                console.log('Nuevo Service Worker activado. Recargando página...');
                window.location.reload();
            });
        });
    }
}

/**
 * Configura y maneja los eventos del modal del chatbot.
 */
function setupChatbotModal() {
    const fab = document.getElementById('chat-fab');
    const modal = document.getElementById('chat-modal');
    const closeBtn = document.getElementById('chat-modal-close');
    const iframe = document.getElementById('chat-iframe');
    const chatbotUrl = "https://mailgeneral.github.io/bot_app/";

    fab.addEventListener('click', () => {
        if (iframe.src !== chatbotUrl) {
            iframe.src = chatbotUrl;
        }
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
    });

    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restaura el scroll
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        // Cierra el modal solo si se hace clic en el fondo oscuro (el propio modal)
        if (event.target === modal) {
            closeModal();
        }
    });
}

/**
 * Función principal asíncrona para inicializar la aplicación.
 */
async function initializeApp() {
    // Lógica de actualización automática y silenciosa
    const hasReloaded = sessionStorage.getItem('appReloaded');
    if (!hasReloaded && navigator.onLine) {
        sessionStorage.setItem('appReloaded', 'true');
        // El parámetro 'true' fuerza una recarga desde el servidor (hard refresh)
        window.location.reload(true);
        return; // Detiene la ejecución para permitir la recarga
    }

    renderProfile();
    renderLinks();
    registerServiceWorker();
    setupInstallButton();
    setupIosInstallPrompt();
    setupChatbotModal();
    
    updateOnlineStatus();
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    try {
        const response = await fetch('precios.json');
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        preciosData = await response.json();
        
        setupStaticData(); 
        
    } catch (error) {
        console.error("No se pudo cargar precios.json. La funcionalidad de precios offline puede estar limitada.", error);
        setupStaticData(); 
    }

    renderInfoSlider();
    setupFeaturedProductCarousel();
    renderOfflineGuide();
    renderDiagnosticTool();

    document.getElementById('diagnostic-btn').addEventListener('click', () => handleInternalLink('#diagnostic'));
    document.getElementById('calculator-form').addEventListener('submit', handleCalculate);
    document.getElementById('back-button-calc').addEventListener('click', () => showView('links-container'));


    showView('links-container');
}

/**
 * Configura los datos estáticos de la aplicación.
 */
function setupStaticData() {
    productDetailsMap = {
        "IMPERDELLANTA 7 (Cubeta 19L)": {
            details: `<strong>Clasificación:</strong> Equilibrio perfecto entre resistencia y precio.<br><br>
                      <strong>Descripción:</strong> Impermeabilizante elastomérico con caucho reciclado y fibra de celulosa. No necesita malla de refuerzo.<br><br>
                      <strong>Beneficios Clave:</strong> Durabilidad de 7+ años, resiste humedad y rayos UV, reduce calor y ruido, secado rápido.<br><br>
                      <strong>Rendimiento:</strong> 20 m² por cubeta de 19L (a dos capas).`,
            differentiators: [
              {
                title: "Tecnología Fibratada con Caucho: Ahorra Tiempo y Dinero en Malla de Refuerzo",
                description: "A diferencia de otros, nuestro producto ya viene reforzado con fibra de celulosa y polvo de caucho reciclado. Esto significa que te ahorras el costo y el complejo trabajo de instalar una malla de refuerzo, reduciendo el tiempo de aplicación a la mitad y eliminando un punto de falla común."
              },
              {
                title: "Aislamiento Inteligente: Reduce Calor, Frío y Ruido",
                description: "El caucho es un aislante natural. Al aplicarlo, no solo impermeabilizas, sino que añades una barrera que ayuda a mantener tu casa más fresca en verano y más cálida en invierno, lo que puede reflejarse en ahorros de energía. Además, amortigua el molesto ruido de la lluvia."
              },
              {
                title: "Sistema Reparable: Evita Costos de Reemplazo Total",
                description: "Si en el futuro hay algún daño, puedes reparar solo la sección afectada. Con sistemas de membrana o asfálticos (chapopote), una sola filtración a menudo te obliga a levantar y reemplazar todo el sistema, lo que multiplica los costos y las molestias a largo plazo."
              }
            ]
        },
        "IMPERDELLANTA 12 (Cubeta 19L)": {
            details: `<strong>Clasificación:</strong> Máxima protección y durabilidad.<br><br>
                      <strong>Descripción:</strong> Impermeabilizante premium con resina de alto desempeño y caucho reciclado. Máxima elasticidad y resistencia.<br><br>
                      <strong>Beneficios Clave:</strong> Durabilidad de 12+ años, soporta cambios climáticos bruscos, sin malla de refuerzo, amigable con el ambiente.<br><br>
                      <strong>Rendimiento:</strong> 20 m² por cubeta de 19L (a dos capas).`,
            differentiators: [
               {
                title: "Tecnología Fibratada con Caucho: Ahorra Tiempo y Dinero en Malla de Refuerzo",
                description: "A diferencia de otros, nuestro producto ya viene reforzado con fibra de celulosa y polvo de caucho reciclado. Esto significa que te ahorras el costo y el complejo trabajo de instalar una malla de refuerzo, reduciendo el tiempo de aplicación a la mitad y eliminando un punto de falla común."
              },
              {
                title: "Aislamiento Inteligente: Reduce Calor, Frío y Ruido",
                description: "El caucho es un aislante natural. Al aplicarlo, no solo impermeabilizas, sino que añades una barrera que ayuda a mantener tu casa más fresca en verano y más cálida en invierno, lo que puede reflejarse en ahorros de energía. Además, amortigua el molesto ruido de la lluvia."
              },
              {
                title: "Sistema Reparable: Evita Costos de Reemplazo Total",
                description: "Si en el futuro hay algún daño, puedes reparar solo la sección afectada. Con sistemas de membrana o asfálticos (chapopote), una sola filtración a menudo te obliga a levantar y reemplazar todo el sistema, lo que multiplica los costos y las molestias a largo plazo."
              }
            ]
        },
        "RESANADOR RS-MAX (Envase 1L)": {
            details: `<strong>Clasificación:</strong> Blindaje anti goteras y fisuras.<br><br>
                      <strong>Descripción:</strong> Pasta para resanar grietas y fisuras con máxima resistencia y elasticidad. Solución definitiva a goteras.<br><br>
                      <strong>Beneficios Clave:</strong> Durabilidad de 10 años, alta adherencia, repele agua y humedad, elongación del 150%.<br><br>
                      <strong>Presentación:</strong> 1L incluye malla de fibra de vidrio.`,
            differentiators: [
              {
                title: "Tecnología Única de Sellado Flexible: La 'Goma' que Repara Definitivamente",
                description: "A diferencia de resanadores rígidos que se cuartean, RS-MAX seca con una consistencia elástica tipo goma que se expande y contrae con la superficie. Esto le permite absorber movimientos y cambios de temperatura sin romperse, brindando una reparación definitiva a las grietas."
              },
              {
                title: "Más Versátil y Resistente que el Silicón",
                description: "Es la solución ideal no solo para losas, sino para sellar tornillería y traslapes en techos de lámina, uniones en domos e incluso bordes de ventanas, donde el silicón tradicional falla con el sol y el tiempo. Además, es 100% compatible para ser cubierto con cemento, estuco o pintura."
              }
            ]
        },
        "SELLADOR SELLAPLUS EX (Garrafa 1L)": {
            details: `<strong>Clasificación:</strong> Extra adherente, el vínculo perfecto.<br><br>
                      <strong>Descripción:</strong> Sellador acrílico concentrado que actúa como puente de adherencia entre la superficie y el acabado final.<br><br>
                      <strong>Beneficios Clave:</strong> Aumenta durabilidad y rendimiento del impermeabilizante, sella poros, protege contra salitre, secado rápido.<br><br>
                      <strong>Rendimiento:</strong> 38-40 m² por litro de sellador diluido.`,
            differentiators: [
              {
                title: "Fórmula Dedicada: Garantiza Máxima Adherencia y Durabilidad",
                description: "Mientras otras marcas te sugieren diluir su propio impermeabilizante como 'primario' (una práctica poco profesional que debilita el producto), nuestro sistema incluye un sellador concentrado diseñado específicamente para una sola tarea: sellar el poro y crear un anclaje perfecto para el impermeabilizante. Es el primer paso para un trabajo garantizado."
              },
              {
                title: "Doble Función: Sellador y Coadyuvante Anti-Goteras",
                description: "No solo prepara toda la superficie, sino que se puede aplicar puro dentro de las grietas justo antes de nuestro resanador para crear un blindaje interno. Su fórmula concentrada lo hace muy rendidor y económico, siendo una parte indispensable del sistema."
              }
            ]
        },
        "PINTURA LIDERPINT (Cubeta 19L)": {
            details: `<strong>Clasificación:</strong> Calidad económica para interiores.<br><br>
                      <strong>Descripción:</strong> Pintura vinil-acrílica económica ideal para obras y paredes interiores que buscan un acabado mate uniforme.<br><br>
                      <strong>Beneficios Clave:</strong> Económica y rendidora, fácil aplicación, garantía de 3 años en interiores.<br><br>
                      <strong>Rendimiento:</strong> 70-90 m² por cubeta de 19L.`,
            differentiators: [
              {
                title: "La Opción Inteligente para Obras: Económica sin Desprender Polvo",
                description: "A diferencia de otras pinturas de bajo costo que al secar dejan un residuo polvoso ('gis'), LIDERPINT está formulada con resinas de calidad que aseguran un acabado limpio y una buena adherencia. Ofrece la mejor relación costo-beneficio para proyectos de gran volumen e interiores."
              }
            ]
        },
        "PINTURA OLYMPUS 300 (Cubeta 19L)": {
            details: `<strong>Clasificación:</strong> Pintura premium para exteriores.<br><br>
                      <strong>Descripción:</strong> Pintura vinil-acrílica de alto desempeño con excelente poder cubriente y gran resistencia a los rayos UV y al intemperismo.<br><br>
                      <strong>Beneficios Clave:</strong> Calidad premium, lavable (resiste 4000+ ciclos), alto rendimiento, ideal para fachadas.<br><br>
                      <strong>Rendimiento:</strong> 130-170 m² por cubeta de 19L.`,
            differentiators: [
              {
                title: "Calidad Premium para Exteriores a un Precio Inteligente",
                description: "Te ofrece el poder cubriente, la resistencia al sol y la durabilidad de las pinturas más caras del mercado, pero a un costo más accesible. Es la elección perfecta para proyectos importantes donde no quieres sacrificar calidad pero sí optimizar tu presupuesto."
              },
              {
                title: "Acabado Lavable y de Alta Resistencia",
                description: "Soporta la limpieza y el desgaste del exterior sin perder su color ni acabado, manteniendo tus fachadas impecables por mucho más tiempo. Es una inversión en la apariencia y protección de tu propiedad a largo plazo."
              }
            ]
        }
    };
    
    infoSlidesData = [
        {
            title: "Adiós a las Mallas de Refuerzo",
            text: "Nuestra tecnología fibratada te ahorra el costo y la molestia de instalar mallas. Menos tiempo, menos gasto.",
            targetProduct: "IMPERDELLANTA 12 (Cubeta 19L)"
        },
        {
            title: "🌍 Impacto Ecológico Real",
            text: "Proteges tu patrimonio y al planeta con nuestro caucho de llanta 100% reciclado.",
        },
        {
            title: "🌡️ Confort Térmico Garantizado",
            text: "Reduce el calor en verano y el frío en invierno, ¡y hasta el molesto ruido de la lluvia!",
            targetProduct: "IMPERDELLANTA 7 (Cubeta 19L)"
        },
        {
            title: "🔧 ¿Un daño? Repáralo, no lo reemplaces",
            text: "Nuestro sistema es 100% reparable. Arregla solo la zona dañada sin cambiar todo el sistema. Inteligente.",
            targetProduct: "RESANADOR RS-MAX (Envase 1L)"
        },
        {
            title: "🤔 ¿Diferencia entre 7 y 12 años?",
            text: "El de 12 años usa una resina de alto rendimiento para máxima durabilidad. El de 7 años es el equilibrio perfecto entre resistencia y precio."
        },
        {
            title: "🎨 ¿En qué colores viene?",
            text: "De línea tenemos Blanco (refleja el sol y reduce calor) y Terracota. Otros colores son sobre pedido."
        },
        {
            title: "❗ La importancia del Sellador",
            text: "Omitir el sellador es la causa #1 de fallas. Asegura la adherencia y durabilidad de tu inversión. No te lo saltes."
        }
    ];

    const combinedProducts = preciosData.productos.map(p => ({
        name: p.nombre_producto,
        precio_lista: p.precio_lista,
        precio_venta: p.precio_venta,
        promocion_activa: p.promocion_activa,
        descripcion_oferta: p.descripcion_oferta,
        details: productDetailsMap[p.nombre_producto]?.details || 'Detalles no disponibles.',
        differentiators: productDetailsMap[p.nombre_producto]?.differentiators || []
    }));

    offlineData = {
        products: combinedProducts,
        mission: "Transformamos la manera en que protegemos tu patrimonio y el planeta. En Imperdellanta fabricamos impermeabilizantes fibratados de alta calidad, formulados con caucho de llanta 100% reciclado y que permite una durabilidad de muchos años. Nuestro sistema no requiere mallas —las mallas son costosas, engorrosas y aumentan tiempos y costos—; aquí puedes reparar el sistema sin tener que levantar toda la superficie, lo que se traduce en menos tiempo, menos gasto y menos molestias. Reducen además el calor y el ruido, ofreciendo una protección rápida, eficaz y transparente.",
        commitment: "¡Nuestro compromiso como Imperdellanta es ser el vínculo perfecto para la protección de tu patrimonio, garantizando la máxima calidad directamente desde nuestra fábrica en Puebla! Estamos impulsados por la misión de ofrecer la solución definitiva y más ecológica del mercado, por eso utilizamos caucho de llanta 100% reciclado para formular nuestros impermeabilizantes, asegurando una resistencia y elasticidad sorprendentes contra las filtraciones, la humedad y los cambios climáticos bruscos. Nos comprometemos a blindar tus techos y muros para que duren mucho más, a reducir el calor, frío y ruido, y a seguir ofreciendo modelos de negocio rentables a nuestros distribuidores y aplicadores, porque tu tranquilidad y el cuidado del planeta son nuestra máxima prioridad.",
        differentiators: [
            {
                title: "Eficiencia y Ahorro de Tiempo",
                content: "Valoramos tu tiempo y tu dinero. Nos esforzamos en ofrecer productos fáciles de entender, aplicar y mantener, eliminando pasos innecesarios y reduciendo costos y molestias. Cada interacción, ya sea digital o presencial, está diseñada para que tu experiencia sea rápida, práctica y efectiva, porque tu tiempo es tan valioso como tu inversión."
            },
            {
                title: "Transparencia y Calidad",
                content: "Creemos que la honestidad y la calidad son inseparables. No nos enfocamos en ofrecer precios bajos a costa de reducir el valor de nuestros productos. Brindamos información completa sobre su rendimiento, garantías y beneficios, para que cada peso invertido tenga sentido y genere confianza. Queremos que cada cliente se sienta seguro y satisfecho con su elección."
            },
            {
                title: "Innovación Sustentable",
                content: "Transformamos problemas ambientales en soluciones de protección avanzadas. Nuestro caucho de llanta 100% reciclado no solo extiende durabilidad, sino que también ayuda a reducir calor, frío y ruido en tus espacios. Con cada producto, buscamos que la innovación ecológica se traduzca en bienestar real para tu hogar y para el planeta."
            },
            {
                title: "Fidelización y Crecimiento Compartido",
                content: "Convertimos clientes y distribuidores en promotores de nuestra marca, ofreciendo soporte, capacitación y beneficios tangibles. Creemos en relaciones a largo plazo basadas en confianza y colaboración, porque cuando tú creces y ahorras, nosotros también ganamos. Queremos que sientas que formar parte de Imperdellanta significa pertenecer a una comunidad comprometida con la eficiencia, el cuidado del medio ambiente y la optimización de tus recursos, tiempo y dinero."
            }
        ],
        purchaseOptions: {
            title: "Formas de Entrega",
            content: `<ul>
                        <li><strong>Compras en Puebla y zona conurbada:</strong> Contáctanos por WhatsApp o teléfono directo a fábrica.</li>
                        <li><strong>Compras Nacionales (resto del país):</strong> Utiliza la compra en línea a través de nuestra tienda oficial.</li>
                      </ul>
                      <p>Cuando recuperes la conexión, los enlaces para contactarnos y para ir a la tienda están en la pantalla principal.</p>`
        },
        forProfessionals: {
            title: "¿Eres Distribuidor o Aplicador?",
            content: `<p>Tenemos modelos de negocio con beneficios especiales para ti. Ofrecemos visibilidad, material de ventas y descuentos por volumen. Cuando estés en línea, usa los enlaces de la página principal para aplicar y conocer más.</p>`
        },
        salesNudges: {
            kit: "💡 <strong>Tip de Profesional:</strong> Para un resultado garantizado, no te saltes pasos. Usa siempre el kit completo: <strong>Sellador</strong> para adherencia y <strong>Resanador</strong> para grietas. ¡Asegura tu inversión!",
            upgrade: "🤔 <strong>¿Buscas la máxima durabilidad?</strong> A veces, la decisión más inteligente es invertir un poco más hoy para evitar gastos y dolores de cabeza mañana. Considera nuestro <strong>IMPERDELLANTA 12</strong> para 12+ años de tranquilidad."
        },
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
                question: "¿Cuál es la diferencia entre el de 7 y 12 años?",
                answer: "La principal diferencia es la durabilidad y la formulación. IMPERDELLANTA 12 usa una resina de 'alto desempenho' (alto rendimiento) que le le otorga mayor resistencia y una vida útil de 12+ años, ideal para máxima protección. IMPERDELLANTA 7 ofrece un equilibrio perfecto entre resistencia y precio, con una durabilidad de 7+ años. Ambas opciones son ecológicas y de alta calidad."
            },
            {
                question: "¿En qué colores viene el impermeabilizante?",
                answer: "Nuestros impermeabilizantes de línea (Imperdellanta 7 y 12) vienen en <strong>Blanco</strong> y <strong>Terracota</strong>. El blanco es ideal para reflejar el sol y ayudar a reducir la temperatura de tus interiores. Para otros colores se requiere un pedido especial, puedes consultarlo vía WhatsApp cuando te conectes."
            },
            {
                question: "¿Realmente no necesito malla de refuerzo?",
                answer: "¡Correcto! Nuestros impermeabilizantes están reforzados internamente con fibra de celulosa y caucho reciclado. Esta tecnología 'fibratada' crea una capa protectora que ya tiene la resistencia estructural necesaria, por lo que te ahorras el costo, el tiempo y el complejo trabajo de instalar una malla de refuerzo por separado, eliminando además un punto de falla común."
            },
            {
                question: "¿Por qué es tan importante usar el Sellador?",
                answer: "¡Absolutamente! El sellador es un paso crucial para garantizar un trabajo profesional y duradero. Su función es sellar el poro de la superficie y crear un 'puente de adherencia' perfecto para que el impermeabilizante se ancle con máxima fuerza. Usarlo no solo asegura que el impermeabilizante dure todos los años que prometemos, sino que también aumenta su rendimiento. Omitir este paso es la principal causa de fallas prematuras en cualquier sistema."
            },
            {
                question: "¿Puedo aplicar Imperdellanta sobre un impermeabilizante viejo?",
                answer: "Sí, pero es crucial. Debes retirar todo el material viejo que esté suelto o mal adherido. La superficie debe estar completamente limpia y seca para garantizar la máxima adherencia del nuevo producto."
            },
            {
                question: "¿Cómo se mantiene el sistema Imperdellanta?",
                answer: "El mantenimiento es muy sencillo. Recomendamos inspeccionar la superficie una vez al año para buscar posibles daños o nuevas grietas. Para extender la vida útil, se puede aplicar una capa de mantenimiento del mismo impermeabilizante cada 3 o 4 años. Una gran ventaja es que nuestro sistema es 100% reparable: si encuentras un daño, puedes arreglar solo esa sección sin necesidad de levantar y reemplazar todo el material, ahorrando mucho dinero y esfuerzo."
            },
            {
                question: "¿Qué pasa si llueve poco después de aplicar?",
                answer: "El tiempo de secado al tacto es de 1-3 horas por capa. Es ideal aplicar con un pronóstico de al menos 24 horas sin lluvia para asegurar un curado correcto y evitar que el acabado se vea afectado."
            }
        ]
    };
}


// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', initializeApp);

})();