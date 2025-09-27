// --- ¡PERSONALIZA TU CONTENIDO AQUÍ! ---

const profileData = {
  name: "@TuMarca",
  description: "Todos mis enlaces importantes en un solo lugar.",
  imageUrl: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=2585&auto-format&fit=crop",
};

// Para añadir/editar enlaces, simplemente modifica esta lista.
// Pídeme que lo haga por ti si quieres.
const linksData = [
  {
    title: "Mi Sitio Web Principal",
    url: "https://example.com",
    description: "Visita mi portafolio y blog personal.",
    platform: "website" // Opciones: website, twitter, youtube, linkedin, email
  },
  {
    title: "Sígueme en Twitter",
    url: "https://twitter.com/example",
    description: "Actualizaciones y pensamientos en tiempo real.",
    platform: "twitter"
  },
  {
    title: "Canal de YouTube",
    url: "https://youtube.com/example",
    description: "Tutoriales, vlogs y más contenido en video.",
    platform: "youtube"
  },
  {
    title: "Conecta en LinkedIn",
    url: "https://linkedin.com/in/example",
    description: "Perfil profesional y red de contactos.",
    platform: "linkedin"
  }
];

// --- FIN DE LA ZONA DE PERSONALIZACIÓN ---

// Selección de elementos del DOM
const profileHeader = document.getElementById('profile-header');
const linksContainer = document.getElementById('links-container');

function getSocialIconSVG(platform) {
  switch (platform?.toLowerCase()) {
    case 'twitter':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
    case 'youtube':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25 1.09-.83 1.8-1.73 2.02-.95.22-2.29.35-3.94.44-1.64.09-2.4.1-3.44.1h-1.75c-1.04 0-1.8-.01-3.44-.1-1.65-.09-2.99-.22-3.94-.44-.9-.22-1.48-.93-1.73-2.02C.16 15.8 0 14.19 0 12l.06-1.83c.06-.8.15-1.43.28-1.9.25-1.09.83-1.8 1.73-2.02C3.01 6.01 4.35 5.88 6 5.8 7.64 5.7 8.4 5.7 9.44 5.7h1.75c1.04 0 1.8.01 3.44.1 1.65.09 2.99.22 3.94.44.9.22 1.48.93 1.73 2.02z"/></svg>`;
    case 'linkedin':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"/></svg>`;
    case 'email':
       return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`;
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`;
  }
}

function renderProfile() {
  profileHeader.innerHTML = `
    <img src="${profileData.imageUrl}" alt="Foto de perfil" class="profile-picture" />
    <h1 class="profile-name">${profileData.name}</h1>
    <p class="profile-description">${profileData.description}</p>
  `;
}

function renderLinks() {
  linksContainer.innerHTML = '';
  linksData.forEach(link => {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.target = '_blank';
    linkElement.rel = 'noopener noreferrer';
    linkElement.className = 'link-card';
    linkElement.setAttribute('aria-label', `Enlace a ${link.title}: ${link.description}`);
    linkElement.innerHTML = `
      <div class="link-icon">${getSocialIconSVG(link.platform)}</div>
      <div class="link-text-content">
        <div class="link-title">${link.title}</div>
        <p class="link-description-text">${link.description}</p>
      </div>
    `;
    linksContainer.appendChild(linkElement);
  });
}


// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderLinks();
});
