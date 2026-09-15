const translations = {
    fr: {
        nav_presentation: "Présentation",
        nav_latest: "Dernier Projet",
        nav_works: "Mes Travaux",
        nav_contact: "Contact",

        hero_tag: "Bonjour, je suis",
        hero_title: "Créatif & Développeur",
        hero_desc: "Bienvenue sur mon portfolio. Je conçois des applications web modernes, fluides et élégantes avec une attention particulière à l'architecture, aux performances et à l'expérience utilisateur.",
        hero_btn_latest: "Dernier projet",
        hero_btn_works: "Voir mes travaux",

        latest_title: "DERNIER PROJET",
        latest_subtitle: "Découvrez ma dernière réalisation en vidéo — Cliquez pour visiter le site",
        latest_cta: "Visiter le site : ometitnoobz.github.io/Web/",
        latest_pill: '<i class="fas fa-layer-group"></i> OmeRyth — Logiciel de Doublage & Bande Rythmo',

        works_title: "Mes Travaux",
        works_subtitle: "Découvrez quelques-uns de mes récents projets et réalisations.",

        card1_btn: '<i class="fas fa-images"></i> Voir le carrousel & détails',
        card1_badge: '<i class="fas fa-images"></i> 3 images',
        card1_title: "Marathon web",
        card1_tag: "Forum Musical (Jazz) • Backend Info & Frontend MMI",

        card2_btn: '<i class="fas fa-search-plus"></i> En savoir plus',
        card2_title: "Code bot java",
        card2_tag: "JavaScript & Node.js • Bot Discord, ChatGPT & Twitch",

        card3_btn: '<i class="fas fa-search-plus"></i> En savoir plus',
        card3_title: "Pointeuse (STAGE BUT2)",
        card3_tag: "Application Web • Suivi du Temps & Pointage",

        contact_title: "Prenons Contact",
        contact_subtitle: "Une idée de projet ? Une question ? N'hésitez pas à m'envoyer un message.",
        contact_email_title: "Email",
        contact_phone_title: "Téléphone",
        contact_phone_val: "+33 7 67 81 70 15",
        contact_loc_title: "Localisation",
        contact_loc_val: "Lens, France",
        contact_name_ph: "Votre Nom",
        contact_email_ph: "Votre Email",
        contact_msg_ph: "Votre Message",
        contact_submit: "Envoyer le message",

        footer_brand_desc: "Création logicielle et web avec passion.",
        footer_copy: "&copy; 2026 Kilyan Dubois. Tous droits réservés.",

        lang_btn_title: "Passer en anglais / Switch to English",
        lang_btn_label: "EN",
        zoom_hint: "Cliquer pour agrandir l'image"
    },
    en: {
        nav_presentation: "Home",
        nav_latest: "Latest Project",
        nav_works: "My Works",
        nav_contact: "Contact",

        hero_tag: "Hello, I am",
        hero_title: "Creative & Developer",
        hero_desc: "Welcome to my portfolio. I build modern, smooth, and elegant web applications with a strong focus on architecture, performance, and user experience.",
        hero_btn_latest: "Latest project",
        hero_btn_works: "View my works",

        latest_title: "LATEST PROJECT",
        latest_subtitle: "Discover my latest project on video — Click to visit the website",
        latest_cta: "Visit website: ometitnoobz.github.io/Web/",
        latest_pill: '<i class="fas fa-layer-group"></i> OmeRyth — Dubbing & Rythmo Band Software',

        works_title: "My Works",
        works_subtitle: "Discover some of my recent projects and achievements.",

        card1_btn: '<i class="fas fa-images"></i> View carousel & details',
        card1_badge: '<i class="fas fa-images"></i> 3 images',
        card1_title: "Web Marathon",
        card1_tag: "Music Forum (Jazz) • CS Backend & MMI Frontend",

        card2_btn: '<i class="fas fa-search-plus"></i> Learn more',
        card2_title: "Code bot java",
        card2_tag: "JavaScript & Node.js • Discord, ChatGPT & Twitch Bot",

        card3_btn: '<i class="fas fa-search-plus"></i> Learn more',
        card3_title: "Time Clock (STAGE BUT2)",
        card3_tag: "Web Application • Work Hours & Time Tracking",

        contact_title: "Get In Touch",
        contact_subtitle: "Have a project in mind or a question? Feel free to drop me a message.",
        contact_email_title: "Email",
        contact_phone_title: "Phone",
        contact_phone_val: "+33 7 67 81 70 15",
        contact_loc_title: "Location",
        contact_loc_val: "Lens, France",
        contact_name_ph: "Your Name",
        contact_email_ph: "Your Email",
        contact_msg_ph: "Your Message",
        contact_submit: "Send message",

        footer_brand_desc: "Passionate software and web development.",
        footer_copy: "&copy; 2026 Kilyan Dubois. All rights reserved.",

        lang_btn_title: "Switch to French / Passer en français",
        lang_btn_label: "FR",
        zoom_hint: "Click to enlarge image"
    }
};

