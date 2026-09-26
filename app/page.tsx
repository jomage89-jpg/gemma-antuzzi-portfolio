const projects = [
  {
    title: 'Prompt: Melting',
    fields: 'IA · video · flipbook · installazione',
    description:
      'Un video generato a partire da fotografie dell’artista viene degradato e trasformato in una sequenza bicromatica. Il lavoro passa dallo schermo a due dispositivi fisici: una proiezione su carta e un flipbook che rende la visione manuale, rapida e instabile.',
    media: '/media/prompt-melting.mp4',
    tone: 'dark',
  },
  {
    title: 'BratGreen',
    fields: 'Ambiente digitale · animazione 2D · interazione',
    description:
      'Illustrazione interattiva in HTML composta da quattro gatti animati frame by frame. Il clic su ogni personaggio attiva movimento e musica: senza la presenza dell’utente la composizione resta statica e incompleta.',
    media: '/media/bratgreen.mp4',
    tone: 'green',
  },
  {
    title: 'Di Passaggio',
    fields: 'Installazione interattiva · elettronica · spazio',
    description:
      'Un sistema di LED e materiali riflettenti rileva la presenza umana e la traduce in una risposta luminosa. Lo spettatore entra così nel funzionamento dell’opera e rende visibile il proprio passaggio nello spazio.',
    media: '/media/di-passaggio.mp4',
    tone: 'metal',
  },
  {
    title: 'Negligenza a circuito chiuso',
    fields: 'Google Street View · found imagery · libro d’artista',
    description:
      'Una ricerca dentro Google Street View raccoglie anomalie e incoerenze dell’anonimizzazione. Le immagini diventano un libro di frammenti che il lettore deve ricomporre, interrogando il confine tra mappatura, sorveglianza ed esposizione.',
    media: '/media/negligenza.mp4',
    tone: 'paper',
  },
];

const skills = [
  'Video editing e post-produzione',
  'Graphic design e visual content',
  'Animazione 2D e motion graphics',
  'Social media content',
  'Interviste e documentazione',
  'Progettazione multimediale',
  'Strumenti di IA e sperimentazione digitale',
];

