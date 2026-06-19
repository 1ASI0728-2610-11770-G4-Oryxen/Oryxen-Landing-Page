/* ============================================================================
   Oryxen Landing Page — interactions & i18n
   ========================================================================== */

// ---- Mobile menu toggle ------------------------------------------------------
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('nav__toggle--open');
    navMobile.classList.toggle('nav__mobile--open');
  });

  navMobile.querySelectorAll('.nav__mobile-link').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('nav__toggle--open');
      navMobile.classList.remove('nav__mobile--open');
    });
  });
}

// ---- Smooth scrolling for in-page anchors -----------------------------------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (event) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
    }
  });
});

// ---- Scroll reveal animation -------------------------------------------------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
);

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.service-card, .step-card, .benefit-card, .pricing-card, .testimonial-card')
    .forEach((el) => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
});

// ---- Hero fade-in on load ----------------------------------------------------
window.addEventListener('load', () => {
  document.body.classList.add('is-loaded');
});

// ---- Navbar background on scroll --------------------------------------------
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.backgroundColor = 'hsla(60, 33%, 96%, 0.98)';
      nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      nav.style.backgroundColor = 'hsla(60, 33%, 96%, 0.95)';
      nav.style.boxShadow = 'none';
    }
  });
}

// ---- Active nav link on scroll ----------------------------------------------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('nav__link--active', link.getAttribute('href') === `#${current}`);
  });
});

/* ============================================================================
   Internationalization (i18n) — driven by [data-i18n] attributes
   ========================================================================== */