const projects = {
    fr: {
        1: {
            title: "Marathon web — Culture Jazz",
            category: "Forum Musical (Thème Jazz) • Backend Info & Frontend MMI • 72h Chrono",
            image: "assets/images/culture-jazz-site.png",
            images: [
                {
                    src: "assets/images/culture-jazz-site.png",
                    tag: "Frontend MMI",
                    caption: "Interface Web & Maquette du Forum (conçue par les étudiants MMI)"
                },
                {
                    src: "assets/images/culture-jazz-code.png",
                    tag: "Backend Info",
                    caption: "Code Source Backend — API REST, gestion des topics et base de données (développé par l'équipe Info)"
                },
                {
                    src: "assets/images/culture-jazz-logo.png",
                    tag: "Identité Visuelle",
                    caption: "Logo officiel Culture Jazz (charte graphique MMI)"
                }
            ],
            description: `
                <p class="modal-intro"><strong>Culture Jazz</strong> est une application web de <strong>forum communautaire de musique</strong> développée lors du <strong>Marathon Web de l'IUT de Lens</strong> (72 heures non-stop). L'objectif du hackathon était de concevoir un forum musical complet de A à Z, et notre équipe s'est vu attribuer le thème du <strong>Jazz</strong>.</p>
                
                <div class="modal-section">
                    <h4><i class="fas fa-users-cog"></i> Collaboration Pluridisciplinaire : Info & MMI</h4>
                    <p>Le projet reposait sur une synergie d'équipe et une séparation précise des rôles :</p>
                    <ul>
                        <li><strong>L'équipe Informatique (nous) :</strong> Développement intégral du <strong>Backend</strong> — modélisation de la base de données, création des APIs REST, logique métier des discussions/topics, gestion des messages et réponses, authentification des utilisateurs et tri par catégories musicales.</li>
                        <li><strong>L'équipe MMI (Métiers du Multimédia & de l'Internet) :</strong> Conception du <strong>Frontend</strong> — direction artistique, charte graphique, création du logo officiel, maquettage UI/UX et intégration HTML/CSS responsive de l'interface du forum.</li>
                    </ul>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-comments"></i> Fonctionnalités Clés du Forum</h4>
                    <ul>
                        <li><strong>Espaces de discussion par genre :</strong> Salons thématiques classés par styles de jazz (Bebop, Swing, Cool Jazz, Free Jazz, Modern Jazz, etc.).</li>
                        <li><strong>Gestion des topics & messages :</strong> Publication de nouveaux sujets de débat, commentaires, réponses entre passionnés et système de likes.</li>
                        <li><strong>Communication API Asynchrone :</strong> Flux de données JSON temps réel entre le serveur backend (Info) et l'interface utilisateur (MMI).</li>
                    </ul>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-images"></i> Galerie du Projet</h4>
                    <p>Faites défiler le carrousel à gauche pour consulter l'interface frontend (MMI), le code backend (Info) et le logo. <strong>Cliquez sur l'image pour l'agrandir en plein écran (zoom HD)</strong>.</p>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-laptop-code"></i> Technologies & Compétences Mobilisées</h4>
                    <div class="tech-tags">
                        <span class="tech-badge">Développement Backend</span>
                        <span class="tech-badge">APIs REST</span>
                        <span class="tech-badge">Base de Données & Requêtes SQL</span>
                        <span class="tech-badge">Architecture Serveur</span>
                        <span class="tech-badge">Frontend UI/UX (MMI)</span>
                        <span class="tech-badge">Hackathon 72h Chrono</span>
                        <span class="tech-badge">Gestion Agile & Git</span>
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
    },
    en: {
        1: {
            title: "Web Marathon — Culture Jazz",
            category: "Music Forum (Jazz Theme) • CS Backend & MMI Frontend • 72h Non-Stop",
            image: "assets/images/culture-jazz-site.png",
            images: [
                {
                    src: "assets/images/culture-jazz-site.png",
                    tag: "MMI Frontend",
                    caption: "Web Interface & Forum Mockup (designed by MMI students)"
                },
                {
                    src: "assets/images/culture-jazz-code.png",
                    tag: "CS Backend",
                    caption: "Backend Source Code — REST API, topic management and database (developed by the CS team)"
                },
                {
                    src: "assets/images/culture-jazz-logo.png",
                    tag: "Visual Identity",
                    caption: "Culture Jazz Official Logo (MMI branding)"
                }
            ],
            description: `
                <p class="modal-intro"><strong>Culture Jazz</strong> is a music community forum web application developed during the <strong>IUT de Lens Web Marathon</strong> (72 hours non-stop). The hackathon challenge was to build a full music forum from scratch, and our team was assigned the <strong>Jazz</strong> theme.</p>
                
                <div class="modal-section">
                    <h4><i class="fas fa-users-cog"></i> Multi-Disciplinary Synergy: CS & MMI</h4>
                    <p>The project was built around a strong team synergy and a clear separation of concerns:</p>
                    <ul>
                        <li><strong>Computer Science Team (us):</strong> Complete development of the <strong>Backend</strong> — database modeling, REST API development, business logic for discussions/topics, comment/reply management, user authentication, and musical sub-genre filtering.</li>
                        <li><strong>MMI Team (Multimedia & Internet):</strong> Complete development of the <strong>Frontend</strong> — art direction, branding, official logo, UI/UX prototyping, and responsive HTML/CSS interface integration.</li>
                    </ul>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-comments"></i> Key Forum Features</h4>
                    <ul>
                        <li><strong>Thematic discussion rooms:</strong> Dedicated rooms organized by jazz genres (Bebop, Swing, Cool Jazz, Free Jazz, Modern Jazz, etc.).</li>
                        <li><strong>Topic & message management:</strong> Publishing new discussion topics, threaded replies between jazz enthusiasts, and community like system.</li>
                        <li><strong>Asynchronous API Communication:</strong> Real-time JSON data flow between the backend server (CS) and the user interface (MMI).</li>
                    </ul>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-images"></i> Project Gallery</h4>
                    <p>Browse the carousel on the left to inspect the frontend mockup (MMI), the backend code (CS), and the logo. <strong>Click on any image to view it in full-screen (HD zoom)</strong>.</p>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-laptop-code"></i> Technologies & Skills</h4>
                    <div class="tech-tags">
                        <span class="tech-badge">Backend Development</span>
                        <span class="tech-badge">REST APIs</span>
                        <span class="tech-badge">Database & SQL</span>
                        <span class="tech-badge">Server Architecture</span>
                        <span class="tech-badge">UI/UX Frontend (MMI)</span>
                        <span class="tech-badge">72h Non-Stop Hackathon</span>
                        <span class="tech-badge">Agile & Git</span>
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
                <p class="modal-intro"><strong>Navet-Chan</strong> is a dynamic multi-purpose Discord bot designed and developed in <strong>JavaScript (Node.js)</strong>. It features an extensive community economy system, interactive casino games, a full music player, voice AI integration with ChatGPT, and a live Twitch stream gateway.</p>
                
                <div class="modal-section">
                    <h4><i class="fas fa-code"></i> How It Was Coded & Architecture</h4>
                    <p>The project was designed to overcome several technical and performance hurdles:</p>
                    <ul>
                        <li><strong>Modular folder architecture:</strong> The codebase was organized into dedicated directories (event handlers, command managers, API services) to prevent untimely reloads (<em>refresh too early</em>) and ensure continuous listening on Discord.</li>
                        <li><strong>Asynchronous handling:</strong> Advanced use of Promises and Async/Await to streamline external API interactions and Discord requests without blocking the main event thread.</li>
                    </ul>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-robot"></i> Special Integrations: Voice ChatGPT & Twitch</h4>
                    <ul>
                        <li><strong>ChatGPT AI & Voice Text-To-Speech (TTS):</strong> Using the <code>!tts</code> command, Navet-Chan joins the user's voice channel, forwards prompts to the <strong>OpenAI / ChatGPT API</strong>, and recites answers live with a witty, sarcastic persona.</li>
                        <li><strong>Twitch API Connection:</strong> Real-time integration allowing the bot to read stream chat messages and bridge viewers with the Discord community.</li>
                    </ul>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-terminal"></i> Key Systems & Commands</h4>
                    <div class="features-grid">
                        <div class="feature-box">
                            <strong>💰 Economy & Inventory</strong>
                            <p>"Turnip" currency with cooldown (<code>!navet</code>), wallet (<code>!wallet</code>), shop (<code>!shop</code>, <code>!sellshop</code>, <code>!buy</code>, <code>!sell</code>), gifts (<code>!give</code>), rich leaderboard (<code>!top</code>), animated card packs and album (<code>!buypack</code>, <code>!album</code>).</p>
                        </div>
                        <div class="feature-box">
                            <strong>🎲 Casino & Mini-Games</strong>
                            <p>Blackjack (<code>!blackjack</code>), Classic roulette (<code>!roulette</code>), Connect 4 for two players (<code>!p4</code>), Wheel of fortune (<code>!roue</code>), Begging (<code>!beg</code>, <code>!topbeg</code>), Russian roulette (<code>!navetroulette</code>), and Community boss fights (<code>!navetboss</code>, <code>!navetattack</code>).</p>
                        </div>
                        <div class="feature-box">
                            <strong>🎵 Music & Media</strong>
                            <p>Full audio streaming with Spotify integration (<code>!play</code>, <code>!spotifyplay</code>), queue management (<code>!navetqueue</code>), player controls (<code>!navetskip</code>, <code>!navetpause</code>, <code>!navetresume</code>, <code>!navetstop</code>).</p>
                        </div>
                        <div class="feature-box">
                            <strong>🛡️ Moderation & Utilities</strong>
                            <p>Specific word purge (<code>!navetpurge</code>), forbidden word ban (<code>!navetpurgerage</code>), mod cleanup (<code>!navetpurgemodo</code>), random dice rolls (<code>!navetroll</code>, <code>!navetroll20</code>).</p>
                        </div>
                    </div>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-layer-group"></i> Technical Stack</h4>
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
            title: "Time Clock (STAGE BUT2)",
            category: "Management Web App • BUT2 Computer Science Internship",
            image: "assets/images/pointeuse.png",
            description: `
                <p class="modal-intro">Professional web application for <strong>work time management, schedule tracking, and daily clock-in</strong>, developed during my <strong>2nd-year BUT Computer Science internship</strong>.</p>
                
                <div class="modal-section" style="background: var(--color-primary-light); border: 1px solid rgba(29, 78, 216, 0.2); padding: 0.75rem 1rem; border-radius: 6px; margin-bottom: 1.25rem;">
                    <p style="margin: 0; font-size: 0.88rem; color: var(--color-heading);">
                        <i class="fas fa-info-circle" style="color: var(--color-primary); margin-right: 0.4rem;"></i>
                        <strong>Note:</strong> The screenshot displays an earlier version of the project. The application has since been substantially improved and modernized in both UX design and feature set.
                    </p>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-briefcase"></i> Internship Context & Mission</h4>
                    <p>The company needed to simplify, secure, and centralize employee work hour tracking, replacing traditional timesheets with an intuitive real-time web portal.</p>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-calendar-check"></i> Key Features</h4>
                    <ul>
                        <li><strong>Interactive weekly schedule:</strong> Weekly calendar (Monday to Sunday, 8:00 AM to 6:30 PM slots) with graphical task visualization.</li>
                        <li><strong>Real-time daily clock-in:</strong> Arrival, departure, and meal break badges with instant visual feedback (green badge <em>« NOON CLOCKED IN »</em>, actual vs. scheduled hour counter).</li>
                        <li><strong>Dynamic slot management:</strong> Dedicated tool to add and adjust time slots based on assigned duties (<em>« + ADD TIME SLOT »</em>).</li>
                        <li><strong>Break management:</strong> Module allowing users to configure and deduct regulatory break durations (<em>« MANAGE BREAKS »</em>).</li>
                        <li><strong>Attendance indicators:</strong> Dynamic visual markers for a quick overview of each weekday's status.</li>
                        <li><strong>History & Navigation:</strong> Time navigation controls to inspect and archive historical attendance data.</li>
                    </ul>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-gears"></i> Skills & Technologies</h4>
                    <div class="tech-tags">
                        <span class="tech-badge">Full-Stack Web Development</span>
                        <span class="tech-badge">Time Tracking & Data Management</span>
                        <span class="tech-badge">Application UI/UX</span>
                        <span class="tech-badge">Interactive Planning</span>
                        <span class="tech-badge">BUT2 Internship</span>
                    </div>
                </div>
            `,
            link: null,
            linkText: null
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('portfolio_lang') || 'fr';
    let activeProjectId = null;

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
    const modalLinkBtn = document.getElementById('modal-link-btn');
    const modalActions = document.getElementById('modal-actions');

    const modalCarousel = document.getElementById('modal-carousel');
    const carouselTrack = document.getElementById('carousel-track');
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');
    const carouselIndicators = document.getElementById('carousel-indicators');
    const carouselCounter = document.getElementById('carousel-counter');
    const carouselTag = document.getElementById('carousel-tag');
    const carouselDots = document.getElementById('carousel-dots');
    const zoomTriggerBtn = document.getElementById('zoom-trigger-btn');

    const zoomModal = document.getElementById('zoom-modal');
    const zoomBackdrop = document.getElementById('zoom-backdrop');
    const zoomClose = document.getElementById('zoom-close');
    const zoomImg = document.getElementById('zoom-img');
    const zoomCaption = document.getElementById('zoom-caption');
    const zoomPrev = document.getElementById('zoom-prev');
    const zoomNext = document.getElementById('zoom-next');

    let currentSlide = 0;
    let slideItems = [];

    const openZoom = (src, caption) => {
        if (!zoomModal || !zoomImg) return;
        zoomImg.src = src;
        zoomImg.alt = caption || "Aperçu agrandi";
        if (zoomCaption) {
            zoomCaption.textContent = caption || "";
            zoomCaption.style.display = caption ? "inline-block" : "none";
        }

        const isMulti = slideItems && slideItems.length > 1;
        if (zoomPrev) zoomPrev.style.display = isMulti ? "flex" : "none";
        if (zoomNext) zoomNext.style.display = isMulti ? "flex" : "none";

        zoomModal.classList.add('active');
        zoomModal.setAttribute('aria-hidden', 'false');
    };

    const closeZoom = () => {
        if (!zoomModal) return;
        zoomModal.classList.remove('active');
        zoomModal.setAttribute('aria-hidden', 'true');
    };

    const updateZoomSlide = (index) => {
        goToSlide(index);
        if (slideItems && slideItems[currentSlide]) {
            const item = slideItems[currentSlide];
            if (zoomImg) zoomImg.src = item.src;
            if (zoomCaption) {
                zoomCaption.textContent = item.caption || item.tag || "";
            }
        }
    };

    const updateSlideDisplay = () => {
        const slides = carouselTrack ? carouselTrack.querySelectorAll('.carousel-slide') : [];
        slides.forEach((slide, idx) => {
            slide.classList.toggle('active', idx === currentSlide);
        });

        const dots = carouselDots ? carouselDots.querySelectorAll('.carousel-dot') : [];
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentSlide);
        });

        if (slideItems.length > 1) {
            if (carouselCounter) carouselCounter.textContent = `${currentSlide + 1} / ${slideItems.length}`;
            if (carouselTag && slideItems[currentSlide]) {
                carouselTag.textContent = slideItems[currentSlide].tag || "Aperçu";
            }
        }
    };

    const goToSlide = (index) => {
        if (slideItems.length <= 1) return;
        if (index < 0) {
            currentSlide = slideItems.length - 1;
        } else if (index >= slideItems.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        updateSlideDisplay();
    };

    const setupCarousel = (project) => {
        currentSlide = 0;
        if (project.images && Array.isArray(project.images) && project.images.length > 0) {
            slideItems = project.images;
        } else if (project.image) {
            slideItems = [{ src: project.image, tag: "Aperçu", caption: project.title }];
        } else {
            slideItems = [];
        }

        const isMulti = slideItems.length > 1;

        if (carouselPrev) carouselPrev.style.display = isMulti ? "flex" : "none";
        if (carouselNext) carouselNext.style.display = isMulti ? "flex" : "none";
        if (carouselIndicators) carouselIndicators.style.display = isMulti ? "flex" : "none";
        if (carouselDots) carouselDots.style.display = isMulti ? "flex" : "none";

        if (carouselTrack) {
            carouselTrack.innerHTML = '';
            slideItems.forEach((item, idx) => {
                const slide = document.createElement('div');
                slide.className = `carousel-slide${idx === 0 ? ' active' : ''}`;

                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.caption || item.tag || project.title;
                img.className = 'carousel-img';
                img.title = translations[currentLang].zoom_hint || "Cliquer pour agrandir l'image";

                img.addEventListener('click', () => {
                    openZoom(item.src, item.caption || item.tag || project.title);
                });

                slide.appendChild(img);
                carouselTrack.appendChild(slide);
            });
        }

        if (carouselDots) {
            carouselDots.innerHTML = '';
            if (isMulti) {
                slideItems.forEach((_, idx) => {
                    const dot = document.createElement('button');
                    dot.className = `carousel-dot${idx === 0 ? ' active' : ''}`;
                    dot.setAttribute('type', 'button');
                    dot.setAttribute('aria-label', `Aller à l'image ${idx + 1}`);
                    dot.addEventListener('click', (e) => {
                        e.stopPropagation();
                        goToSlide(idx);
                    });
                    carouselDots.appendChild(dot);
                });
            }
        }

        updateSlideDisplay();
    };

    if (carouselPrev) {
        carouselPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(currentSlide - 1);
        });
    }

    if (carouselNext) {
        carouselNext.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(currentSlide + 1);
        });
    }

    if (zoomClose) zoomClose.addEventListener('click', closeZoom);
    if (zoomBackdrop) zoomBackdrop.addEventListener('click', closeZoom);
    if (zoomImg) zoomImg.addEventListener('click', closeZoom);

    if (zoomPrev) {
        zoomPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            updateZoomSlide(currentSlide - 1);
        });
    }

    if (zoomNext) {
        zoomNext.addEventListener('click', (e) => {
            e.stopPropagation();
            updateZoomSlide(currentSlide + 1);
        });
    }

    if (zoomTriggerBtn) {
        zoomTriggerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (slideItems && slideItems[currentSlide]) {
                const item = slideItems[currentSlide];
                openZoom(item.src, item.caption || item.tag || "");
            }
        });
    }

    let touchStartX = 0;
    let touchEndX = 0;

    if (modalCarousel) {
        modalCarousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        modalCarousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchEndX - touchStartX;
            if (Math.abs(diff) > 40) {
                if (diff < 0) {
                    goToSlide(currentSlide + 1);
                } else {
                    goToSlide(currentSlide - 1);
                }
            }
        }, { passive: true });
    }

    document.querySelectorAll('.card-nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const cardId = btn.getAttribute('data-card-id');
            const langProjects = projects[currentLang] || projects.fr;
            const project = langProjects[cardId];
            if (!project || !project.images) return;

            const cardImg = document.getElementById(`card-img-${cardId}`);
            if (!cardImg) return;

            let cardIdx = parseInt(cardImg.getAttribute('data-idx') || '0', 10);
            if (btn.classList.contains('next')) {
                cardIdx = (cardIdx + 1) % project.images.length;
            } else {
                cardIdx = (cardIdx - 1 + project.images.length) % project.images.length;
            }

            cardImg.src = project.images[cardIdx].src;
            cardImg.setAttribute('data-idx', cardIdx);
        });
    });

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-id');
            activeProjectId = projectId;
            const langProjects = projects[currentLang] || projects.fr;
            const project = langProjects[projectId];

            if (project && modal) {
                if (modalTitle) modalTitle.textContent = project.title;
                if (modalCategory) modalCategory.textContent = project.category;
                if (modalDesc) modalDesc.innerHTML = project.description;

                setupCarousel(project);

                if (modalActions) {
                    modalActions.style.display = project.link ? "block" : "none";
                }
                if (modalLinkBtn) {
                    if (project.link) {
                        modalLinkBtn.href = project.link;
                        modalLinkBtn.textContent = project.linkText || (currentLang === 'en' ? "View project" : "Voir le projet");
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
        closeZoom();
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        activeProjectId = null;
    };

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (zoomModal && zoomModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeZoom();
                return;
            } else if (e.key === 'ArrowLeft') {
                updateZoomSlide(currentSlide - 1);
                return;
            } else if (e.key === 'ArrowRight') {
                updateZoomSlide(currentSlide + 1);
                return;
            }
        }

        if (modal && modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                goToSlide(currentSlide - 1);
            } else if (e.key === 'ArrowRight') {
                goToSlide(currentSlide + 1);
            }
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

    const langToggleBtn = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');

    const applyLanguage = (lang) => {
        currentLang = lang;
        document.documentElement.setAttribute('lang', lang);

        if (langLabel) {
            langLabel.textContent = lang === 'fr' ? 'EN' : 'FR';
        }
        if (langToggleBtn) {
            langToggleBtn.title = translations[lang].lang_btn_title;
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        if (modal && modal.classList.contains('active') && activeProjectId) {
            const langProjects = projects[lang] || projects.fr;
            const project = langProjects[activeProjectId];
            if (project) {
                if (modalTitle) modalTitle.textContent = project.title;
                if (modalCategory) modalCategory.textContent = project.category;
                if (modalDesc) modalDesc.innerHTML = project.description;
                setupCarousel(project);
            }
        }
    };

    applyLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'fr' ? 'en' : 'fr';
            localStorage.setItem('portfolio_lang', nextLang);
            applyLanguage(nextLang);
        });
    }
});
