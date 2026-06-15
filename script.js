// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    mobileNav.classList.remove('active');
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 64; // Account for fixed nav height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all cards and sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const animateOnScroll = document.querySelectorAll(
    '.service-card, .step-card, .benefit-card, .pricing-card, .testimonial-card'
  );
  
  animateOnScroll.forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
  });
});

// Hero Fade In Animation
window.addEventListener('load', () => {
  const heroElements = document.querySelectorAll('.hero-title, .hero-text, .hero-buttons');
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1';
    }, index * 200);
  });
});

// Navbar Background on Scroll
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    nav.style.backgroundColor = 'rgba(247, 247, 237, 0.98)';
    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.backgroundColor = 'rgba(247, 247, 237, 0.95)';
    nav.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  const newsletterInput = newsletterForm.querySelector('.newsletter-input');
  const newsletterBtn = newsletterForm.querySelector('.btn');
  
  newsletterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = newsletterInput.value;
    
    if (email && email.includes('@')) {
      alert('Thank you for subscribing! 🌱');
      newsletterInput.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  });
}

// Pricing Card Hover Effects
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'all 0.3s ease';
  });
});

// Add parallax effect to hero
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
  }
});

// Add stagger animation to services grid
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

// Add stagger animation to benefits grid
const benefitCards = document.querySelectorAll('.benefit-card');
benefitCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

// Add stagger animation to testimonials
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Language Toggle Functionality
const languageToggle = document.getElementById('languageToggle');
const mobileLanguageToggle = document.querySelector('.mobile-language-toggle');
let currentLanguage = 'en';