// Questo elenco è volutamente semplice da modificare quando Gemma vorrà aggiornarlo.
const software = [
  'After Effects',
  'Premiere Pro',
  'Photoshop',
  'Illustrator',
  'Figma',
  'Toon Boom Harmony',
  'Procreate',
  'Tumult Hype',
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Gemma Antuzzi — home">
          Gemma Antuzzi
        </a>
        <nav aria-label="Navigazione principale">
          <a href="#cv">CV</a>
          <a href="#work">Work</a>
          <a href="#contact">Contatti</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Portfolio / CV · 2026 · Work in progress</p>
        <div className="hero-name-lockup">
          <h1 id="hero-title">
            Gemma<br />Antuzzi
          </h1>
        </div>
        <p className="hero-role">
          <span className="doodle-underline-target">
            Visual &amp; Multimedia Designer
            <span className="doodle-crop doodle-underline" aria-hidden="true">
              <img src="/doodles/underline.png" alt="" />
            </span>
          </span>
        </p>
        <p className="intro">
          Progetto immagini, video e contenuti digitali tra comunicazione,
          animazione e sperimentazione con le tecnologie contemporanee.
        </p>
        <span className="doodle-crop doodle-hero-corner" aria-hidden="true">
          <img src="/doodles/name-frame.png" alt="" />
        </span>
      </section>

      <section className="cv-section" id="cv" aria-labelledby="cv-title">
        <div className="section-heading cv-heading">
          <p className="eyebrow">CV</p>
          <div className="cv-title-lockup">
            <span className="doodle-crop doodle-cv-line" aria-hidden="true">
              <img src="/doodles/cv-line.png" alt="" />
            </span>
            <h2 id="cv-title">Esperienza, formazione<br />e competenze.</h2>
          </div>
          <a className="download-link" href="/files/gemma-antuzzi-cv.pdf" download>
            Scarica il CV PDF <span className="text-arrow" aria-hidden="true">↘︎</span>
          </a>
        </div>

        <div className="cv-grid">
          <div className="cv-block cv-profile">
            <h3>Profilo</h3>
            <p>
              Profilo creativo con formazione in nuove tecnologie dell’arte e animazione.
              Sviluppo contenuti visivi, video e progetti digitali, dall’ideazione alla
              post-produzione, con esperienze in comunicazione culturale, interviste e social media.
            </p>
          </div>

          <div className="cv-block">
            <h3>Esperienze professionali</h3>
            <div className="cv-entry">
              <h4>Jack Neel</h4>
              <p>Video editing per YouTube e contenuti animati per social media.</p>
            </div>
            <a
              className="cv-entry linked-entry"
              href="https://youtu.be/1dn-WBYAbF4?si=_dB-rCzujlbjtdvW"
              target="_blank"
              rel="noreferrer"
            >
              <h4>Jonas Blue</h4>
              <p>Grafiche per Jonas Blue, Why Don’t We — Don’t Wake Me Up (Lyric Video).</p>
              <span className="entry-link">Guarda il lyric video <span className="text-arrow" aria-hidden="true">↗︎</span></span>
            </a>
          </div>

          <div className="cv-block">
            <h3>Formazione</h3>
            <div className="cv-entry split-entry"><span>2022–2027</span><div><h4>Accademia di Belle Arti di Firenze</h4><p>Nuove Tecnologie dell’Arte; 2026–2027 dedicato alla tesi.</p></div></div>
            <a
              className="cv-entry split-entry linked-entry"
              href="https://vimeo.com/1230265176?fl=pl&fe=sh"
              target="_blank"
              rel="noreferrer"
            >
              <span>2022–2026</span>
              <div>
                <h4>Nemo Academy</h4>
                <p>Corso di Cinema d’animazione · valutazione finale 29/30.</p>
                <span className="entry-link">Guarda l’animation reel <span className="text-arrow" aria-hidden="true">↗︎</span></span>
              </div>
            </a>
            <div className="cv-entry split-entry"><span>2017–2022</span><div><h4>ISIS Benedetto Varchi, Montevarchi</h4><p>Liceo Artistico, indirizzo audiovisivo-multimediale · diploma 90/100.</p></div></div>
            <div className="cv-entry split-entry"><span>Luglio 2026</span><div><h4>Movimenti Digitali, Prato</h4><p>Corsi base e avanzato di stop motion; esperienza formativa con Monica Fibbi e Stefano Argentero.</p></div></div>
          </div>

          <div className="cv-block">
            <h3>Progetti culturali</h3>
            <a
              className="cv-entry linked-entry"
              href="https://www.youtube.com/live/xHDToyUlvmA?si=cuGwTwY2IwA52s3I&t=3824s"
              target="_blank"
              rel="noreferrer"
            >
              <h4>IMPALESTRA tra Museo e Accademia</h4>
              <p>Interviste, documentazione, social media, documentario e meta-documentario. Il progetto è stato presentato a Expo 2025 Osaka e a Lo schermo dell’arte di Firenze.</p>
              <span className="entry-link">Guarda il progetto a Expo 2025 Osaka <span className="text-arrow" aria-hidden="true">↗︎</span></span>
            </a>
            <a
              className="cv-entry linked-entry"
              href="https://www.artribune.com/mostre-evento-arte/interferenze-elettriche/"
              target="_blank"
              rel="noreferrer"
            >
              <h4>Interferenze Elettriche</h4>
              <p>Comunicazione, interviste e social media management; presentazione di Prompt: Melting nella seconda edizione.</p>
              <span className="entry-link">Leggi l’articolo su Artribune <span className="text-arrow" aria-hidden="true">↗︎</span></span>
            </a>
          </div>

          <div className="cv-block">
            <h3>Competenze</h3>
            <ul className="plain-list">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>

          <div className="cv-block">
            <h3>Software</h3>
            <p className="software-note">Conoscenza operativa generale della Adobe Creative Cloud.</p>
            <ul className="tag-list">
              {software.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="cv-block cv-languages">
            <h3>Lingue</h3>
            <div><span>Italiano</span><strong>Madrelingua</strong></div>
            <div><span>Inglese</span><strong>B2 Cambridge — certificato</strong></div>
          </div>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <div className="work-title-lockup">
            <h2 id="work-title">
              <span className="doodle-underline-target">
                Lavori selezionati
                <span className="doodle-crop doodle-underline" aria-hidden="true">
                  <img src="/doodles/underline.png" alt="" />
                </span>
              </span>
            </h2>
            <span className="doodle-crop doodle-stars" aria-hidden="true">
              <img src="/doodles/stars.png" alt="" />
            </span>
          </div>
        </div>

        <div className="work-progress">
          <span>Archivio in evoluzione</span>
          <p>Nuovi progetti e materiali verranno aggiunti nel tempo.</p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article
              className={`project project-${project.tone}`}
              key={project.title}
              tabIndex={0}
              aria-label={`${project.title}. ${project.fields}. ${project.description}`}
            >
              <video
                className="project-media"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                tabIndex={-1}
              >
                <source src={project.media} type="video/mp4" />
              </video>
              <div className="project-summary">
                <h3>{project.title}</h3>
                <p className="project-fields">{project.fields}</p>
              </div>
              <p className="project-description">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">Contatti</p>
        <div className="contact-title-lockup">
          <h2 id="contact-title">
            <span className="doodle-underline-target">
              Contatti.
              <span className="doodle-crop doodle-underline" aria-hidden="true">
                <img src="/doodles/underline.png" alt="" />
              </span>
            </span>
          </h2>
          <span className="doodle-crop doodle-contact-arrow" aria-hidden="true">
            <img src="/doodles/contact-arrow.png" alt="" />
          </span>
        </div>
        <div className="contact-grid">
          <p>Disponibile per collaborazioni, progetti culturali e opportunità in ambito visual, video e comunicazione digitale.</p>
          <div className="contact-links">
            <a className="contact-primary" href="mailto:gemmaantuzzi@gmail.com">gemmaantuzzi@gmail.com <span className="text-arrow" aria-hidden="true">↗︎</span></a>
            <span>Valdarno / Toscana</span>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/gemma-antuzzi-71831925a" target="_blank" rel="noreferrer">LinkedIn — Gemma Antuzzi <span className="text-arrow" aria-hidden="true">↗︎</span></a>
              <a href="https://www.instagram.com/gemntz?stkn=MTZiNTVhenl1eGdzMQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">Instagram — @gemntz <span className="text-arrow" aria-hidden="true">↗︎</span></a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Gemma Antuzzi © 2026</p>
        <a href="#top">Torna su <span className="text-arrow" aria-hidden="true">↑︎</span></a>
      </footer>
    </main>
  );
}
