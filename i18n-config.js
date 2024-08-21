import i18next from 'https://unpkg.com/i18next@21.9.2/dist/umd/i18next.min.js';


// Configura os recursos de tradução
const resources = {
    en: {
      translation: {
        "welcome": "Welcome to my website!",
        "description": "This is a brief description of my website.",
        "experience-academic": "Academic Experience",
        "experience-professional": "Professional Experience"
      }
    },
    es: {
      translation: {
        "welcome": "¡Bienvenido a mi sitio web!",
        "description": "Esta es una breve descripción de mi sitio web.",
        "experience-academic": "Experiencia Académica",
        "experience-professional": "Experiencia Profesional"
      }
    }
  };
  
  // Inicializa o i18next
  i18next.init({
    resources,
    lng: 'en', // Idioma padrão
    fallbackLng: 'en', // Idioma de fallback
    interpolation: {
      escapeValue: false // Não escapar valores
    }
  }, (err, t) => {
    if (err) {
      console.error('Error initializing i18next:', err);
      return;
    }
    // Atualiza o conteúdo da página na carga inicial
    updateContent();
  });
  
  // Função para mudar o idioma
  window.changeLanguage = (lng) => {
    i18next.changeLanguage(lng, (err) => {
      if (err) {
        console.error('Error changing language:', err);
        return;
      }
      updateContent();
    });
  };
  
  // Atualizar o conteúdo da página
  const updateContent = () => {
    document.getElementById('welcome').textContent = i18next.t('welcome');
    document.getElementById('description').textContent = i18next.t('description');
    document.getElementById('experience-academic').textContent = i18next.t('experience-academic');
    document.getElementById('experience-professional').textContent = i18next.t('experience-professional');
  };
  
  // Atualiza o conteúdo da página na carga inicial
  document.addEventListener('DOMContentLoaded', () => {
    updateContent();
  });