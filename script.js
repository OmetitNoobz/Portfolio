const projects = {
    1: {
        title: "Marathon web",
        category: "Hackathon Web • IUT de Lens (MMI & Info)",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: `
            <p class="modal-intro">Projet réalisé dans le cadre d'un <strong>Marathon Web intensif de 3 jours</strong> à l'IUT de Lens, en collaboration pluridisciplinaire avec les étudiants du département MMI (Métiers du Multimédia et de l'Internet) et du département Informatique.</p>
            
            <div class="modal-section">
                <h4><i class="fas fa-bullseye"></i> Objectifs & Défi</h4>
                <ul>
                    <li>Concevoir, maquetter et développer une application web complète en un temps record (72 heures non-stop).</li>
                    <li>Harmoniser le travail d'équipe entre développeurs backend/frontend et designers UI/UX.</li>
                    <li>Délivrer une interface utilisateur fluide, responsive et attrayante respectant les critères d'évaluation du jury.</li>
                </ul>
            </div>

            <div class="modal-section">
                <h4><i class="fas fa-laptop-code"></i> Technologies & Méthodes</h4>
                <div class="tech-tags">
                    <span class="tech-badge">HTML5</span>
                    <span class="tech-badge">CSS3 Modern</span>
                    <span class="tech-badge">JavaScript</span>
                    <span class="tech-badge">Gestion de Projet Agile</span>
                    <span class="tech-badge">Git</span>
                    <span class="tech-badge">Travail Collaboratif</span>
                </div>
            </div>
        `,
        link: null,
        linkText: null
    },
    2: {
        title: "Code bot java (Navet-Chan)",
        category: "JavaScript & Node.js • Discord.js • ChatGPT & Twitch API • TTS",
        image: "assets/images/navet-chan.png",
        description: `
            <p class="modal-intro"><strong>Navet-Chan</strong> est un bot Discord multifonction dynamique conçu et développé en <strong>JavaScript (Node.js)</strong>. Il propose un vaste système d'économie communautaire, des jeux interactifs de casino, un lecteur audio complet, ainsi qu'une intégration vocale intelligente avec ChatGPT et une passerelle Twitch en direct.</p>
            
            <div class="modal-section">
                <h4><i class="fas fa-code"></i> Comment il a été codé & Architecture</h4>
                <p>Le projet a été développé pour relever plusieurs défis techniques et d'optimisation :</p>
                <ul>
                    <li><strong>Architecture modulaire par dossiers :</strong> Le code a été restructuré et réparti dans plusieurs répertoires dédiés (handlers d'événements, gestionnaires de commandes, services API) afin d'éviter les rafraîchissements trop hâtifs (<em>refresh trop tôt</em>) et stabiliser l'écouteur Discord en continu.</li>
                    <li><strong>Gestion asynchrone :</strong> Utilisation avancée des Promises et d'Async/Await pour fluidifier les interactions avec les APIs externes et les requêtes Discord sans blocage du thread principal.</li>
                </ul>
            </div>

            <div class="modal-section">
                <h4><i class="fas fa-robot"></i> Intégrations Spéciales : ChatGPT Vocale & Twitch</h4>
                <ul>
                    <li><strong>IA ChatGPT & Synthèse Vocale (TTS) :</strong> Grâce à la commande <code>!tts</code>, Navet-Chan rejoint le salon vocal de l'utilisateur, soumet la question ou le message à l'<strong>API OpenAI / ChatGPT</strong>, et récite oralement la réponse en direct dans le vocal (avec une personnalité piquante et sarcastique, comme visible sur la capture !).</li>
                    <li><strong>Connexion API Twitch :</strong> Connexion temps réel permettant au bot de lire les messages du chat Twitch et de créer une passerelle interactive entre les viewers du stream et la communauté Discord.</li>
                </ul>
            </div>

            <div class="modal-section">
                <h4><i class="fas fa-terminal"></i> Commandes & Systèmes Clés</h4>
                <div class="features-grid">
                    <div class="feature-box">
                        <strong>💰 Économie & Inventaire</strong>
                        <p>Monnaie « navets » avec cooldown (<code>!navet</code>), portefeuille (<code>!wallet</code>), boutique d'achats/reventes (<code>!shop</code>, <code>!sellshop</code>, <code>!buy</code>, <code>!sell</code>), dons (<code>!give</code>), classement des plus riches (<code>!top</code>), packs de cartes animés et collection (<code>!buypack</code>, <code>!album</code>).</p>
                    </div>
                    <div class="feature-box">
                        <strong>🎲 Casino & Mini-Jeux</strong>
                        <p>Blackjack (<code>!blackjack</code>), Roulette classique (<code>!roulette</code>), Puissance 4 à deux joueurs (<code>!p4</code>), Roue de la fortune (<code>!roue</code>), Mendicité (<code>!beg</code>, <code>!topbeg</code>), Roulette russe (<code>!navetroulette</code>), et Boss communautaires avec points de vie (<code>!navetboss</code>, <code>!navetattack</code>).</p>
                    </div>
                    <div class="feature-box">
                        <strong>🎵 Musique & Multimédia</strong>
                        <p>Lecture audio complète et intégration Spotify (<code>!play</code>, <code>!spotifyplay</code>), gestion de file d'attente (<code>!navetqueue</code>), contrôles (<code>!navetskip</code>, <code>!navetpause</code>, <code>!navetresume</code>, <code>!navetstop</code>).</p>
                    </div>
                    <div class="feature-box">
                        <strong>🛡️ Modération & Utilitaires</strong>
                        <p>Purge de mots spécifiques (<code>!navetpurge</code>), bannissement des mots interdits (<code>!navetpurgerage</code>), modération (<code>!navetpurgemodo</code>), tirages de dés aléatoires (<code>!navetroll</code>, <code>!navetroll20</code>).</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4><i class="fas fa-layer-group"></i> Stack Technique</h4>
                <div class="tech-tags">
                    <span class="tech-badge">JavaScript (ES6+)</span>
                    <span class="tech-badge">Node.js</span>
                    <span class="tech-badge">Discord.js</span>
                    <span class="tech-badge">OpenAI API (ChatGPT)</span>
                    <span class="tech-badge">Text-To-Speech (TTS Voice)</span>
                    <span class="tech-badge">Twitch API</span>
                </div>
            </div>
        `,
        link: null,
        linkText: null
    },
    3: {
        title: "Pointeuse (STAGE BUT2)",
        category: "Application Web de Gestion • Stage BUT2 Informatique",
        image: "assets/images/pointeuse.png",
        description: `
            <p class="modal-intro">Application web professionnelle de <strong>gestion du temps de travail, suivi des horaires et pointage journalier</strong>, développée dans le cadre de mon <strong>stage de 2ème année de BUT Informatique</strong>.</p>
            
            <div class="modal-section" style="background: var(--color-primary-light); border: 1px solid rgba(29, 78, 216, 0.2); padding: 0.75rem 1rem; border-radius: 6px; margin-bottom: 1.25rem;">
                <p style="margin: 0; font-size: 0.88rem; color: var(--color-heading);">
                    <i class="fas fa-info-circle" style="color: var(--color-primary); margin-right: 0.4rem;"></i>
                    <strong>Note :</strong> La capture d'écran montre une ancienne version du projet. L'application a depuis été largement améliorée et modernisée, tant sur le plan ergonomique que sur l'ajout de fonctionnalités et l'optimisation globale.
                </p>
            </div>

            <div class="modal-section">
                <h4><i class="fas fa-briefcase"></i> Contexte & Mission du Stage</h4>
                <p>L'entreprise avait pour besoin de simplifier, fiabiliser et centraliser le processus d'enregistrement du temps de travail des employés. L'outil a été conçu pour remplacer les feuilles d'heures traditionnelles par une interface web intuitive et en temps réel.</p>
            </div>

            <div class="modal-section">
                <h4><i class="fas fa-calendar-check"></i> Fonctionnalités Clés</h4>
                <ul>
                    <li><strong>Emploi du temps interactif :</strong> Calendrier hebdomadaire (du lundi au dimanche, tranches de 8h00 à 18h30) avec visualisation graphique des créneaux affectés.</li>
                    <li><strong>Pointage journalier en temps réel :</strong> Badgeage des arrivées, départs et coupures repas avec confirmation visuelle immédiate (badge vert <em>« MIDI POINTÉ »</em>, compteur d'heures réelles vs planifiées).</li>
                    <li><strong>Gestion dynamique des créneaux :</strong> Outil permettant de créer ou d'ajuster des plages horaires selon les missions confiées (<em>« + AJOUTER UN CRÉNEAU »</em>).</li>
                    <li><strong>Gestion des pauses :</strong> Module permettant de configurer et déduire les temps de pause réglementaires (<em>« GÉRER LES PAUSES »</em>).</li>
                    <li><strong>Indicateurs d'assiduité :</strong> Repères visuels dynamiques permettant un aperçu rapide du statut de chaque journée de la semaine.</li>
                    <li><strong>Historique & Navigation :</strong> Commandes de navigation temporelle pour consulter et archiver les pointages passés.</li>
                </ul>
            </div>

            <div class="modal-section">
                <h4><i class="fas fa-gears"></i> Compétences & Technologies Mobilisées</h4>
                <div class="tech-tags">
                    <span class="tech-badge">Développement Web Full-Stack</span>
                    <span class="tech-badge">Gestion de Données & Pointage</span>
                    <span class="tech-badge">UI/UX Ergonomie Applicative</span>
                    <span class="tech-badge">Planning Interactif</span>
                    <span class="tech-badge">Stage BUT2</span>
                </div>
            </div>
        `,
        link: null,
        linkText: null
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const nav = document.querySelector('.nav');

    if (burgerBtn && nav) {
        burgerBtn.addEventListener('click', () => {
            nav.classList.toggle('menu-open');
            const icon = burgerBtn.querySelector('i');
            if (nav.classList.contains('menu-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('menu-open');
                const icon = burgerBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    const modal = document.getElementById('work-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDesc = document.getElementById('modal-desc');
    const modalImg = document.getElementById('modal-img');
    const modalLinkBtn = document.getElementById('modal-link-btn');
    const modalActions = document.getElementById('modal-actions');

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-id');
            const project = projects[projectId];

            if (project && modal) {
                if (modalTitle) modalTitle.textContent = project.title;
                if (modalCategory) modalCategory.textContent = project.category;
                if (modalDesc) modalDesc.innerHTML = project.description;
                if (modalImg) {
                    modalImg.src = project.image;
                    modalImg.alt = project.title;
                }

                if (modalActions) {
                    modalActions.style.display = project.link ? "block" : "none";
                }
                if (modalLinkBtn) {
                    if (project.link) {
                        modalLinkBtn.href = project.link;
                        modalLinkBtn.textContent = project.linkText || "Voir le projet";
                        modalLinkBtn.style.display = "inline-flex";
                    } else {
                        modalLinkBtn.style.display = "none";
                    }
                }

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeModal = () => {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    const video = document.getElementById('latest-video');
    if (video) {
        video.addEventListener('canplay', () => {
            video.style.display = 'block';
        });
        video.addEventListener('playing', () => {
            video.style.display = 'block';
        });
        video.addEventListener('error', () => {
            video.style.display = 'none';
        });
    }

    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    const updateThemeIcon = (theme) => {
        if (themeIcon) {
            if (theme === 'dark') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
    };

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateThemeIcon(currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', activeTheme);
            localStorage.setItem('theme', activeTheme);
            updateThemeIcon(activeTheme);
        });
    }
});
