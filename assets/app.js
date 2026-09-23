const dict = {
  fr: {
    nav_home: "Accueil",
    nav_education: "Formation",
    nav_projects: "Projets",
    nav_skills: "Compétences",
    nav_cv: "CV",
    nav_contact: "Contact",
    status_label: "Disponible",

    page_title_home: "Accueil — Lebsir Mohamed Ali",
    page_title_education: "Formation — Lebsir Mohamed Ali",
    page_title_projects: "Projets — Lebsir Mohamed Ali",
    page_title_skills: "Compétences — Lebsir Mohamed Ali",
    page_title_cv: "CV — Lebsir Mohamed Ali",
    page_title_contact: "Contact — Lebsir Mohamed Ali",
    player_badge: "Étudiant · Full-Stack & Sécurité",
    hero_role: "Master : Administration & Sécurité des Réseaux Informatiques",
    hero_bio: "Je suis <strong>Lebsir Mohamed Ali</strong>, un étudiant motivé et orienté vers le développement logiciel, la création de projets concrets et la sécurisation des systèmes d’information. J’ai une solide base universitaire en informatique et je poursuis actuellement un master en administration et sécurité des réseaux informatiques.",
    btn_cv: "Télécharger mon CV",
    btn_contact: "Me contacter",
    btn_projects: "Mes projets",
    btn_skills: "Compétences",
    btn_github: "GitHub",
    hero_metric_projects: "projets",
    hero_metric_stack: "stack",
    hero_metric_security: "sécurité",
    hero_focus: "Focus actuel",
    hero_focus_value: "Développement Full Stack & Sécurité",
    about_edu_kicker: "Formation",
    about_edu_title: "Parcours universitaire solide",
    about_edu_text: "J’ai acquis une base solide en informatique, algorithmique, réseaux, bases de données, développement web et mobile, puis je poursuis aujourd’hui un master en administration et sécurité des réseaux informatiques avec un axe fort sur les systèmes, la protection et la sécurité.",
    about_skills_kicker: "Compétences",
    about_skills_title: "Programmation, projets et sécurité",
    about_skills_text: "Je développe des projets web et applicatifs avec une attention particulière à la qualité du code, à la structure logicielle et à la sécurité des systèmes et des données.",
    about_vision_kicker: "Vision",
    about_vision_title: "Développeur motivé, fiable et polyvalent",
    about_vision_text: "Je suis très motivé par la programmation, la création de projets concrets et la sécurisation des solutions numériques. Mon objectif est de devenir un développeur Full Stack avec de solides compétences en sécurité.",
    interests_title: "Mes centres d’intérêt professionnels",
    interest_code: "Code",
    interest_dev_title: "Développement logiciel",
    interest_dev_text: "Je m'intéresse au développement de solutions complètes, à la qualité du code, à la conception logicielle et à la création d’applications fiables et évolutives.",
    interest_security: "Sécurité",
    interest_net_title: "Administration et sécurité réseau",
    interest_net_text: "Je suis attiré par la sécurisation des infrastructures, la protection des systèmes, les bonnes pratiques de réseaux et la fiabilité des architectures.",
    interest_learning: "Motivation",
    interest_learning_title: "Apprentissage continu",
    interest_learning_text: "Je suis motivé par l’innovation, l’apprentissage constant et le développement de compétences à la fois techniques, sécuritaires et professionnelles.",
    prefs_label: "Préférences et loisirs",
    pref_club_title: "Jeunesse Sportive de Kabylie",
    pref_club_desc: "Club emblématique du football algérien, connu pour son héritage, son identité forte et son palmarès impressionnant.",
    pref_club_item1: "8 titres de Championnat d’Algérie",
    pref_club_item2: "4 Coupes d’Algérie",
    pref_club_item3: "2 Supercoupes d’Algérie",
    pref_club_item4: "7 titres africains",
    pref_game_title: "Red Dead Redemption 2",
    pref_game_desc: "Un jeu d’histoire captivant qui raconte une aventure intense avec Arthur Morgan, au cœur d’un monde riche en émotions et en personnages.",
    pref_anime_title: "Dragon Ball",
    pref_anime_desc: "Un anime cultissime qui mêle action, humour, rivalité et progression de personnage. Il suit les aventures de Goku et de ses amis à travers des combats épiques, des défis de puissance et une quête de dépassement personnel.",
    stat_formation: "Formation",
    stat_formation_v: "Master GL — en cours",
    stat_projets: "Projets livrés",
    stat_stack: "Technos maîtrisées",

    dash_label: "Sélectionne une rubrique",
    dash_title: "Menu principal",
    dash_edu_title: "Formation",
    dash_edu_desc: "Parcours académique, diplômes",
    dash_proj_title: "Projets",
    dash_proj_desc: "Quêtes accomplies et code source",
    dash_skills_title: "Compétences",
    dash_skills_desc: "Langages, frameworks, outils",
    dash_cv_title: "CV",
    dash_cv_desc: "Télécharger mon curriculum",
    dash_contact_title: "Contact",
    dash_contact_desc: "Réseaux et coordonnées",

    edu_label: "Succès débloqués",
    edu_title: "Formation",
    edu_m2_title: "Master : Administration & Sécurité des Réseaux Informatiques",
    edu_m2_meta: "Université de Béjaïa",
    edu_m2_status: "En cours",
    edu_m2_desc: "Spécialisation en ingénierie logicielle : architectures logicielles, développement full-stack, sécurité informatique, IA appliquée.",
    edu_m1_title: "Licence Informatique (L3 MI)",
    edu_m1_meta: "Université de Béjaïa • 2023 - 2026",
    edu_m1_status: "Obtenue",
    edu_m1_desc: "Fondamentaux en algorithmique, bases de données, réseaux, développement web et mobile.",
    edu_bacc_status: "Mention bien",
    edu_bacc_title: "Baccalauréat - Technique Mathématiques",
    edu_bacc_meta: "Boudjellil, Béjaïa • 2023",
    edu_bacc_desc: "J’ai obtenu mon baccalauréat en filière Technique Mathématiques avec une mention Bien et une moyenne de 14,43/20.",

    proj_label: "Journal de quêtes",
    proj_title: "Projets",
    proj_1_diff: "Difficulté : élevée",
    proj_1_desc: "Plateforme d'e-learning full-stack dédiée à l'algorithmique. Frontend desktop en Flutter/Dart, backend Node.js/TypeScript avec Prisma et Supabase.",
    proj_1_obj1: "Système de quiz basé sur XML",
    proj_1_obj2: "Scoring \"Go Points\" et tableau de classement",
    proj_1_obj3: "Analytics admin et authentification OTP",
    proj_1_obj4: "Section de cours avec progression pour chaque module",
    proj_1_obj5: "Classement des utilisateurs selon leur niveau et performances",
    proj_1_link: "Voir le dépôt",
    proj_2_name: "Gestion de livraison",
    proj_2_diff: "Difficulté : normale",
    proj_2_desc: "Projet Java dédié à la gestion des livraisons, avec une logique de suivi des commandes, des clients, des livreurs et des trajets.",
    proj_2_obj1: "Gestion des commandes et des livraisons",
    proj_2_obj2: "Suivi des clients, livreurs et statuts",
    proj_2_obj3: "Interface administrative et gestion des données",
    proj_2_link: "Voir le dépôt",
    proj_3_name: "E-commerce en cours",
    proj_3_diff: "Difficulté : élevée",
    proj_3_desc: "Site e-commerce en construction dédié à la vente de produits en ligne avec une interface moderne et une logique de commande pensée pour une expérience d’achat fluide.",
    proj_3_obj1: "Catalogue produits avec catégories et filtres",
    proj_3_obj2: "Panier et gestion des commandes",
    proj_3_obj3: "Interface d’administration pour les produits",
    proj_3_obj4: "Architecture pensée pour un projet MVC/Full Stack",
    proj_3_link: "En cours de développement",
    skills_label: "Chargement de l'inventaire",
    skills_title: "Compétences",
    cat_lang: "Langages",
    cat_web: "Web",
    cat_backend: "Back-end",
    cat_mobile: "Mobile",
    cat_data: "Données",
    cat_security: "Sécurité & Réseaux",
    cat_tools: "Outils",

    cv_label: "Fichier de sauvegarde",
    cv_title: "Curriculum Vitae",
    cv_sub: "Mis à jour récemment",
    cv_btn: "Télécharger",
    cv_note: "Place ton fichier CV (PDF) dans le dossier du projet sous le nom cv.pdf pour activer le téléchargement.",
    cv_file_name: "CV_Lebsir_Mohamed_Ali.pdf",
    cv_file_meta: "Mis à jour récemment",
    cv_paragraph: "Le fichier PDF est prêt dans le dossier du projet et peut être téléchargé directement depuis cette page.",

    contact_label: "Liste d'amis",
    contact_title: "Contact",
    contact_note: "Remplace les liens ci-dessus (email, LinkedIn, Facebook, Instagram, WhatsApp) par tes vrais identifiants.",
    footer_note: "Site personnel — construit avec HTML, CSS et JavaScript."
  },
  en: {
    nav_home: "Home",
    nav_education: "Education",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_cv: "Resume",
    nav_contact: "Contact",
    status_label: "Available",

    page_title_home: "Home — Lebsir Mohamed Ali",
    page_title_education: "Education — Lebsir Mohamed Ali",
    page_title_projects: "Projects — Lebsir Mohamed Ali",
    page_title_skills: "Skills — Lebsir Mohamed Ali",
    page_title_cv: "CV — Lebsir Mohamed Ali",
    page_title_contact: "Contact — Lebsir Mohamed Ali",
    player_badge: "Student · Full-Stack & Security",
    hero_role: "Master's in Network and Information Security Administration",
    hero_bio: "I am <strong>Lebsir Mohamed Ali</strong>, a motivated student focused on software development, concrete projects and securing information systems. I have a strong academic foundation in computer science and I am currently pursuing a master's degree in network and information security administration.",
    btn_cv: "Download my CV",
    btn_contact: "Contact me",
    btn_projects: "My projects",
    btn_skills: "Skills",
    btn_github: "GitHub",
    hero_metric_projects: "projects",
    hero_metric_stack: "stack",
    hero_metric_security: "security",
    hero_focus: "Current focus",
    hero_focus_value: "Full Stack Development & Security",
    about_edu_kicker: "Education",
    about_edu_title: "Strong academic path",
    about_edu_text: "I built a solid foundation in computer science, algorithms, networks, databases, web and mobile development, and I am currently continuing a master's degree in network and information security administration with a strong focus on systems, protection and security.",
    about_skills_kicker: "Skills",
    about_skills_title: "Programming, projects and security",
    about_skills_text: "I develop web and application projects with a strong focus on code quality, software structure and the security of systems and data.",
    about_vision_kicker: "Vision",
    about_vision_title: "Motivated, reliable and versatile developer",
    about_vision_text: "I am highly motivated by programming, creating real projects and securing digital solutions. My goal is to become a Full Stack developer with strong security skills.",
    interests_title: "My professional interests",
    interest_code: "Code",
    interest_dev_title: "Software development",
    interest_dev_text: "I am interested in developing complete solutions, improving code quality, software design and building reliable, scalable applications.",
    interest_security: "Security",
    interest_net_title: "Network administration and security",
    interest_net_text: "I am attracted to securing infrastructures, protecting systems, network best practices and the reliability of architectures.",
    interest_learning: "Motivation",
    interest_learning_title: "Continuous learning",
    interest_learning_text: "I am motivated by innovation, constant learning and the development of technical, security and professional skills.",
    prefs_label: "Preferences and hobbies",
    pref_club_title: "Jeunesse Sportive de Kabylie",
    pref_club_desc: "A legendary Algerian football club known for its heritage, strong identity and impressive record.",
    pref_club_item1: "8 Algerian League titles",
    pref_club_item2: "4 Algerian Cups",
    pref_club_item3: "2 Algerian Super Cups",
    pref_club_item4: "7 African titles",
    pref_game_title: "Red Dead Redemption 2",
    pref_game_desc: "A captivating story-driven game that follows Arthur Morgan through a rich and emotional world filled with memorable characters.",
    pref_anime_title: "Dragon Ball",
    pref_anime_desc: "A cult anime blending action, humor, rivalry and character growth. It follows Goku and his friends through epic battles, power challenges and personal development.",
    stat_formation: "Education",
    stat_formation_v: "Master's — ongoing",
    stat_projets: "Projects shipped",
    stat_stack: "Technologies",

    dash_label: "Pick a section",
    dash_title: "Main menu",
    dash_edu_title: "Education",
    dash_edu_desc: "Academic path, degrees",
    dash_proj_title: "Projects",
    dash_proj_desc: "Completed quests and source code",
    dash_skills_title: "Skills",
    dash_skills_desc: "Languages, frameworks, tools",
    dash_cv_title: "Resume",
    dash_cv_desc: "Download my CV",
    dash_contact_title: "Contact",
    dash_contact_desc: "Socials and details",

    edu_label: "Achievements unlocked",
    edu_title: "Education",
    edu_m2_title: "Master's in Network and Information Security Administration",
    edu_m2_meta: "Université de Béjaïa",
    edu_m2_status: "In progress",
    edu_m2_desc: "Specialization in software engineering: software architectures, full-stack development, cybersecurity, applied AI.",
    edu_m1_title: "Bachelor's in Computer Science (L3 MI)",
    edu_m1_meta: "Université de Béjaïa • 2023 - 2026",
    edu_m1_status: "Completed",
    edu_m1_desc: "Fundamentals in algorithmics, databases, networking, web and mobile development.",
    edu_bacc_status: "With distinction",
    edu_bacc_title: "Baccalaureate - Mathematics Technology",
    edu_bacc_meta: "Boudjellil, Béjaïa • 2023",
    edu_bacc_desc: "I earned my baccalaureate in the Mathematics Technology track with a mention of Good and an average of 14.43/20.",

    proj_label: "Quest log",
    proj_title: "Projects",
    proj_1_diff: "Difficulty: high",
    proj_1_desc: "Full-stack e-learning platform dedicated to algorithmic learning. Desktop frontend in Flutter/Dart, backend in Node.js/TypeScript with Prisma and Supabase.",
    proj_1_obj1: "XML-based quiz system",
    proj_1_obj2: "\"Go Points\" scoring and leaderboard",
    proj_1_obj3: "Admin analytics and OTP authentication",
    proj_1_obj4: "Course section with progression for each module",
    proj_1_obj5: "User ranking based on level and performance",
    proj_1_link: "View repository",
    proj_2_name: "Delivery management",
    proj_2_diff: "Difficulty: normal",
    proj_2_desc: "Java project dedicated to delivery management, with logic for order tracking, customers, drivers and routes.",
    proj_2_obj1: "Order and delivery management",
    proj_2_obj2: "Tracking customers, drivers and statuses",
    proj_2_obj3: "Administrative interface and data management",
    proj_2_link: "View repository",
    proj_3_name: "E-commerce in progress",
    proj_3_diff: "Difficulty: high",
    proj_3_desc: "E-commerce site under construction for online product sales with a modern interface and shopping flow tailored for a smooth customer experience.",
    proj_3_obj1: "Product catalog with categories and filters",
    proj_3_obj2: "Cart and order management",
    proj_3_obj3: "Admin dashboard for products",
    proj_3_obj4: "Architecture designed for an MVC/Full Stack project",
    proj_3_link: "In development",

    skills_label: "Loading inventory",
    skills_title: "Skills",
    cat_lang: "Languages",
    cat_web: "Web",
    cat_backend: "Back-end",
    cat_mobile: "Mobile",
    cat_data: "Data",
    cat_security: "Security & Networks",
    cat_tools: "Tools",

    cv_label: "Save file",
    cv_title: "Resume",
    cv_sub: "Recently updated",
    cv_btn: "Download",
    cv_note: "Add your CV (PDF) to the project folder named cv.pdf to enable the download.",
    cv_file_name: "CV_Lebsir_Mohamed_Ali.pdf",
    cv_file_meta: "Recently updated",
    cv_paragraph: "The PDF file is ready in the project folder and can be downloaded directly from this page.",

    contact_label: "Friends list",
    contact_title: "Contact",
    contact_note: "Replace the links above (email, LinkedIn, Facebook, Instagram, WhatsApp) with your real handles.",
    footer_note: "Personal site — built with HTML, CSS and JavaScript."
  }
};