const translations = {
  en: {
    nav: {
      about: 'About the Product',
      howItWorks: 'How it Works',
      benefits: 'Benefits',
      pricing: 'Pricing',
      testimonials: 'Testimonials',
        getStarted: 'Try our web app',
      languageButton: 'EN'
    },
    hero: {
      title: 'Take care of your plants<br />effortlessly',
      text: 'Oryxen combines automated caring and AI diagnostics to keep<br class="desktop-break" /> your plants healthy, thriving and happier.',
        getStarted: 'Try our web app',
      downloadApp: 'Try our mobile app'
    },
    about: {
      title: 'About the Product',
      teamTitle: 'About the Team',
      teamText1: 'At Oryxen, we bridge the gap between nature and technology. By combining automated hardware with advanced AI analytics, we transform traditional plant care into a precise, stress-free, and data-driven experience.',
      teamText2: 'Our ecosystem monitors your plants vital metrics in real time to deliver the exact care they need.',
      productTitle: 'About the Product',
      productText1: 'At Oryxen, we bridge the gap between nature and technology. By combining automated hardware with advanced AI analytics, we transform traditional plant care into a precise, stress-free, and data-driven experience.',
      meetTeamTitle: 'See Our Product in Action',
      seeProductTitle: 'Meet Our Team'
    },
    services: {
      title: 'Services',
      monitoring: {
        title: 'Monitoring with AI',
        text: 'Keep a constant eye on the environmental of your plants using Oryxen\'s smart sensors and get real-time data for access recommendations with an AI chatbot.'
      },
      watering: {
        title: 'Watering',
        text: 'Automatically water your plants on a convenient schedule, or turn on manually when needed.'
      },
      community: {
        title: 'Community',
        text: 'Join a community of plant lovers and get tips and advice on caring for your plants.'
      }
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Get started with Oryxen in 4 easy steps and transform the way you care for your plants.',
      step1: {
        title: 'Mount or move to your plant',
        text: 'Set up your plant in any indoor or outdoor space, mount or place the monitor where needed.'
      },
      step2: {
        title: 'Connect to Wifi App',
        text: 'Download the Oryxen app to your mobile device, connect the monitor to your home wifi for easy access.'
      },
      step3: {
        title: 'Receive smart notifications',
        text: 'Get real-time alerts about your plant\'s environment, water levels, and care needs delivered to your phone.'
      },
      step4: {
        title: 'Watch it grow',
        text: 'Monitor your plant\'s health and growth over time, get tips and advice tailored to your specific plants.'
      }
    },
    benefits: {
      title: 'Why Choose Oryxen?',
      subtitle: 'Discover the benefits of using our smart plant care system and join thousands of happy plant parents.',
      benefit1: {
        title: 'Proper care for your plant',
        text: 'Get personalized care recommendations based on your plant type and environment.'
      },
      benefit2: {
        title: 'Monthly alerts',
        text: 'Receive monthly check-ins and seasonal care tips to keep your plants thriving year-round.'
      },
      benefit3: {
        title: 'Save time or collect',
        text: 'Spend less time worrying about your plants and more time enjoying them, or build your collection.'
      },
      benefit4: {
        title: 'Learn new plant care',
        text: 'Access our extensive library of plant care guides and grow your gardening skills.'
      }
    },
    pricing: {
      title: 'Plans & Pricing',
      subtitle: 'Choose the best plan that fits your plant care needs and start your journey to greener living.',
      basic: {
        name: 'Basic',
        price: '$29',
        period: '/month',
        features: [
          '✓ 1 plant monitor',
          '✓ Basic watering',
          '✓ Mobile app access',
          '✓ Email support'
        ]
      },
      premium: {
        name: 'Premium',
        price: '$49',
        period: '/month',
        features: [
          '✓ Up to 5 plant monitors',
          '✓ Advanced watering',
          '✓ Mobile & web app',
          '✓ Priority support',
          '✓ Plant care library',
          '✓ Community access'
        ]
      }
    },
    testimonials: {
      title: 'What Our Users Say',
      subtitle: 'Join thousands of happy customers who have transformed their plant care routine with PlantCare.',
      testimonial1: {
        text: 'I\'ve never been able to keep a plant alive for more than a month, but PlantCare has completely changed that! My plants are thriving and I finally understand what they need.',
        author: 'Sarah Chen',
        role: 'Plant Enthusiast'
      },
      testimonial2: {
        text: 'As someone who decorates homes with plants, PlantCare has been a game-changer for my clients. They love how easy it is to maintain their greenery!',
        author: 'Emma Rodriguez',
        role: 'Interior Designer'
      },
      testimonial3: {
        text: 'With my hectic schedule, I never had time to properly care for my plants. PlantCare takes all the guesswork out of it. Highly recommend!',
        author: 'Michael Thompson',
        role: 'Busy Professional'
      }
    },
    newsletter: {
      title: 'Start Your Journey to Better Plant Care Today',
      text: 'Join our community of plant lovers and get exclusive tips, offers, and updates delivered to your inbox.',
      placeholder: 'Enter your email',
      subscribe: 'Subscribe',
      benefits: [
        '✓ Weekly plant care tips',
        '✓ Exclusive offers',
        '✓ New product updates'
      ]
    },
    footer: {
      description: 'Making plant care effortless through smart technology and dedicated support for plant lovers everywhere.',
      product: 'Product',
      productLinks: ['About', 'Pricing', 'Downloads'],
      support: 'Support',
      supportLinks: ['Help Center', 'Contact', 'Live Chat', 'FAQ'],
      legal: 'Legal',
      legalLinks: ['Terms of Use', 'Privacy Policy', 'Cookies', 'DMCA'],
      copyright: '© 2025 PlantCare. All rights reserved.'
    }
  },
  es: {
    nav: {
      about: 'Acerca del Producto',
      howItWorks: 'Cómo Funciona',
      benefits: 'Beneficios',
      pricing: 'Precios',
      testimonials: 'Testimonios',
        getStarted: 'Prueba nuestra app',
      languageButton: 'ES'
    },
    hero: {
      title: 'Cuida tus plantas<br />fácilmente',
      text: 'Oryxen combina cuidado automatizado y diagnósticos con IA para mantener tus plantas saludables, prosperando y más felices.',
        getStarted: 'Prueba nuestra app',
      downloadApp: 'Prueba nuestra app móvil'
    },
    about: {
      title: 'Acerca del Producto',
      teamTitle: 'Acerca del Equipo',
      teamText1: 'En Oryxen, cerramos la brecha entre la naturaleza y la tecnología. Al combinar hardware automatizado con análisis avanzados de inteligencia artificial, transformamos el cuidado tradicional de las plantas en una experiencia precisa, sin estrés y basada en datos.',
      teamText2: 'Nuestro ecosistema monitorea los métricos vitales de tus plantas en tiempo real para proporcionarles el cuidado exacto que necesitan.',
      productTitle: 'Acerca del Producto',
      productText1: 'En Oryxen, creemos en la vida sostenible. Queremos ayudar a todos a cuidar sus plantas de manera efectiva aprovechando tecnología de vanguardia que es fácil de usar y divertida para toda la familia.',
      meetTeamTitle: 'Ve Nuestro Producto en Acción',
      seeProductTitle: 'Conoce a Nuestro Equipo'
    },
    services: {
      title: 'Servicios',
      monitoring: {
        title: 'Monitoreo con IA',
        text: 'Mantén un ojo constante en el ambiente de tus plantas usando los sensores inteligentes de PlantCare y obtén datos en tiempo real.'
      },
      watering: {
        title: 'Riego',
        text: 'Riega automáticamente tus plantas según un horario conveniente, o actívalo manualmente cuando sea necesario.'
      },
      community: {
        title: 'Comunidad',
        text: 'Únete a una comunidad de amantes de las plantas y obtén consejos y tips para el cuidado de tus plantas.'
      }
    },
    howItWorks: {
      title: 'Cómo Funciona',
      subtitle: 'Comienza con Oryxen en 4 sencillos pasos y transforma la forma en que cuidas tus plantas.',
      step1: {
        title: 'Monta o mueve hacia tu planta',
        text: 'Configura tu planta en cualquier espacio interior o exterior, monta o coloca el monitor donde sea necesario.'
      },
      step2: {
        title: 'Conecta a la App WiFi',
        text: 'Descarga la aplicación Oryxen en tu dispositivo móvil, conecta el monitor a tu wifi doméstico para fácil acceso.'
      },
      step3: {
        title: 'Recibe notificaciones inteligentes',
        text: 'Obtén alertas en tiempo real sobre el ambiente de tu planta, niveles de agua y necesidades de cuidado entregadas a tu teléfono.'
      },
      step4: {
        title: 'Mírala crecer',
        text: 'Monitorea la salud y crecimiento de tu planta a lo largo del tiempo, obtén consejos y recomendaciones adaptadas a tus plantas específicas.'
      }
    },
    benefits: {
      title: '¿Por Qué Elegir Oryxen?',
      subtitle: 'Descubre los beneficios de usar nuestro sistema inteligente de cuidado de plantas y únete a miles de padres de plantas felices.',
      benefit1: {
        title: 'Cuidado apropiado para tu planta',
        text: 'Obtén recomendaciones de cuidado personalizadas basadas en el tipo de planta y ambiente.'
      },
      benefit2: {
        title: 'Alertas mensuales',
        text: 'Recibe revisiones mensuales y consejos de cuidado estacionales para mantener tus plantas prosperando todo el año.'
      },
      benefit3: {
        title: 'Ahorra tiempo o colecciona',
        text: 'Pasa menos tiempo preocupándote por tus plantas y más tiempo disfrutándolas, o construye tu colección.'
      },
      benefit4: {
        title: 'Aprende nuevo cuidado de plantas',
        text: 'Accede a nuestra extensa biblioteca de guías de cuidado de plantas y desarrolla tus habilidades de jardinería.'
      }
    },
    pricing: {
      title: 'Planes y Precios',
      subtitle: 'Elige el mejor plan que se adapte a tus necesidades de cuidado de plantas y comienza tu viaje hacia una vida más verde.',
      basic: {
        name: 'Básico',
        price: '$29',
        period: '/mes',
        features: [
          '✓ 1 monitor de planta',
          '✓ Riego básico',
          '✓ Acceso a app móvil',
          '✓ Soporte por email'
        ]
      },
      premium: {
        name: 'Premium',
        price: '$49',
        period: '/mes',
        features: [
          '✓ Hasta 5 monitores de plantas',
          '✓ Riego avanzado',
          '✓ App móvil y web',
          '✓ Soporte prioritario',
          '✓ Biblioteca de cuidado de plantas',
          '✓ Acceso a comunidad'
        ]
      }
    },
    testimonials: {
      title: 'Lo Que Dicen Nuestros Usuarios',
      subtitle: 'Únete a miles de clientes felices que han transformado su rutina de cuidado de plantas con PlantCare.',
      testimonial1: {
        text: 'Nunca había podido mantener una planta viva por más de un mes, ¡pero PlantCare ha cambiado eso completamente! Mis plantas están prosperando y finalmente entiendo lo que necesitan.',
        author: 'Sarah Chen',
        role: 'Entusiasta de Plantas'
      },
      testimonial2: {
        text: 'Como alguien que decora hogares con plantas, PlantCare ha sido un cambio total para mis clientes. ¡Les encanta lo fácil que es mantener su vegetación!',
        author: 'Emma Rodriguez',
        role: 'Diseñadora de Interiores'
      },
      testimonial3: {
        text: 'Con mi horario agitado, nunca tuve tiempo para cuidar adecuadamente mis plantas. PlantCare elimina toda la incertidumbre. ¡Altamente recomendado!',
        author: 'Michael Thompson',
        role: 'Profesional Ocupado'
      }
    },
    newsletter: {
      title: 'Comienza Tu Viaje Hacia un Mejor Cuidado de Plantas Hoy',
      text: 'Únete a nuestra comunidad de amantes de las plantas y recibe consejos exclusivos, ofertas y actualizaciones en tu bandeja de entrada.',
      placeholder: 'Ingresa tu email',
      subscribe: 'Suscribirse',
      benefits: [
        '✓ Consejos semanales de cuidado de plantas',
        '✓ Ofertas exclusivas',
        '✓ Actualizaciones de nuevos productos'
      ]
    },
    footer: {
      description: 'Haciendo el cuidado de plantas sin esfuerzo a través de tecnología inteligente y soporte dedicado para amantes de plantas en todas partes.',
      product: 'Producto',
      productLinks: ['Acerca de', 'Precios', 'Descargas'],
      support: 'Soporte',
      supportLinks: ['Centro de Ayuda', 'Contacto', 'Chat en Vivo', 'FAQ'],
      legal: 'Legal',
      legalLinks: ['Términos de Uso', 'Política de Privacidad', 'Cookies', 'DMCA'],
      copyright: '© 2025 PlantCare. Todos los derechos reservados.'
    }
  }
};

