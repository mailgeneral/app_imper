import React from 'react';
import { createRoot } from 'react-dom/client';

// --- ¡PERSONALIZA TU CONTENIDO AQUÍ! ---

const profileData = {
  name: "@TuMarca",
  description: "Todos mis enlaces importantes en un solo lugar.",
  // Cambia esta URL por la de tu imagen de perfil. Puede ser una URL de internet o un archivo local.
  imageUrl: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=2585&auto=format&fit=crop",
};

const linksData = [
  {
    title: "Mi Sitio Web Principal",
    url: "https://example.com",
  },
  {
    title: "Sígueme en Twitter",
    url: "https://twitter.com/example",
  },
  {
    title: "Canal de YouTube",
    url: "https://youtube.com/example",
  },
  {
    title: "Perfil de LinkedIn",
    url: "https://linkedin.com/in/example",
  },
    {
    title: "Contáctame por Email",
    url: "mailto:hola@example.com",
  },
];

// --- FIN DE LA ZONA DE PERSONALIZACIÓN ---

const App = () => {
  return (
    <div className="app-container">
      <header className="profile-header">
        <img src={profileData.imageUrl} alt="Foto de perfil" className="profile-picture" />
        <h1 className="profile-name">{profileData.name}</h1>
        <p className="profile-description">{profileData.description}</p>
      </header>
      <main className="links-container">
        {linksData.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            {link.title}
          </a>
        ))}
      </main>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