function updateLanguageToggle(lang) {
  const toggle = document.getElementById("langToggle");
  if (!toggle) return;
  toggle.textContent = lang === "fr" ? "FR / EN" : "EN / FR";
  toggle.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");
}

function currentPage(){
  const path = window.location.pathname.split("/").pop();
  return path === "" ? "index.html" : path;
}

function setPageTitle(lang){
  const page = currentPage();
  const titleKey = {
    "index.html": "page_title_home",
    "education.html": "page_title_education",
    "projects.html": "page_title_projects",
    "skills.html": "page_title_skills",
    "cv.html": "page_title_cv",
    "contact.html": "page_title_contact"
  }[page];

  if (titleKey && dict[lang] && dict[lang][titleKey]) {
    document.title = dict[lang][titleKey];
  }
}

function applyLang(lang){
  document.documentElement.lang = lang;
  updateLanguageToggle(lang);
  setPageTitle(lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (dict[lang] && dict[lang][k] !== undefined) {
      el.innerHTML = dict[lang][k];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const map = el.getAttribute("data-i18n-attr").split(":");
    const attr = map[0], key = map[1];
    if(dict[lang] && dict[lang][key] !== undefined) el.setAttribute(attr, dict[lang][key]);
  });

  localStorage.setItem("portfolio_lang", lang);
}