function updateLanguage() {
  const t = translations[currentLanguage];
  
  // Update navigation
  document.querySelector('a[href="#about"]').textContent = t.nav.about;
  document.querySelector('a[href="#how-it-works"]').textContent = t.nav.howItWorks;
  document.querySelector('a[href="#benefits"]').textContent = t.nav.benefits;
  document.querySelector('a[href="#pricing"]').textContent = t.nav.pricing;
  document.querySelector('a[href="#testimonials"]').textContent = t.nav.testimonials;
  
  // Update mobile navigation
  document.querySelectorAll('.mobile-nav-link').forEach((link, index) => {
    const navItems = [t.nav.about, t.nav.howItWorks, t.nav.benefits, t.nav.pricing, t.nav.testimonials];
    if (index < navItems.length) {
      link.textContent = navItems[index];
    }
  });
  
  // Update buttons
    // Ensure nav CTAs update the label (preserve badge)
    document.querySelectorAll('.nav-cta').forEach(el => {
      const label = el.querySelector('.cta-label');
      if (label) {
        label.textContent = t.nav.getStarted;
      } else {
        el.textContent = t.nav.getStarted;
      }
      el.setAttribute('href', 'https://frontendweb-1raj.onrender.com/');
    });
    // Update other primary buttons that match newsletter/subscribe
    document.querySelectorAll('.btn-primary').forEach(btn => {
      const txt = btn.textContent.trim();
      if (txt === 'Subscribe' || txt === 'Suscribirse') {
        btn.textContent = t.newsletter.subscribe;
      }
    });
  
  // Update hero section
  document.querySelector('.hero-title').innerHTML = t.hero.title;
  document.querySelector('.hero-text').innerHTML = t.hero.text;
  
  // Update hero buttons
    // Update hero buttons (primary web app CTA + single download button)
    const heroCta = document.querySelector('.hero-cta');
    const downloadBtn = document.querySelector('.download-btn');
    const webAppUrl = 'https://frontendweb-1raj.onrender.com/';
    const apkUrl = 'https://github.com/ASI0639-2520-5362-Grupo-2-IoTeam/FrontendMobile/releases/download/v1.0.0/app-release.apk';
    if (heroCta) {
      const hLabel = heroCta.querySelector('.cta-label');
      if (hLabel) hLabel.textContent = t.hero.getStarted;
      else heroCta.textContent = t.hero.getStarted;
      heroCta.setAttribute('href', webAppUrl);
    }
    if (downloadBtn) {
      const dLabel = downloadBtn.querySelector('.cta-label');
      if (dLabel) dLabel.textContent = t.hero.downloadApp;
      else downloadBtn.textContent = t.hero.downloadApp;
      downloadBtn.setAttribute('href', apkUrl);
    }
  
  // Update About section
  const aboutTitle = document.querySelector('#about .section-title');
  if (aboutTitle) aboutTitle.textContent = t.about.title;
  
  // Update About the Team section
  const teamTitle = document.querySelector('.about-section-title');
  if (teamTitle) teamTitle.textContent = t.about.teamTitle;
  
  const teamTexts = document.querySelectorAll('.about-text');
  if (teamTexts[0]) teamTexts[0].textContent = t.about.teamText1;
  if (teamTexts[1]) teamTexts[1].textContent = t.about.teamText2;
  
  // Update About the Product section
  const productTitles = document.querySelectorAll('.about-section-title');
  if (productTitles[1]) productTitles[1].textContent = t.about.productTitle;
  
  // Update About the Product text (only one paragraph now)
  const aboutSections = document.querySelectorAll('.about-section');
  if (aboutSections[1]) {
    const productText = aboutSections[1].querySelector('.about-text');
    if (productText) productText.textContent = t.about.productText1;
  }
  
  // Update video titles
  const videoTitles = document.querySelectorAll('.video-title');
  if (videoTitles[0]) videoTitles[0].textContent = t.about.meetTeamTitle;
  if (videoTitles[1]) videoTitles[1].textContent = t.about.seeProductTitle;
  
  // Update Services section
  const servicesTitle = document.querySelector('.services .section-title');
  if (servicesTitle) servicesTitle.textContent = t.services.title;
  
  const serviceTitles = document.querySelectorAll('.service-title');
  if (serviceTitles[0]) serviceTitles[0].textContent = t.services.monitoring.title;
  if (serviceTitles[1]) serviceTitles[1].textContent = t.services.watering.title;
  if (serviceTitles[2]) serviceTitles[2].textContent = t.services.community.title;
  
  const serviceTexts = document.querySelectorAll('.service-text');
  if (serviceTexts[0]) serviceTexts[0].textContent = t.services.monitoring.text;
  if (serviceTexts[1]) serviceTexts[1].textContent = t.services.watering.text;
  if (serviceTexts[2]) serviceTexts[2].textContent = t.services.community.text;
  
  // Update How It Works section
  const howItWorksTitle = document.querySelector('#how-it-works .section-title');
  if (howItWorksTitle) howItWorksTitle.textContent = t.howItWorks.title;
  
  const howItWorksSubtitle = document.querySelector('#how-it-works .section-subtitle');
  if (howItWorksSubtitle) howItWorksSubtitle.textContent = t.howItWorks.subtitle;
  
  const stepTitles = document.querySelectorAll('.step-title');
  if (stepTitles[0]) stepTitles[0].textContent = t.howItWorks.step1.title;
  if (stepTitles[1]) stepTitles[1].textContent = t.howItWorks.step2.title;
  if (stepTitles[2]) stepTitles[2].textContent = t.howItWorks.step3.title;
  if (stepTitles[3]) stepTitles[3].textContent = t.howItWorks.step4.title;
  
  const stepTexts = document.querySelectorAll('.step-text');
  if (stepTexts[0]) stepTexts[0].textContent = t.howItWorks.step1.text;
  if (stepTexts[1]) stepTexts[1].textContent = t.howItWorks.step2.text;
  if (stepTexts[2]) stepTexts[2].textContent = t.howItWorks.step3.text;
  if (stepTexts[3]) stepTexts[3].textContent = t.howItWorks.step4.text;
  
  // Update Benefits section
  const benefitsTitle = document.querySelector('#benefits .section-title');
  if (benefitsTitle) benefitsTitle.textContent = t.benefits.title;
  
  const benefitsSubtitle = document.querySelector('#benefits .section-subtitle');
  if (benefitsSubtitle) benefitsSubtitle.textContent = t.benefits.subtitle;
  
  const benefitTitles = document.querySelectorAll('.benefit-title');
  if (benefitTitles[0]) benefitTitles[0].textContent = t.benefits.benefit1.title;
  if (benefitTitles[1]) benefitTitles[1].textContent = t.benefits.benefit2.title;
  if (benefitTitles[2]) benefitTitles[2].textContent = t.benefits.benefit3.title;
  if (benefitTitles[3]) benefitTitles[3].textContent = t.benefits.benefit4.title;
  
  const benefitTexts = document.querySelectorAll('.benefit-text');
  if (benefitTexts[0]) benefitTexts[0].textContent = t.benefits.benefit1.text;
  if (benefitTexts[1]) benefitTexts[1].textContent = t.benefits.benefit2.text;
  if (benefitTexts[2]) benefitTexts[2].textContent = t.benefits.benefit3.text;
  if (benefitTexts[3]) benefitTexts[3].textContent = t.benefits.benefit4.text;
  
  // Update Pricing section
  const pricingTitle = document.querySelector('#pricing .section-title');
  if (pricingTitle) pricingTitle.textContent = t.pricing.title;
  
  const pricingSubtitle = document.querySelector('#pricing .section-subtitle');
  if (pricingSubtitle) pricingSubtitle.textContent = t.pricing.subtitle;
  
  const pricingNames = document.querySelectorAll('.pricing-name');
  if (pricingNames[0]) pricingNames[0].textContent = t.pricing.basic.name;
  if (pricingNames[1]) pricingNames[1].textContent = t.pricing.premium.name;
  
  const pricingPeriods = document.querySelectorAll('.price-period');
  if (pricingPeriods[0]) pricingPeriods[0].textContent = t.pricing.basic.period;
  if (pricingPeriods[1]) pricingPeriods[1].textContent = t.pricing.premium.period;
  
  const pricingFeatures = document.querySelectorAll('.pricing-features');
  if (pricingFeatures[0]) {
    const basicFeatures = pricingFeatures[0].querySelectorAll('li');
    t.pricing.basic.features.forEach((feature, index) => {
      if (basicFeatures[index]) basicFeatures[index].textContent = feature;
    });
  }
  if (pricingFeatures[1]) {
    const premiumFeatures = pricingFeatures[1].querySelectorAll('li');
    t.pricing.premium.features.forEach((feature, index) => {
      if (premiumFeatures[index]) premiumFeatures[index].textContent = feature;
    });
  }
  
  // Update Testimonials section
  const testimonialsTitle = document.querySelector('#testimonials .section-title');
  if (testimonialsTitle) testimonialsTitle.textContent = t.testimonials.title;
  
  const testimonialsSubtitle = document.querySelector('#testimonials .section-subtitle');
  if (testimonialsSubtitle) testimonialsSubtitle.textContent = t.testimonials.subtitle;
  
  const testimonialTexts = document.querySelectorAll('.testimonial-text');
  if (testimonialTexts[0]) testimonialTexts[0].textContent = `"${t.testimonials.testimonial1.text}"`;
  if (testimonialTexts[1]) testimonialTexts[1].textContent = `"${t.testimonials.testimonial2.text}"`;
  if (testimonialTexts[2]) testimonialTexts[2].textContent = `"${t.testimonials.testimonial3.text}"`;
  
  const authorNames = document.querySelectorAll('.author-name');
  if (authorNames[0]) authorNames[0].textContent = t.testimonials.testimonial1.author;
  if (authorNames[1]) authorNames[1].textContent = t.testimonials.testimonial2.author;
  if (authorNames[2]) authorNames[2].textContent = t.testimonials.testimonial3.author;
  
  const authorRoles = document.querySelectorAll('.author-role');
  if (authorRoles[0]) authorRoles[0].textContent = t.testimonials.testimonial1.role;
  if (authorRoles[1]) authorRoles[1].textContent = t.testimonials.testimonial2.role;
  if (authorRoles[2]) authorRoles[2].textContent = t.testimonials.testimonial3.role;
  
  // Update Newsletter section
  const newsletterTitle = document.querySelector('.newsletter-title');
  if (newsletterTitle) newsletterTitle.textContent = t.newsletter.title;
  
  const newsletterText = document.querySelector('.newsletter-text');
  if (newsletterText) newsletterText.textContent = t.newsletter.text;
  
  const newsletterInput = document.querySelector('.newsletter-input');
  if (newsletterInput) newsletterInput.placeholder = t.newsletter.placeholder;
  
  const newsletterBenefits = document.querySelectorAll('.newsletter-benefits span');
  t.newsletter.benefits.forEach((benefit, index) => {
    if (newsletterBenefits[index]) newsletterBenefits[index].textContent = benefit;
  });
  
  // Update Footer section
  const footerDescription = document.querySelector('.footer-description');
  if (footerDescription) footerDescription.textContent = t.footer.description;
  
  const footerHeadings = document.querySelectorAll('.footer-heading');
  if (footerHeadings[0]) footerHeadings[0].textContent = t.footer.product;
  if (footerHeadings[1]) footerHeadings[1].textContent = t.footer.support;
  if (footerHeadings[2]) footerHeadings[2].textContent = t.footer.legal;
  
  const footerLinks = document.querySelectorAll('.footer-links ul');
  if (footerLinks[0]) {
    const productLinks = footerLinks[0].querySelectorAll('li a');
    t.footer.productLinks.forEach((link, index) => {
      if (productLinks[index]) productLinks[index].textContent = link;
    });
  }
  if (footerLinks[1]) {
    const supportLinks = footerLinks[1].querySelectorAll('li a');
    t.footer.supportLinks.forEach((link, index) => {
      if (supportLinks[index]) supportLinks[index].textContent = link;
    });
  }
  if (footerLinks[2]) {
    const legalLinks = footerLinks[2].querySelectorAll('li a');
    t.footer.legalLinks.forEach((link, index) => {
      if (legalLinks[index]) legalLinks[index].textContent = link;
    });
  }
  
  const copyright = document.querySelector('.footer-bottom p');
  if (copyright) copyright.textContent = t.footer.copyright;
  
  // Update language button text
  document.querySelectorAll('.language-text').forEach(span => {
    if (span.textContent.includes('EN') || span.textContent.includes('ES')) {
      span.textContent = t.nav.languageButton;
    } else {
      span.textContent = currentLanguage === 'en' ? 'Cambiar idioma' : 'Change language';
    }
  });
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
  updateLanguage();
  
  // Save preference
  localStorage.setItem('preferredLanguage', currentLanguage);
}

// Event listeners for language toggle
if (languageToggle) {
  languageToggle.addEventListener('click', toggleLanguage);
}

if (mobileLanguageToggle) {
  mobileLanguageToggle.addEventListener('click', toggleLanguage);
}

// Load saved language preference
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && savedLanguage !== currentLanguage) {
    currentLanguage = savedLanguage;
    updateLanguage();
  }
  // Ensure UI reflects the current language on initial load
  updateLanguage();
});
