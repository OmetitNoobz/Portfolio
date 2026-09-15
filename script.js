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
        card1_title: "Marathon du Web",
        card1_tag: "Blog Musical (Jazz) • Backend Laravel (Info) & Frontend (MMI) • 36h",

        card2_btn: '<i class="fas fa-images"></i> Voir le carrousel & détails',
        card2_badge: '<i class="fas fa-images"></i> 3 images',
        card2_title: "Bot Discord JS (Navet-Chan)",
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
        card1_tag: "Music Blog (Jazz) • Laravel Backend (CS) & Frontend (MMI) • 36h",

        card2_btn: '<i class="fas fa-images"></i> View carousel & details',
        card2_badge: '<i class="fas fa-images"></i> 3 images',
        card2_title: "JS Discord Bot (Navet-Chan)",
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
            title: "Marathon du Web — Culture Jazz",
            category: "SAE S3 BUT Informatique & MMI • Backend Laravel (Info) & Frontend (MMI) • 36h Chrono",
            image: "assets/images/culture-jazz-site.png",
            images: [
                {
                    src: "assets/images/culture-jazz-site.png",
                    tag: "Frontend MMI",
                    caption: "Interface Web & Maquette du Blog Musical (conçue et intégrée par les étudiants MMI)"
                },
                {
                    src: "assets/images/culture-jazz-code.png",
                    tag: "Backend Laravel (Info)",
                    caption: "Code Source Backend — Contrôleur Laravel & Eloquent ORM (Vrai code du projet, image générée pour le portfolio)"
                },
                {
                    src: "assets/images/culture-jazz-logo.png",
                    tag: "Identité Visuelle",
                    caption: "Logo officiel Culture Jazz (charte graphique MMI)"
                }
            ],
            description: `
                <p class="modal-intro"><strong>Culture Jazz</strong> est une application web de <strong>blog musical</strong> conçue et développée en <strong>36 heures chrono</strong> lors du <strong>Marathon du Web</strong> de l'IUT de Lens. Le projet s'inscrit dans le cadre d’une <strong>SAE (Situation d’Apprentissage et d’Évaluation)</strong> du troisième semestre de <strong>BUT Informatique</strong> et de <strong>BUT MMI</strong>.</p>
                
                <div class="modal-section">
                    <h4><i class="fas fa-graduation-cap"></i> Contexte du Projet</h4>
                    <p>Ce projet a été réalisé dans le cadre d’un projet de <strong>SAE du troisième semestre de BUT Informatique et de BUT MMI</strong>.</p>
                    <p>Le contexte de ce projet a été spécial puisqu'il a été réalisé en <strong>36h</strong> dans le cadre du <em>« Marathon du Web »</em> organisé par le département informatique et le département MMI de l'IUT de Lens.</p>
                    <p>Le sujet consistait à concevoir une application web de <strong>blog musical</strong>, permettant aux utilisateurs de publier et consulter des articles autour d’un style musical défini : <strong>le Jazz</strong>. Les utilisateurs inscrits peuvent créer, modifier et publier leurs propres articles, tandis que les autres membres peuvent liker, commenter et suivre des auteurs.</p>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-bullseye"></i> Objectifs & Rôles</h4>
                    <ul>
                        <li><strong>Les étudiants en Informatique (notre équipe) :</strong> Nous avions pour mission de développer la partie <strong>back-end de l'application en Laravel</strong>, en implémentant un maximum des fonctionnalités demandées (modélisation de données, contrôleurs, requêtes Eloquent, gestion des sessions/droits et endpoints asynchrones).</li>
                        <li><strong>Les étudiants MMI :</strong> Ils se sont chargés de la conception de la <strong>charte graphique et des maquettes</strong>, ainsi que de l'<strong>intégration</strong> des fonctionnalités selon ces maquettes.</li>
                    </ul>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-newspaper"></i> Fonctionnalités du Blog Musical</h4>
                    <ul>
                        <li><strong>Articles & Édition :</strong> Création, modification, catégorisation par sous-genres de Jazz (Bebop, Swing, Cool Jazz...) et publication d'articles par les rédacteurs inscrits.</li>
                        <li><strong>Interactions Sociales :</strong> Système de likes en temps réel, fil de commentaires sur chaque publication et possibilité de suivre des auteurs favoris.</li>
                        <li><strong>Navigation & Découverte :</strong> Pagination fluide, mise en avant des derniers articles et filtrage par popularité.</li>
                    </ul>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-images"></i> Galerie du Projet</h4>
                    <p>Faites défiler le carrousel à gauche pour consulter l'interface frontend (MMI), le code backend Laravel (Info) et le logo. <strong>Note :</strong> la capture de code source présente le <em>vrai code développé en Laravel</em> lors de l'événement (image générée pour le portfolio). <strong>Cliquez sur l'image pour l'agrandir en plein écran (zoom HD)</strong>.</p>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-laptop-code"></i> Technologies & Compétences Mobilisées</h4>
                    <div class="tech-tags">
                        <span class="tech-badge">Laravel (PHP)</span>
                        <span class="tech-badge">Architecture MVC</span>
                        <span class="tech-badge">Eloquent ORM & MySQL</span>
                        <span class="tech-badge">SAE S3 (IUT de Lens)</span>
                        <span class="tech-badge">Frontend & UI/UX (MMI)</span>
                        <span class="tech-badge">Marathon 36h Chrono</span>
                        <span class="tech-badge">Collaboration Inter-Départements</span>
                    </div>
                </div>
            `,
            link: null,
            linkText: null
        },
        2: {
            title: "Bot Discord JS (Navet-Chan)",
            category: "JavaScript & Node.js • Discord.js • ChatGPT & Twitch API • TTS",
            image: "assets/images/navet-chan.png",
            images: [
                {
                    src: "assets/images/navet-chan.png",
                    tag: "Aperçu Bot",
                    caption: "Interface & Profil du Bot Discord Navet-Chan"
                },
                {
                    src: "assets/images/navet-chan-code-voice.png",
                    tag: "Code Vocal & IA",
                    caption: "Code Source — Passerelle Twitch & Vocal ChatGPT TTS (Vrai code du projet, image générée pour le portfolio)"
                },
                {
                    src: "assets/images/navet-chan-code-p4.png",
                    tag: "Code Moteur Jeu",
                    caption: "Code Source — Moteur Puissance 4 & Boutons Discord.js (Vrai code du projet, image générée pour le portfolio)"
                }
            ],
            description: `
                <p class="modal-intro"><strong>Navet-Chan</strong> est un bot Discord multifonction dynamique conçu et développé en <strong>JavaScript (Node.js)</strong>. Il intègre une passerelle interactive en direct avec Twitch, une synthèse vocale alimentée par l'API OpenAI (ChatGPT), un système d'économie persistante avec inventaire, ainsi qu'un moteur de mini-jeux multijoueurs exploitant les composants modernes de Discord.</p>
                
                <div class="modal-section">
                    <h4><i class="fas fa-code"></i> Extraits de Code Source & Implémentation Réelle</h4>
                    <p>Voici plusieurs modules clés extraits directement du code source du bot :</p>

                    <div class="code-card">
                        <div class="code-card-header">
                            <div class="code-dots">
                                <span class="code-dot red"></span>
                                <span class="code-dot yellow"></span>
                                <span class="code-dot green"></span>
                            </div>
                            <span class="code-title"><i class="fas fa-microphone-alt"></i> twitch-voice-chatgpt.js</span>
                            <span class="code-lang">JavaScript</span>
                        </div>
                        <pre class="code-pre"><code><span class="c-comment">// Passerelle Twitch EventSub -> OpenAI ChatGPT -> Discord Vocal (TTS)</span>
<span class="c-keyword">async function</span> <span class="c-func">handleTwitchTTS</span>(messageText, twitchUsername) {
    <span class="c-keyword">const</span> guild = <span class="c-keyword">await</span> client.guilds.<span class="c-func">fetch</span>(DISCORD_GUILD_ID);
    <span class="c-keyword">const</span> channel = guild.channels.cache.<span class="c-func">get</span>(DISCORD_VOCAL_ID);
    <span class="c-keyword">if</span> (!channel || channel.type !== <span class="c-num">2</span>) <span class="c-keyword">return</span>; <span class="c-comment">// Salon vocal requis</span>

    <span class="c-comment">// 1. Interrogation asynchrone de l'API OpenAI (modèle gpt-3.5-turbo)</span>
    <span class="c-keyword">const</span> member = { user: { id: twitchUsername }, roles: { cache: <span class="c-keyword">new</span> <span class="c-func">Map</span>() } };
    <span class="c-keyword">const</span> gptResponse = <span class="c-keyword">await</span> <span class="c-func">getChatGPTResponseWithHistory</span>(messageText, member, channel.id);

    <span class="c-comment">// 2. Synthèse vocale Text-to-Speech (gTTS) & fichier audio temporaire</span>
    <span class="c-keyword">const</span> filePath = path.<span class="c-func">join</span>(__dirname, <span class="c-string">\`tts_\${Date.now()}.mp3\`</span>);
    <span class="c-keyword">const</span> tts = <span class="c-keyword">new</span> <span class="c-func">gTTS</span>(gptResponse, <span class="c-string">'fr'</span>);
    <span class="c-keyword">await new</span> <span class="c-func">Promise</span>((res, rej) => tts.<span class="c-func">save</span>(filePath, err => err ? rej(err) : res()));

    <span class="c-comment">// 3. Connexion au salon vocal Discord et streaming du flux audio</span>
    <span class="c-keyword">const</span> connection = <span class="c-func">joinVoiceChannel</span>({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });
    <span class="c-keyword">const</span> player = <span class="c-func">createAudioPlayer</span>();
    <span class="c-keyword">const</span> resource = <span class="c-func">createAudioResource</span>(filePath);
    player.<span class="c-func">play</span>(resource);
    connection.<span class="c-func">subscribe</span>(player);

    player.<span class="c-func">on</span>(AudioPlayerStatus.Idle, () => {
        fs.<span class="c-func">unlink</span>(filePath, () => {}); <span class="c-comment">// Nettoyage automatique du cache</span>
        connection.<span class="c-func">destroy</span>();
    });
}</code></pre>
                    </div>

                    <div class="code-card">
                        <div class="code-card-header">
                            <div class="code-dots">
                                <span class="code-dot red"></span>
                                <span class="code-dot yellow"></span>
                                <span class="code-dot green"></span>
                            </div>
                            <span class="code-title"><i class="fas fa-gamepad"></i> puissance4-engine.js</span>
                            <span class="code-lang">JavaScript</span>
                        </div>
                        <pre class="code-pre"><code><span class="c-comment">// Moteur Puissance 4 multijoueur avec boutons interactifs Discord.js</span>
<span class="c-keyword">async function</span> <span class="c-func">startGame</span>(message, user1, user2, bet, opponent, wallets) {
    <span class="c-keyword">const</span> ROWS = <span class="c-num">6</span>, COLS = <span class="c-num">7</span>;
    <span class="c-keyword">let</span> grid = Array.<span class="c-func">from</span>({ length: ROWS }, () => Array(COLS).<span class="c-func">fill</span>(<span class="c-string">"⚪"</span>));
    <span class="c-keyword">const</span> symbols = { [user1]: <span class="c-string">"🔴"</span>, [user2]: <span class="c-string">"🟡"</span> };
    <span class="c-keyword">let</span> turn = user1;

    <span class="c-keyword">function</span> <span class="c-func">dropPiece</span>(col, player) {
        <span class="c-keyword">for</span> (<span class="c-keyword">let</span> row = ROWS - <span class="c-num">1</span>; row >= <span class="c-num">0</span>; row--) {
            <span class="c-keyword">if</span> (grid[row][col] === <span class="c-string">"⚪"</span>) {
                grid[row][col] = symbols[player];
                <span class="c-keyword">return</span> row;
            }
        }
        <span class="c-keyword">return null</span>;
    }

    <span class="c-comment">// Vérification d'alignement (lignes, colonnes et diagonales)</span>
    <span class="c-keyword">function</span> <span class="c-func">checkWin</span>(player) {
        <span class="c-keyword">const</span> sym = symbols[player];
        <span class="c-keyword">for</span> (<span class="c-keyword">let</span> r = <span class="c-num">0</span>; r < ROWS; r++) {
            <span class="c-keyword">for</span> (<span class="c-keyword">let</span> c = <span class="c-num">0</span>; c <= COLS - <span class="c-num">4</span>; c++) {
                <span class="c-keyword">if</span> (grid[r][c] === sym && grid[r][c+<span class="c-num">1</span>] === sym &&
                    grid[r][c+<span class="c-num">2</span>] === sym && grid[r][c+<span class="c-num">3</span>] === sym) <span class="c-keyword">return true</span>;
            }
        }
        <span class="c-comment">/* [...] vérifications des colonnes et diagonales descendantes/montantes */</span>
        <span class="c-keyword">return false</span>;
    }

    <span class="c-comment">// Écouteur asynchrone des clics sur les 7 colonnes</span>
    <span class="c-keyword">const</span> collector = gameMessage.<span class="c-func">createMessageComponentCollector</span>({ time: <span class="c-num">600000</span> });
    collector.<span class="c-func">on</span>(<span class="c-string">'collect'</span>, <span class="c-keyword">async</span> (interaction) => {
        <span class="c-keyword">if</span> (interaction.user.id !== turn) {
            <span class="c-keyword">return</span> interaction.<span class="c-func">reply</span>({ content: <span class="c-string">"Ce n'est pas ton tour !"</span>, ephemeral: <span class="c-keyword">true</span> });
        }
        <span class="c-keyword">const</span> col = parseInt(interaction.customId.<span class="c-func">split</span>(<span class="c-string">"_"</span>)[<span class="c-num">1</span>]);
        <span class="c-keyword">const</span> row = <span class="c-func">dropPiece</span>(col, turn);
        <span class="c-comment">// Actualisation de la grille, calcul du gagnant et transfert des navets</span>
    });
}</code></pre>
                    </div>

                    <div class="code-card">
                        <div class="code-card-header">
                            <div class="code-dots">
                                <span class="code-dot red"></span>
                                <span class="code-dot yellow"></span>
                                <span class="code-dot green"></span>
                            </div>
                            <span class="code-title"><i class="fas fa-coins"></i> economy-wallet.js</span>
                            <span class="code-lang">JavaScript</span>
                        </div>
                        <pre class="code-pre"><code><span class="c-comment">// Persistance des portefeuilles JSON & calcul de cooldowns</span>
<span class="c-keyword">const</span> walletPath = path.<span class="c-func">join</span>(__dirname, <span class="c-string">'wallets.json'</span>);

<span class="c-keyword">function</span> <span class="c-func">loadWallets</span>() {
    <span class="c-keyword">if</span> (!fs.<span class="c-func">existsSync</span>(walletPath)) <span class="c-keyword">return</span> {};
    <span class="c-keyword">return</span> JSON.<span class="c-func">parse</span>(fs.<span class="c-func">readFileSync</span>(walletPath));
}

<span class="c-keyword">function</span> <span class="c-func">saveWallets</span>(wallets) {
    fs.<span class="c-func">writeFileSync</span>(walletPath, JSON.<span class="c-func">stringify</span>(wallets, <span class="c-keyword">null</span>, <span class="c-num">4</span>));
}

<span class="c-comment">// Récompense périodique avec vérification temporelle</span>
<span class="c-keyword">if</span> (message.content === <span class="c-string">'!navet'</span>) {
    <span class="c-keyword">const</span> wallets = <span class="c-func">loadWallets</span>();
    <span class="c-keyword">const</span> userId = message.author.id;
    <span class="c-keyword">const</span> now = Date.<span class="c-func">now</span>();
    <span class="c-keyword">const</span> cooldown = <span class="c-num">1000</span> * <span class="c-num">60</span> * <span class="c-num">60</span>; <span class="c-comment">// 1 heure</span>

    <span class="c-keyword">if</span> (now - (wallets[userId]?.lastClaim || <span class="c-num">0</span>) < cooldown) {
        <span class="c-keyword">const</span> remaining = Math.<span class="c-func">floor</span>((cooldown - (now - wallets[userId].lastClaim)) / <span class="c-num">60000</span>);
        <span class="c-keyword">return</span> message.<span class="c-func">reply</span>(<span class="c-string">\`Tu as déjà réclamé tes navets ! Reviens dans \${remaining}min.\`</span>);
    }

    wallets[userId].balance = (wallets[userId].balance || <span class="c-num">0</span>) + <span class="c-num">100</span>;
    wallets[userId].lastClaim = now;
    <span class="c-func">saveWallets</span>(wallets);
}</code></pre>
                    </div>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-images"></i> Galerie & Zoom du Code</h4>
                    <p>Le carrousel ci-contre présente le profil du bot ainsi que des captures haute définition du code source (IA vocale & moteur de jeu). <strong>Note :</strong> les captures de code présentent le <em>vrai code source du bot</em> (images générées pour le portfolio). <strong>Cliquez sur une image pour l'agrandir en plein écran (zoom HD)</strong>.</p>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-terminal"></i> Commandes & Écosystème Développé</h4>
                    <div class="features-grid">
                        <div class="feature-box">
                            <strong>💰 Économie & Inventaire</strong>
                            <p>Monnaie « navets » avec cooldown (<code>!navet</code>), portefeuille (<code>!wallet</code>), boutique d'achats/reventes (<code>!shop</code>, <code>!sellshop</code>, <code>!buy</code>, <code>!sell</code>), dons (<code>!give</code>), vol avec probabilités (<code>!navetsteal</code>), et classement (<code>!top</code>).</p>
                        </div>
                        <div class="feature-box">
                            <strong>🎲 Casino & Mini-Jeux</strong>
                            <p>Blackjack avec gestion de croupier et as souples (<code>!blackjack</code>), Roulette classique (<code>!roulette</code>), Puissance 4 à deux joueurs (<code>!p4</code>), Roue de la fortune (<code>!roue</code>), Mendicité (<code>!beg</code>), et Boss multijoueur (<code>!navetboss</code>, <code>!navetattack</code>).</p>
                        </div>
                        <div class="feature-box">
                            <strong>🎵 Musique & Multimédia</strong>
                            <p>Streaming audio complet avec intégration Spotify et DisTube (<code>!play</code>, <code>!navetplay</code>), file d'attente (<code>!navetqueue</code>), contrôles (<code>!navetskip</code>, <code>!navetpause</code>, <code>!navetresume</code>, <code>!navetstop</code>).</p>
                        </div>
                        <div class="feature-box">
                            <strong>🛡️ Modération & Événements</strong>
                            <p>Purge de messages ciblée (<code>!navetpurge</code>), détection de mots interdits avec bannissement automatique (<code>!navetpurgerage</code>), système d'avertissements (<code>!navetwarn</code>), et roll de dés aléatoires (<code>!navetroll</code>, <code>!navetroll20</code>).</p>
                        </div>
                    </div>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-layer-group"></i> Stack Technique & APIs</h4>
                    <div class="tech-tags">
                        <span class="tech-badge">JavaScript (ES6+)</span>
                        <span class="tech-badge">Node.js</span>
                        <span class="tech-badge">Discord.js v14</span>
                        <span class="tech-badge">@discordjs/voice</span>
                        <span class="tech-badge">OpenAI API (ChatGPT)</span>
                        <span class="tech-badge">Twitch API & Webhook EventSub</span>
                        <span class="tech-badge">Twitch PubSub WebSocket</span>
                        <span class="tech-badge">gTTS / ElevenLabs Audio</span>
                        <span class="tech-badge">DisTube & Spotify API</span>
                        <span class="tech-badge">Persistance JSON</span>
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
            category: "SAE S3 CS & MMI • Laravel Backend (CS) & Frontend (MMI) • 36h Non-Stop",
            image: "assets/images/culture-jazz-site.png",
            images: [
                {
                    src: "assets/images/culture-jazz-site.png",
                    tag: "MMI Frontend",
                    caption: "Web Interface & Music Blog Mockup (designed and integrated by MMI students)"
                },
                {
                    src: "assets/images/culture-jazz-code.png",
                    tag: "CS Laravel Backend",
                    caption: "Backend Source Code — Laravel Controller & Eloquent ORM (Authentic project code, image generated for portfolio)"
                },
                {
                    src: "assets/images/culture-jazz-logo.png",
                    tag: "Visual Identity",
                    caption: "Culture Jazz Official Logo (MMI branding)"
                }
            ],
            description: `
                <p class="modal-intro"><strong>Culture Jazz</strong> is a music community blog web application designed and built in <strong>36 hours non-stop</strong> during the <strong>Web Marathon</strong> at IUT de Lens. The project was carried out as part of a <strong>SAE (Learning & Assessment Situation)</strong> in the 3<sup>rd</sup> semester of the <strong>Computer Science BUT and MMI BUT</strong>.</p>
                
                <div class="modal-section">
                    <h4><i class="fas fa-graduation-cap"></i> Project Context & 36h Marathon</h4>
                    <p>This project was developed within the framework of a <strong>Semester 3 SAE combining Computer Science and MMI departments</strong>.</p>
                    <p>The marathon had a unique, high-intensity setup: a <strong>36-hour sprint</strong> organized jointly by the CS and MMI departments of the IUT de Lens.</p>
                    <p>The goal was to engineer a <strong>music blog web application</strong> where users can publish and discover articles centered around an assigned music style: <strong>Jazz</strong>. Registered users can create, edit, and publish their own articles, while other members can like, comment, and follow their favorite authors.</p>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-bullseye"></i> Objectives & Roles</h4>
                    <ul>
                        <li><strong>Computer Science Students (our team):</strong> Responsible for developing the entire <strong>Laravel (PHP) back-end</strong> — data modeling, controllers, Eloquent queries, session & permission management, likes/comments system, and author subscriptions, implementing as many requested features as possible in 36 hours.</li>
                        <li><strong>MMI Students:</strong> Responsible for the <strong>visual identity and UI/UX mockups</strong>, as well as the <strong>frontend integration</strong> of all features matching the design system.</li>
                    </ul>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-newspaper"></i> Key Music Blog Features</h4>
                    <ul>
                        <li><strong>Article Creation & Publishing:</strong> Registered authors can draft, update, categorize by Jazz subgenres (Bebop, Swing, Cool Jazz...), and publish articles.</li>
                        <li><strong>Social Engagement:</strong> Real-time likes, interactive comment threads on every post, and author follow system.</li>
                        <li><strong>Content Discovery:</strong> Smooth pagination, featured latest publications, and sorting by popularity.</li>
                    </ul>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-images"></i> Project Gallery</h4>
                    <p>Browse the carousel on the left to inspect the frontend mockup (MMI), the backend Laravel code (CS), and the logo. <strong>Note:</strong> the backend source code screenshot displays the <em>authentic code developed in Laravel</em> during the event (image generated for the portfolio). <strong>Click on any image to view it in full-screen (HD zoom)</strong>.</p>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-laptop-code"></i> Technologies & Skills</h4>
                    <div class="tech-tags">
                        <span class="tech-badge">Laravel (PHP)</span>
                        <span class="tech-badge">MVC Architecture</span>
                        <span class="tech-badge">Eloquent ORM & MySQL</span>
                        <span class="tech-badge">SAE S3 (IUT de Lens)</span>
                        <span class="tech-badge">Frontend UI/UX (MMI)</span>
                        <span class="tech-badge">36h Non-Stop Marathon</span>
                        <span class="tech-badge">Cross-Department Collaboration</span>
                    </div>
                </div>
            `,
            link: null,
            linkText: null
        },
        2: {
            title: "JS Discord Bot (Navet-Chan)",
            category: "JavaScript & Node.js • Discord.js • ChatGPT & Twitch API • TTS",
            image: "assets/images/navet-chan.png",
            images: [
                {
                    src: "assets/images/navet-chan.png",
                    tag: "Bot Overview",
                    caption: "Navet-Chan Discord Bot Interface & Profile"
                },
                {
                    src: "assets/images/navet-chan-code-voice.png",
                    tag: "Voice & AI Code",
                    caption: "Source Code — Twitch & ChatGPT Voice TTS Bridge (Authentic project code, image generated for portfolio)"
                },
                {
                    src: "assets/images/navet-chan-code-p4.png",
                    tag: "Game Engine Code",
                    caption: "Source Code — Connect 4 Engine & Discord.js Buttons (Authentic project code, image generated for portfolio)"
                }
            ],
            description: `
                <p class="modal-intro"><strong>Navet-Chan</strong> is a dynamic multi-purpose Discord bot designed and developed in <strong>JavaScript (Node.js)</strong>. It integrates a live Twitch EventSub & PubSub bridge, text-to-speech voice answers powered by the OpenAI API (ChatGPT), a persistent JSON economy with inventory, and a multiplayer mini-game engine utilizing modern Discord interaction components.</p>
                
                <div class="modal-section">
                    <h4><i class="fas fa-code"></i> Real Source Code Snippets & Architecture</h4>
                    <p>Key functional modules extracted directly from the bot's production codebase:</p>

                    <div class="code-card">
                        <div class="code-card-header">
                            <div class="code-dots">
                                <span class="code-dot red"></span>
                                <span class="code-dot yellow"></span>
                                <span class="code-dot green"></span>
                            </div>
                            <span class="code-title"><i class="fas fa-microphone-alt"></i> twitch-voice-chatgpt.js</span>
                            <span class="code-lang">JavaScript</span>
                        </div>
                        <pre class="code-pre"><code><span class="c-comment">// Twitch EventSub / PubSub -> OpenAI ChatGPT -> Discord Voice (TTS)</span>
<span class="c-keyword">async function</span> <span class="c-func">handleTwitchTTS</span>(messageText, twitchUsername) {
    <span class="c-keyword">const</span> guild = <span class="c-keyword">await</span> client.guilds.<span class="c-func">fetch</span>(DISCORD_GUILD_ID);
    <span class="c-keyword">const</span> channel = guild.channels.cache.<span class="c-func">get</span>(DISCORD_VOCAL_ID);
    <span class="c-keyword">if</span> (!channel || channel.type !== <span class="c-num">2</span>) <span class="c-keyword">return</span>; <span class="c-comment">// Active voice channel required</span>

    <span class="c-comment">// 1. Async OpenAI ChatGPT query (gpt-3.5-turbo model)</span>
    <span class="c-keyword">const</span> member = { user: { id: twitchUsername }, roles: { cache: <span class="c-keyword">new</span> <span class="c-func">Map</span>() } };
    <span class="c-keyword">const</span> gptResponse = <span class="c-keyword">await</span> <span class="c-func">getChatGPTResponseWithHistory</span>(messageText, member, channel.id);

    <span class="c-comment">// 2. Audio stream generation via Text-To-Speech (gTTS)</span>
    <span class="c-keyword">const</span> filePath = path.<span class="c-func">join</span>(__dirname, <span class="c-string">\`tts_\${Date.now()}.mp3\`</span>);
    <span class="c-keyword">const</span> tts = <span class="c-keyword">new</span> <span class="c-func">gTTS</span>(gptResponse, <span class="c-string">'fr'</span>);
    <span class="c-keyword">await new</span> <span class="c-func">Promise</span>((res, rej) => tts.<span class="c-func">save</span>(filePath, err => err ? rej(err) : res()));

    <span class="c-comment">// 3. Join Discord voice channel & stream audio resource</span>
    <span class="c-keyword">const</span> connection = <span class="c-func">joinVoiceChannel</span>({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });
    <span class="c-keyword">const</span> player = <span class="c-func">createAudioPlayer</span>();
    <span class="c-keyword">const</span> resource = <span class="c-func">createAudioResource</span>(filePath);
    player.<span class="c-func">play</span>(resource);
    connection.<span class="c-func">subscribe</span>(player);

    player.<span class="c-func">on</span>(AudioPlayerStatus.Idle, () => {
        fs.<span class="c-func">unlink</span>(filePath, () => {}); <span class="c-comment">// Clean temporary file</span>
        connection.<span class="c-func">destroy</span>();
    });
}</code></pre>
                    </div>

                    <div class="code-card">
                        <div class="code-card-header">
                            <div class="code-dots">
                                <span class="code-dot red"></span>
                                <span class="code-dot yellow"></span>
                                <span class="code-dot green"></span>
                            </div>
                            <span class="code-title"><i class="fas fa-gamepad"></i> puissance4-engine.js</span>
                            <span class="code-lang">JavaScript</span>
                        </div>
                        <pre class="code-pre"><code><span class="c-comment">// Connect 4 multiplayer engine with interactive Discord.js button rows</span>
<span class="c-keyword">async function</span> <span class="c-func">startGame</span>(message, user1, user2, bet, opponent, wallets) {
    <span class="c-keyword">const</span> ROWS = <span class="c-num">6</span>, COLS = <span class="c-num">7</span>;
    <span class="c-keyword">let</span> grid = Array.<span class="c-func">from</span>({ length: ROWS }, () => Array(COLS).<span class="c-func">fill</span>(<span class="c-string">"⚪"</span>));
    <span class="c-keyword">const</span> symbols = { [user1]: <span class="c-string">"🔴"</span>, [user2]: <span class="c-string">"🟡"</span> };
    <span class="c-keyword">let</span> turn = user1;

    <span class="c-keyword">function</span> <span class="c-func">dropPiece</span>(col, player) {
        <span class="c-keyword">for</span> (<span class="c-keyword">let</span> row = ROWS - <span class="c-num">1</span>; row >= <span class="c-num">0</span>; row--) {
            <span class="c-keyword">if</span> (grid[row][col] === <span class="c-string">"⚪"</span>) {
                grid[row][col] = symbols[player];
                <span class="c-keyword">return</span> row;
            }
        }
        <span class="c-keyword">return null</span>;
    }

    <span class="c-comment">// Win condition evaluation (rows, columns and diagonals)</span>
    <span class="c-keyword">function</span> <span class="c-func">checkWin</span>(player) {
        <span class="c-keyword">const</span> sym = symbols[player];
        <span class="c-keyword">for</span> (<span class="c-keyword">let</span> r = <span class="c-num">0</span>; r < ROWS; r++) {
            <span class="c-keyword">for</span> (<span class="c-keyword">let</span> c = <span class="c-num">0</span>; c <= COLS - <span class="c-num">4</span>; c++) {
                <span class="c-keyword">if</span> (grid[r][c] === sym && grid[r][c+<span class="c-num">1</span>] === sym &&
                    grid[r][c+<span class="c-num">2</span>] === sym && grid[r][c+<span class="c-num">3</span>] === sym) <span class="c-keyword">return true</span>;
            }
        }
        <span class="c-comment">/* [...] column & diagonal checks */</span>
        <span class="c-keyword">return false</span>;
    }

    <span class="c-comment">// Real-time message component collector on the 7 columns</span>
    <span class="c-keyword">const</span> collector = gameMessage.<span class="c-func">createMessageComponentCollector</span>({ time: <span class="c-num">600000</span> });
    collector.<span class="c-func">on</span>(<span class="c-string">'collect'</span>, <span class="c-keyword">async</span> (interaction) => {
        <span class="c-keyword">if</span> (interaction.user.id !== turn) {
            <span class="c-keyword">return</span> interaction.<span class="c-func">reply</span>({ content: <span class="c-string">"Not your turn!"</span>, ephemeral: <span class="c-keyword">true</span> });
        }
        <span class="c-keyword">const</span> col = parseInt(interaction.customId.<span class="c-func">split</span>(<span class="c-string">"_"</span>)[<span class="c-num">1</span>]);
        <span class="c-keyword">const</span> row = <span class="c-func">dropPiece</span>(col, turn);
        <span class="c-comment">// Update grid render, calculate winner and transfer turnip bets</span>
    });
}</code></pre>
                    </div>

                    <div class="code-card">
                        <div class="code-card-header">
                            <div class="code-dots">
                                <span class="code-dot red"></span>
                                <span class="code-dot yellow"></span>
                                <span class="code-dot green"></span>
                            </div>
                            <span class="code-title"><i class="fas fa-coins"></i> economy-wallet.js</span>
                            <span class="code-lang">JavaScript</span>
                        </div>
                        <pre class="code-pre"><code><span class="c-comment">// JSON wallet persistence & cooldown verification</span>
<span class="c-keyword">const</span> walletPath = path.<span class="c-func">join</span>(__dirname, <span class="c-string">'wallets.json'</span>);

<span class="c-keyword">function</span> <span class="c-func">loadWallets</span>() {
    <span class="c-keyword">if</span> (!fs.<span class="c-func">existsSync</span>(walletPath)) <span class="c-keyword">return</span> {};
    <span class="c-keyword">return</span> JSON.<span class="c-func">parse</span>(fs.<span class="c-func">readFileSync</span>(walletPath));
}

<span class="c-keyword">function</span> <span class="c-func">saveWallets</span>(wallets) {
    fs.<span class="c-func">writeFileSync</span>(walletPath, JSON.<span class="c-func">stringify</span>(wallets, <span class="c-keyword">null</span>, <span class="c-num">4</span>));
}

<span class="c-comment">// Hourly turnip claim command</span>
<span class="c-keyword">if</span> (message.content === <span class="c-string">'!navet'</span>) {
    <span class="c-keyword">const</span> wallets = <span class="c-func">loadWallets</span>();
    <span class="c-keyword">const</span> userId = message.author.id;
    <span class="c-keyword">const</span> now = Date.<span class="c-func">now</span>();
    <span class="c-keyword">const</span> cooldown = <span class="c-num">1000</span> * <span class="c-num">60</span> * <span class="c-num">60</span>; <span class="c-comment">// 1 hour</span>

    <span class="c-keyword">if</span> (now - (wallets[userId]?.lastClaim || <span class="c-num">0</span>) < cooldown) {
        <span class="c-keyword">const</span> remaining = Math.<span class="c-func">floor</span>((cooldown - (now - wallets[userId].lastClaim)) / <span class="c-num">60000</span>);
        <span class="c-keyword">return</span> message.<span class="c-func">reply</span>(<span class="c-string">\`You already claimed your turnips! Come back in \${remaining}min.\`</span>);
    }

    wallets[userId].balance = (wallets[userId].balance || <span class="c-num">0</span>) + <span class="c-num">100</span>;
    wallets[userId].lastClaim = now;
    <span class="c-func">saveWallets</span>(wallets);
}</code></pre>
                    </div>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-images"></i> Code Gallery & Zoom</h4>
                    <p>The carousel on the left displays the bot profile and high-definition screenshots of the source code (Voice AI & Connect 4 engine). <strong>Note:</strong> the code screenshots feature the <em>authentic bot source code</em> (images generated for the portfolio). <strong>Click on any image to view it in full-screen (HD zoom)</strong>.</p>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-terminal"></i> Command Ecosystem</h4>
                    <div class="features-grid">
                        <div class="feature-box">
                            <strong>💰 Economy & Inventory</strong>
                            <p>"Turnip" currency with cooldown (<code>!navet</code>), wallet (<code>!wallet</code>), shops (<code>!shop</code>, <code>!sellshop</code>, <code>!buy</code>, <code>!sell</code>), gifts (<code>!give</code>), steal with probabilities (<code>!navetsteal</code>), and leaderboard (<code>!top</code>).</p>
                        </div>
                        <div class="feature-box">
                            <strong>🎲 Casino & Mini-Games</strong>
                            <p>Blackjack with soft aces dealer algorithm (<code>!blackjack</code>), Classic roulette (<code>!roulette</code>), Connect 4 for two players (<code>!p4</code>), Wheel of fortune (<code>!roue</code>), Begging (<code>!beg</code>), and Boss battles (<code>!navetboss</code>, <code>!navetattack</code>).</p>
                        </div>
                        <div class="feature-box">
                            <strong>🎵 Music & Media</strong>
                            <p>Full audio streaming with Spotify & DisTube (<code>!play</code>, <code>!navetplay</code>), queue management (<code>!navetqueue</code>), player controls (<code>!navetskip</code>, <code>!navetpause</code>, <code>!navetresume</code>, <code>!navetstop</code>).</p>
                        </div>
                        <div class="feature-box">
                            <strong>🛡️ Moderation & Events</strong>
                            <p>Targeted message purge (<code>!navetpurge</code>), automated forbidden word detection with ban (<code>!navetpurgerage</code>), warning system (<code>!navetwarn</code>), and random dice rolls (<code>!navetroll</code>, <code>!navetroll20</code>).</p>
                        </div>
                    </div>
                </div>

                <div class="modal-section">
                    <h4><i class="fas fa-layer-group"></i> Technical Stack & APIs</h4>
                    <div class="tech-tags">
                        <span class="tech-badge">JavaScript (ES6+)</span>
                        <span class="tech-badge">Node.js</span>
                        <span class="tech-badge">Discord.js v14</span>
                        <span class="tech-badge">@discordjs/voice</span>
                        <span class="tech-badge">OpenAI API (ChatGPT)</span>
                        <span class="tech-badge">Twitch API & Webhook EventSub</span>
                        <span class="tech-badge">Twitch PubSub WebSocket</span>
                        <span class="tech-badge">gTTS / ElevenLabs Audio</span>
                        <span class="tech-badge">DisTube & Spotify API</span>
                        <span class="tech-badge">JSON Persistence</span>
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

        const carouselCaption = document.getElementById('carousel-caption');
        if (carouselCaption) {
            if (slideItems && slideItems[currentSlide] && slideItems[currentSlide].caption) {
                carouselCaption.textContent = slideItems[currentSlide].caption;
                carouselCaption.style.display = "block";
            } else {
                carouselCaption.style.display = "none";
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