function animateTypewriter(){
  document.querySelectorAll('.typewriter-text').forEach((el, index) => {
    const text = el.dataset.text || el.textContent || '';
    el.textContent = '';

    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.className = 'type-char';
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.animationDelay = `${(index + i) * 0.05}s`;
      el.appendChild(span);
    });
  });
}

function forceFileDownload(url, filename) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Fichier introuvable');
      }
      return response.blob();
    })
    .then(blob => {
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    })
    .catch(() => {
      const fallback = document.createElement('a');
      fallback.href = url;
      fallback.download = filename;
      fallback.target = '_blank';
      document.body.appendChild(fallback);
      fallback.click();
      fallback.remove();
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const page = currentPage();
  document.querySelectorAll(".navlink").forEach(el => {
    if(el.getAttribute("href") === page) el.classList.add("active");
  });

  const saved = localStorage.getItem("portfolio_lang") || "fr";
  applyLang(saved);
  animateTypewriter();

  const toggle = document.getElementById("langToggle");
  if(toggle){
    toggle.addEventListener("click", () => {
      const current = localStorage.getItem("portfolio_lang") || "fr";
      applyLang(current === "fr" ? "en" : "fr");
    });
  }

  document.querySelectorAll('.download-cv').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = link.getAttribute('href');
      const filename = link.getAttribute('download') || 'CV_Lebsir_Mohamed_Ali.pdf';
      forceFileDownload(href, filename);
    });
  });

  const navToggle = document.querySelector(".nav-toggle");
  const navlinks = document.querySelector(".navlinks");
  if(navToggle && navlinks){
    navToggle.addEventListener("click", () => navlinks.classList.toggle("open"));
  }
});