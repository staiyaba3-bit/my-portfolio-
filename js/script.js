/**
 * TAIYABA FATMA — DIGITAL EXPERIENCES
 * Interactive Portfolio Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DOM Elements
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  // Modal Elements
  const modalOverlay = document.getElementById('caseStudyModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalImg = document.getElementById('modalImg');
  const modalRole = document.getElementById('modalRole');
  const modalTech = document.getElementById('modalTech');
  const modalDeliverables = document.getElementById('modalDeliverables');
  const modalOverview = document.getElementById('modalOverview');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalLiveBtn = document.getElementById('modalLiveBtn');

  // Resume Modal
  const resumeModalOverlay = document.getElementById('resumeModal');
  const resumeModalCloseBtn = document.getElementById('resumeModalCloseBtn');
  const viewResumeBtns = document.querySelectorAll('.trigger-view-resume');

  // --------------------------------------------------------------------------
  // 2. Project Data for Case Studies
  // --------------------------------------------------------------------------
  const projectCaseStudies = {
    jewellery: {
      title: 'Jewellery E-Commerce — "Timeless Elegance"',
      image: 'assets/images/featured-jewellery-laptop.jpg',
      role: 'Lead Frontend Developer & UI Designer',
      tech: 'HTML5, CSS3, JavaScript (ES6+)',
      deliverables: 'Responsive Website, Product Showcase, Cart & Filtering UI',
      overview: 'A boutique luxury jewellery web experience created to highlight fine craftsmanship, heirloom necklaces, and statement bridal sets. The interface is art-directed with warm ivory and marble tones, fine typography, and an intuitive product discovery layout that conveys timeless sophistication. (Currently under active development).',
      features: [
        'Dynamic category filtering by metal type, gemstones, and occasion.',
        'Refined product showcase with high-resolution image zoom & thumbnail gallery.',
        'Interactive shopping cart drawer with live quantity adjustments and order summary.',
        'Thoughtfully responsive layout optimized for seamless shopping across handheld mobile devices, tablets, and high-DPI desktop screens.'
      ],
      isWip: true,
      liveUrl: ''
    },
    cafe: {
      title: 'Cafe Tesu — Artisanal Brunch & Coffee Destination',
      image: 'assets/images/project-cafe-interior.jpg',
      role: 'Frontend Developer & UI Designer',
      tech: 'HTML5, CSS3, JavaScript, Responsive Web Design',
      deliverables: 'Brand Landing Page, Digital Menu Showcase, Reservation UI',
      overview: 'A warm, inviting digital storefront for Cafe Tesu, designed to evoke the ambiance of an artisanal cafe and brunch destination. Features rich coffee photography, warm amber lighting cues, culinary menu classifications, and a sleek table reservation inquiry module.',
      features: [
        'Curated digital menu categorized into Specialty Coffees, Artisanal Bakery, and Gourmet Plates.',
        'Interactive table booking modal with date, time, and party size selection.',
        'Visual tasting gallery with smooth hover interactions and ambiance photography.',
        'Fast page load times with accessible semantics and mobile-first responsive styling.'
      ],
      liveUrl: 'https://cafe-website-five-kappa.vercel.app/'
    },
    caffeine: {
      title: 'Caffeine Cove — Your Little Escape | Specialty Coffee',
      image: 'assets/images/project-caffeine-cove.jpg',
      role: 'Frontend Developer & UI Designer',
      tech: 'HTML5, CSS3, JavaScript, Responsive Layouts',
      deliverables: 'Coffee House Showcase, Artisanal Menu, Cozy Storytelling UI',
      overview: 'Discover Caffeine Cove, a warm and elegant neighborhood specialty coffee house website. Designed around handcrafted espresso, velvet lattes, and artisanal pastries, it creates an inviting digital haven for coffee lovers seeking comfort and connection.',
      features: [
        'Single-origin roast profiles and signature espresso drink showcases with tasting notes.',
        'Fresh daily artisanal bakery and viennoiserie menu display.',
        'Warm, cozy visual storytelling pairing organic earth tones with delicate serif typography.',
        'Fully responsive mobile and tablet experience with accessible interactive navigation.'
      ],
      liveUrl: 'https://caffeine-cove-flame.vercel.app'
    },
    bakery: {
      title: 'My Bakery Store — Fresh Wholesale Bakery & Ordering',
      image: 'assets/images/project-bakery-preview.jpg',
      role: 'Frontend Developer & Web Designer',
      tech: 'HTML5, CSS3, JavaScript, Firebase Firestore',
      deliverables: 'E-Commerce Storefront, Dynamic Product Catalog, WhatsApp Checkout',
      overview: 'A full-featured wholesale bakery platform supplying fresh cookies, cakes, and toast in bulk for retail shops. Features a dynamic Firebase-powered product grid with live search, brand filtering, interactive cart state, and instant WhatsApp order placement.',
      features: [
        'Real-time Firestore product loading with live keyword search and brand category filters.',
        'Interactive cart drawer with live quantity adjustments and total price calculations.',
        'Direct WhatsApp checkout integration sending complete itemized orders with customer details.',
        'Modern micro-animations including customized baking preloader and floating bakery hero art.'
      ],
      liveUrl: 'https://my-bakery-tau.vercel.app/'
    },
    makeup: {
      title: 'Glam & Grace Beauty Studio — Luxury Bridal & Editorial Artistry',
      image: 'assets/images/project-makeup-hero.jpg',
      role: 'Frontend Developer & Visual Designer',
      tech: 'HTML5, CSS3, JavaScript, Flexbox/Grid',
      deliverables: 'Luxury Studio Website, Lookbook Gallery, Bridal Consultation Booking',
      overview: 'A bespoke bridal artistry and high-end beauty studio website crafted for modern brides and editorial clients. Designed around subtle plum, blush, and warm champagne tones, large high-contrast visual portfolios, and clear service transparency to streamline client appointments.',
      features: [
        'High-impact hero visual and portfolio lookbook showcasing real brides and reception looks.',
        'Comprehensive service breakdown detailing bridal makeup, party glam, and skincare rituals.',
        'Direct consultation booking interface connecting potential clients seamlessly.',
        'Smooth CSS micro-animations and image zoom effects designed for high engagement.'
      ],
      liveUrl: 'https://makeup-studio-nu.vercel.app/'
    },
    apex: {
      title: 'Apex Fitness Club — High-Performance Gym & Training',
      image: 'assets/images/project-gym-preview.jpg',
      role: 'Frontend Developer & UI/UX Developer',
      tech: 'React, Vite, Tailwind CSS, JavaScript (ES6+)',
      deliverables: 'Fitness Web Application, Workout Programs, Membership Flow',
      overview: 'A bold, high-energy modern gym web application built with React and Tailwind CSS. Designed to inspire athletic transformation with dynamic program filters, elite coach profiles, state-of-the-art facility tours, and frictionless membership enrollment.',
      features: [
        'High-contrast athletic design featuring dark mode with vibrant energetic orange accents.',
        'Interactive workout programs: Strength Training, HIIT, Athletic Conditioning, and Nutrition.',
        'Certified coach roster with specialties, credentials, and consultation booking CTAs.',
        'Modern component architecture with Vite lightning-fast performance and clean responsive grid.'
      ],
      liveUrl: 'https://apex-fitness-club-beryl.vercel.app/#home'
    },
    portfolio: {
      title: 'My 3D Portfolio — Taiyaba Fatma',
      image: 'assets/images/project-dev-portfolio.jpg',
      role: 'Creative Developer & UI Engineer',
      tech: 'HTML5, Tailwind CSS, JavaScript, Neon & Glassmorphism CSS',
      deliverables: 'Interactive 3D Portfolio, Neon Playground, Floating Particles',
      overview: 'My personal interactive 3D developer portfolio website. Built with custom Tailwind neon themes, cyan & purple glowing gradients, frosted glass cards, and floating particle animations to present web development skills with unforgettable visual punch.',
      features: [
        'Vibrant cyber aesthetic with customized cyan & violet neon lighting and glassmorphism panels.',
        'Interactive project showcase with floating card physics and animated tech badges.',
        'Lightweight, zero-dependency modern JavaScript delivering snappy responsive performance.',
        'Complete contact portal and responsive layout tailored for high-DPI displays.'
      ],
      liveUrl: 'https://portfolio-psi-orcin-biavn9197z.vercel.app/'
    },
    aurelia: {
      title: 'AURELIA — Luxury Travel & Experiences',
      image: 'assets/images/project-aurelia.jpg',
      role: 'Creative Frontend Developer & Digital Experience Designer',
      tech: 'HTML5, CSS3, Modern JavaScript',
      deliverables: 'Cinematic Experience Website, Destination Showcase, Expedition Planner',
      overview: 'A cinematic digital experience for AURELIA, an exclusive luxury travel brand curating private retreats in the world’s most pristine alpine and coastal sanctuaries. Designed with oversized editorial typography, immersive photography, and smooth interactions. (Currently under active development).',
      features: [
        'Cinematic destination cards presenting luxury alpine retreats and private expeditions.',
        'Interactive itinerary exploration interface with curated highlight tags.',
        'Editorial typography pairing classical serifs with minimalist navigational elements.',
        'Optimized responsive asset presentation ensuring crisp imagery across all devices.'
      ],
      isWip: true,
      liveUrl: ''
    }
  };

  // --------------------------------------------------------------------------
  // 3. Navbar Scroll & Active Section Highlighting
  // --------------------------------------------------------------------------
  function handleScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    // Navbar background blur on scroll
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy for active section
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });

    mobileNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // --------------------------------------------------------------------------
  // 4. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  function toggleMobileMenu(open) {
    const shouldOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
    hamburger.classList.toggle('open', shouldOpen);
    mobileDrawer.classList.toggle('open', shouldOpen);
    mobileBackdrop.classList.toggle('open', shouldOpen);
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => toggleMobileMenu());
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', () => toggleMobileMenu(false));
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // --------------------------------------------------------------------------
  // 5. Smooth Scroll for Anchor Links
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Back to Top button
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. Project Category Filtering
  // --------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(/\s+/);
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 7. Case Study Modal Interactions
  // --------------------------------------------------------------------------
  function openCaseStudy(projectId) {
    const data = projectCaseStudies[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalRole.textContent = data.role;
    modalTech.textContent = data.tech;
    modalDeliverables.textContent = data.deliverables;
    modalOverview.textContent = data.overview;

    modalFeatures.innerHTML = '';
    data.features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      modalFeatures.appendChild(li);
    });

    if (modalLiveBtn) {
      if (data.isWip || !data.liveUrl || data.liveUrl.startsWith('#')) {
        modalLiveBtn.style.display = 'none';
      } else {
        modalLiveBtn.href = data.liveUrl;
        modalLiveBtn.style.display = 'inline-flex';
        modalLiveBtn.target = '_blank';
        modalLiveBtn.rel = 'noopener noreferrer';
      }
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudy() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-case-study]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-case-study');
      openCaseStudy(id);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeCaseStudy);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeCaseStudy();
    });
  }

  // --------------------------------------------------------------------------
  // 8. Resume Modal Interactions
  // --------------------------------------------------------------------------
  function openResumeModal() {
    resumeModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeModal() {
    resumeModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  viewResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });

  if (resumeModalCloseBtn) {
    resumeModalCloseBtn.addEventListener('click', closeResumeModal);
  }

  if (resumeModalOverlay) {
    resumeModalOverlay.addEventListener('click', (e) => {
      if (e.target === resumeModalOverlay) closeResumeModal();
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalOverlay && modalOverlay.classList.contains('active')) {
        closeCaseStudy();
      }
      if (resumeModalOverlay && resumeModalOverlay.classList.contains('active')) {
        closeResumeModal();
      }
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        toggleMobileMenu(false);
      }
    }
  });

  // --------------------------------------------------------------------------
  // 9. Contact Form Validation & Friendly Feedback
  // --------------------------------------------------------------------------
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const subjectInput = document.getElementById('senderSubject');
      const messageInput = document.getElementById('senderMessage');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      // Simple email regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        showFormStatus('Please complete all required fields (Name, Email, Message).', 'error');
        return;
      }

      if (!emailPattern.test(email)) {
        showFormStatus('Please enter a valid email address.', 'error');
        return;
      }

      // Format mailto link so the message can be delivered directly to Taiyaba Fatma's email
      const recipient = 'staiyaba3@gmail.com';
      const mailtoSubject = encodeURIComponent(subject || `Project Inquiry from ${name}`);
      const mailtoBody = encodeURIComponent(`Hi Taiyaba,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from Portfolio Website`);
      const mailtoUrl = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

      showFormStatus(`Thank you, ${name}! Opening your default mail client to deliver your message directly to Taiyaba (staiyaba3@gmail.com)...`, 'success');

      setTimeout(() => {
        window.location.href = mailtoUrl;
        contactForm.reset();
      }, 1200);
    });
  }

  function showFormStatus(text, type) {
    if (!formStatus) return;
    formStatus.textContent = text;
    formStatus.className = `form-status-alert ${type}`;
    formStatus.style.display = 'block';
  }

  // --------------------------------------------------------------------------
  // 10. Subtle Micro-Parallax for 3D Elements (Reduced motion respected)
  // --------------------------------------------------------------------------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    const portraitStage = document.querySelector('.hero-portrait-stage');
    if (portraitStage) {
      window.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth) - 0.5;
        const mouseY = (e.clientY / window.innerHeight) - 0.5;
        portraitStage.style.transform = `perspective(1000px) rotateY(${mouseX * 4}deg) rotateX(${-mouseY * 4}deg)`;
      }, { passive: true });
    }
  }

  console.log('Taiyaba Fatma Portfolio initialized successfully.');
});