const translations = {
  en: {
    'nav.about': 'About the Product',
    'nav.howItWorks': 'How it Works',
    'nav.benefits': 'Benefits',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.cta': 'Open the app',
    'hero.title': 'Take care of your plants<br />effortlessly',
    'hero.text':
      'Oryxen combines automated caring and AI diagnostics to keep<br class="hero__break" /> your plants healthy, thriving and happier.',
    'hero.cta': 'Open the web app',
    'hero.secondary': 'See how it works',
    'about.title': 'About the Product',
    'about.text1':
      'At Oryxen, we bridge the gap between nature and technology. By combining automated hardware with advanced AI analytics, we transform traditional plant care into a precise, stress-free, and data-driven experience.',
    'about.text2':
      'Our ecosystem monitors your plants vital metrics in real time to deliver the exact care they need.',
    'about.videoTitle': 'See Our Product in Action',
    'services.title': 'Services',
    'services.monitoring.title': 'Monitoring with AI',
    'services.monitoring.text':
      "Keep a constant eye on the environment of your plants using Oryxen's smart sensors and get real-time data and recommendations from an AI chatbot.",
    'services.watering.title': 'Watering',
    'services.watering.text':
      'Automatically water your plants on a convenient schedule, or turn it on manually when needed.',
    'services.community.title': 'Community',
    'services.community.text':
      'Join a community of plant lovers and get tips and advice on caring for your plants.',
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle':
      'Get started with Oryxen in 4 easy steps and transform the way you care for your plants.',
    'howItWorks.step1.title': 'Mount or move to your plant',
    'howItWorks.step1.text':
      'Set up your plant in any indoor or outdoor space, mount or place the monitor where needed.',
    'howItWorks.step2.title': 'Connect to the Wifi App',
    'howItWorks.step2.text':
      'Download the Oryxen app to your mobile device, connect the monitor to your home wifi for easy access.',
    'howItWorks.step3.title': 'Receive smart notifications',
    'howItWorks.step3.text':
      "Get real-time alerts about your plant's environment, water levels, and care needs delivered to your phone.",
    'howItWorks.step4.title': 'Watch it grow',
    'howItWorks.step4.text':
      "Monitor your plant's health and growth over time, get tips and advice tailored to your specific plants.",
    'benefits.title': 'Why Choose Oryxen?',
    'benefits.subtitle':
      'Discover the benefits of using our smart plant care system and join thousands of happy plant parents.',
    'benefits.benefit1.title': 'Proper care for your plant',
    'benefits.benefit1.text':
      'Get personalized care recommendations based on your plant type and environment.',
    'benefits.benefit2.title': 'Monthly alerts',
    'benefits.benefit2.text':
      'Receive monthly check-ins and seasonal care tips to keep your plants thriving year-round.',
    'benefits.benefit3.title': 'Save time or collect',
    'benefits.benefit3.text':
      'Spend less time worrying about your plants and more time enjoying them, or build your collection.',
    'benefits.benefit4.title': 'Learn new plant care',
    'benefits.benefit4.text':
      'Access our extensive library of plant care guides and grow your gardening skills.',
    'team.title': 'About the Team',
    'team.text':
      "At Oryxen, we believe in sustainable living. We want to help everyone care for their plants effectively by leveraging cutting-edge technology that's easy to use and fun for the whole family!",
    'team.videoTitle': 'Meet Our Team',
    'pricing.title': 'Plans & Pricing',
    'pricing.subtitle':
      'Choose the best plan that fits your plant care needs and start your journey to greener living.',
    'pricing.basic.name': 'Basic',
    'pricing.basic.period': '/month',
    'pricing.basic.f1': '✓ 3 plants monitor',
    'pricing.basic.f2': '✓ Basic watering',
    'pricing.basic.f3': '✓ Access to Chatbot AI basic functions',
    'pricing.basic.f4': '✓ Email support',
    'pricing.premium.name': 'Premium',
    'pricing.premium.period': '/month',
    'pricing.premium.f1': '✓ Unlimited plant monitors',
    'pricing.premium.f2': '✓ Advanced watering',
    'pricing.premium.f3': '✓ Priority support',
    'pricing.premium.f4': '✓ Access to Chatbot AI premium functions',
    'pricing.premium.f5': '✓ Community access',
    'pricing.cta': 'Get Started',
    'testimonials.title': 'What Our Users Say',
    'testimonials.subtitle':
      'Join thousands of happy customers who have transformed their plant care routine with Oryxen.',
    'testimonials.t1.text':
      '"I\'ve never been able to keep a plant alive for more than a month, but Oryxen has completely changed that! My plants are thriving and I finally understand what they need."',
    'testimonials.t1.role': 'Plant Enthusiast',
    'testimonials.t2.text':
      '"As someone who decorates homes with plants, Oryxen has been a game-changer for my clients. They love how easy it is to maintain their greenery!"',
    'testimonials.t2.role': 'Interior Designer',
    'testimonials.t3.text':
      '"With my hectic schedule, I never had time to properly care for my plants. Oryxen takes all the guesswork out of it. Highly recommend!"',
    'testimonials.t3.role': 'Busy Professional',
    'footer.description':
      'Making plant care effortless through smart technology and dedicated support for plant lovers everywhere.',
    'footer.product': 'Product',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.help': 'Help Center',
    'footer.contact': 'Contact',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2026 Oryxen. All rights reserved.',
  },
  es: {
    'nav.about': 'Acerca del Producto',
    'nav.howItWorks': 'Cómo Funciona',
    'nav.benefits': 'Beneficios',
    'nav.pricing': 'Precios',
    'nav.testimonials': 'Testimonios',
    'nav.cta': 'Ingresar a la app',
    'hero.title': 'Cuida tus plantas<br />fácilmente',
    'hero.text':
      'Oryxen combina cuidado automatizado y diagnósticos con IA para mantener<br class="hero__break" /> tus plantas saludables, prósperas y más felices.',
    'hero.cta': 'Ingresar a la app web',
    'hero.secondary': 'Cómo funciona',
    'about.title': 'Acerca del Producto',
    'about.text1':
      'En Oryxen, cerramos la brecha entre la naturaleza y la tecnología. Al combinar hardware automatizado con análisis avanzados de inteligencia artificial, transformamos el cuidado tradicional de las plantas en una experiencia precisa, sin estrés y basada en datos.',
    'about.text2':
      'Nuestro ecosistema monitorea las métricas vitales de tus plantas en tiempo real para brindarles el cuidado exacto que necesitan.',
    'about.videoTitle': 'Ve Nuestro Producto en Acción',
    'services.title': 'Servicios',
    'services.monitoring.title': 'Monitoreo con IA',
    'services.monitoring.text':
      'Mantén un ojo constante en el ambiente de tus plantas usando los sensores inteligentes de Oryxen y obtén datos en tiempo real y recomendaciones de un chatbot con IA.',
    'services.watering.title': 'Riego',
    'services.watering.text':
      'Riega automáticamente tus plantas según un horario conveniente, o actívalo manualmente cuando sea necesario.',
    'services.community.title': 'Comunidad',
    'services.community.text':
      'Únete a una comunidad de amantes de las plantas y obtén consejos y tips para el cuidado de tus plantas.',
    'howItWorks.title': 'Cómo Funciona',
    'howItWorks.subtitle':
      'Comienza con Oryxen en 4 sencillos pasos y transforma la forma en que cuidas tus plantas.',
    'howItWorks.step1.title': 'Monta o mueve hacia tu planta',
    'howItWorks.step1.text':
      'Configura tu planta en cualquier espacio interior o exterior, monta o coloca el monitor donde sea necesario.',
    'howItWorks.step2.title': 'Conecta a la App WiFi',
    'howItWorks.step2.text':
      'Descarga la aplicación Oryxen en tu dispositivo móvil, conecta el monitor a tu wifi doméstico para fácil acceso.',
    'howItWorks.step3.title': 'Recibe notificaciones inteligentes',
    'howItWorks.step3.text':
      'Obtén alertas en tiempo real sobre el ambiente de tu planta, niveles de agua y necesidades de cuidado en tu teléfono.',
    'howItWorks.step4.title': 'Mírala crecer',
    'howItWorks.step4.text':
      'Monitorea la salud y crecimiento de tu planta a lo largo del tiempo, con consejos adaptados a tus plantas específicas.',
    'benefits.title': '¿Por Qué Elegir Oryxen?',
    'benefits.subtitle':
      'Descubre los beneficios de usar nuestro sistema inteligente de cuidado de plantas y únete a miles de padres de plantas felices.',
    'benefits.benefit1.title': 'Cuidado apropiado para tu planta',
    'benefits.benefit1.text':
      'Obtén recomendaciones de cuidado personalizadas basadas en el tipo de planta y el ambiente.',
    'benefits.benefit2.title': 'Alertas mensuales',
    'benefits.benefit2.text':
      'Recibe revisiones mensuales y consejos de cuidado estacionales para mantener tus plantas prósperas todo el año.',
    'benefits.benefit3.title': 'Ahorra tiempo o colecciona',
    'benefits.benefit3.text':
      'Pasa menos tiempo preocupándote por tus plantas y más tiempo disfrutándolas, o construye tu colección.',
    'benefits.benefit4.title': 'Aprende nuevo cuidado de plantas',
    'benefits.benefit4.text':
      'Accede a nuestra extensa biblioteca de guías de cuidado de plantas y desarrolla tus habilidades de jardinería.',
    'team.title': 'Acerca del Equipo',
    'team.text':
      'En Oryxen, creemos en la vida sostenible. Queremos ayudar a todos a cuidar sus plantas de manera efectiva aprovechando tecnología de vanguardia que es fácil de usar y divertida para toda la familia.',
    'team.videoTitle': 'Conoce a Nuestro Equipo',
    'pricing.title': 'Planes y Precios',
    'pricing.subtitle':
      'Elige el mejor plan que se adapte a tus necesidades de cuidado de plantas y comienza tu viaje hacia una vida más verde.',
    'pricing.basic.name': 'Básico',
    'pricing.basic.period': '/mes',
    'pricing.basic.f1': '✓ Monitoreo de 3 plantas',
    'pricing.basic.f2': '✓ Riego básico',
    'pricing.basic.f3': '✓ Acceso a funciones básicas del Chatbot IA',
    'pricing.basic.f4': '✓ Soporte por email',
    'pricing.premium.name': 'Premium',
    'pricing.premium.period': '/mes',
    'pricing.premium.f1': '✓ Monitores de plantas ilimitados',
    'pricing.premium.f2': '✓ Riego avanzado',
    'pricing.premium.f3': '✓ Soporte prioritario',
    'pricing.premium.f4': '✓ Acceso a funciones premium del Chatbot IA',
    'pricing.premium.f5': '✓ Acceso a la comunidad',
    'pricing.cta': 'Comenzar',
    'testimonials.title': 'Lo Que Dicen Nuestros Usuarios',
    'testimonials.subtitle':
      'Únete a miles de clientes felices que han transformado su rutina de cuidado de plantas con Oryxen.',
    'testimonials.t1.text':
      '"Nunca había podido mantener una planta viva por más de un mes, ¡pero Oryxen lo ha cambiado por completo! Mis plantas prosperan y por fin entiendo lo que necesitan."',
    'testimonials.t1.role': 'Entusiasta de Plantas',
    'testimonials.t2.text':
      '"Como alguien que decora hogares con plantas, Oryxen ha sido un cambio total para mis clientes. ¡Les encanta lo fácil que es mantener su vegetación!"',
    'testimonials.t2.role': 'Diseñadora de Interiores',
    'testimonials.t3.text':
      '"Con mi horario agitado, nunca tuve tiempo para cuidar bien mis plantas. Oryxen elimina toda la incertidumbre. ¡Muy recomendado!"',
    'testimonials.t3.role': 'Profesional Ocupado',
    'footer.description':
      'Hacemos que el cuidado de plantas sea sencillo mediante tecnología inteligente y soporte dedicado para amantes de las plantas en todas partes.',
    'footer.product': 'Producto',
    'footer.support': 'Soporte',
    'footer.legal': 'Legal',
    'footer.help': 'Centro de Ayuda',
    'footer.contact': 'Contacto',
    'footer.terms': 'Términos de Servicio',
    'footer.privacy': 'Política de Privacidad',
    'footer.copyright': '© 2026 Oryxen. Todos los derechos reservados.',
  },
};

function applyTranslations(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dictionary[el.getAttribute('data-i18n')];
    if (value == null) return;
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  // The language button always shows the language it switches TO.
  const otherLang = lang === 'en' ? 'ES' : 'EN';
  document.querySelectorAll('.lang-toggle__text').forEach((span) => {
    span.textContent = otherLang;
  });

  document.documentElement.lang = lang;
}

let currentLanguage = localStorage.getItem('oryxen.lang') || 'en';

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
  localStorage.setItem('oryxen.lang', currentLanguage);
  applyTranslations(currentLanguage);
}

document.getElementById('langToggle')?.addEventListener('click', toggleLanguage);
document.getElementById('langToggleMobile')?.addEventListener('click', toggleLanguage);

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLanguage);
});
