const projects = [
  {
    number: '01',
    title: 'Prompt: Melting',
    year: '2025',
    fields: 'IA · video · flipbook · installazione',
    description:
      'Un video generato a partire da fotografie dell’artista viene degradato e trasformato in una sequenza bicromatica. Il lavoro passa dallo schermo a due dispositivi fisici: una proiezione su carta e un flipbook che rende la visione manuale, rapida e instabile.',
    image: '/images/prompt-installazione.png',
    alt: 'Documentazione dell’installazione Prompt: Melting',
    tone: 'dark',
  },
  {
    number: '02',
    title: 'BratGreen',
    year: '2024',
    fields: 'Ambiente digitale · animazione 2D · interazione',
    description:
      'Illustrazione interattiva in HTML composta da quattro gatti animati frame by frame. Il clic su ogni personaggio attiva movimento e musica: senza la presenza dell’utente la composizione resta statica e incompleta.',
    image: '/images/bratgreen-animation.jpg',
    alt: 'Frame di animazione dei personaggi di BratGreen',
    tone: 'green',
  },
  {
    number: '03',
    title: 'Di Passaggio',
    year: 'In sviluppo',
    fields: 'Installazione interattiva · elettronica · spazio',
    description:
      'Un sistema di LED e materiali riflettenti rileva la presenza umana e la traduce in una risposta luminosa. Lo spettatore entra così nel funzionamento dell’opera e rende visibile il proprio passaggio nello spazio.',
    tone: 'silver',
  },
  {
    number: '04',
    title: 'Negligenza a circuito chiuso',
    year: 'Ricerca editoriale',
    fields: 'Google Street View · found imagery · libro d’artista',
    description:
      'Una ricerca dentro Google Street View raccoglie anomalie e incoerenze dell’anonimizzazione. Le immagini diventano un libro di frammenti che il lettore deve ricomporre, interrogando il confine tra mappatura, sorveglianza ed esposizione.',
    tone: 'paper',
  },
  {
    number: '05',
    title: 'In Palestra',
    year: '2025',
    fields: 'Interviste · video · social media · documentazione',
    description:
      'Progetto in collaborazione tra Museo Novecento e Accademia di Belle Arti di Firenze. Cura dei contenuti social, interviste agli artisti e documentazione del processo espositivo attraverso video, documentario e meta-documentario.',
    tone: 'blue',
  },
  {
    number: '06',
    title: 'Interferenze Elettriche',
    year: '2025–2026',
    fields: 'Comunicazione · interviste · social media management',
    description:
      'Supporto alla produzione, alla documentazione e alla comunicazione del progetto. Nella seconda edizione, il lavoro comprende anche la presentazione dell’installazione Prompt: Melting.',
    tone: 'red',
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
  'Toon Boom Harmony',
  'Procreate',
  'Resolume Arena',
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
          <a href="#work">Work</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contatti</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Portfolio / CV · 2026</p>
        <h1 id="hero-title">
          Visual &amp;<br />Multimedia Designer
        </h1>
        <p className="intro">
          Progetto immagini, video e contenuti digitali tra comunicazione,
          animazione e sperimentazione con le tecnologie contemporanee.
        </p>
        <a className="scroll-link" href="#work">Scopri i lavori ↓</a>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">01 — Selected Work</p>
          <h2 id="work-title">Lavori selezionati</h2>
          <p>Progetti artistici, digitali e culturali raccontati attraverso processo, ruolo e strumenti.</p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className={`project project-${project.tone}`} key={project.number}>
              <div className="project-visual">
                {project.image ? (
                  <img src={project.image} alt={project.alt} />
                ) : (
                  <div className="project-number" aria-hidden="true">{project.number}</div>
                )}
              </div>
              <div className="project-copy">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-fields">{project.fields}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cv-section" id="cv" aria-labelledby="cv-title">
        <div className="section-heading cv-heading">
          <p className="eyebrow">02 — CV</p>
          <h2 id="cv-title">Esperienza, formazione<br />e competenze.</h2>
          <a className="download-link" href="/files/gemma-antuzzi-cv.pdf" download>
            Scarica il CV PDF ↘
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
            <div className="cv-entry">
              <h4>Jonas Blue</h4>
              <p>Graphic design e visual content per produzione musicale.</p>
            </div>
          </div>

          <div className="cv-block">
            <h3>Formazione</h3>
            <div className="cv-entry split-entry"><span>2022–2027</span><div><h4>Accademia di Belle Arti di Firenze</h4><p>Nuove Tecnologie dell’Arte; 2026–2027 dedicato alla tesi.</p></div></div>
            <div className="cv-entry split-entry"><span>2022–2026</span><div><h4>Nemo Academy</h4><p>Corso di Cinema d’animazione.</p></div></div>
            <div className="cv-entry split-entry"><span>2017–2022</span><div><h4>Liceo Artistico, Montevarchi</h4><p>Indirizzo audiovisivo-multimediale.</p></div></div>
            <div className="cv-entry split-entry"><span>Anno da inserire</span><div><h4>Movimenti Digitali, Prato</h4><p>Corsi base e avanzato di stop motion; esperienza formativa con Monica Fibbi e Stefano Argentero.</p></div></div>
          </div>

          <div className="cv-block">
            <h3>Competenze</h3>
            <ul className="plain-list">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>

          <div className="cv-block">
            <h3>Software <span className="editable">facilmente modificabile</span></h3>
            <ul className="tag-list">
              {software.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="cv-block cv-languages">
            <h3>Lingue</h3>
            <div><span>Italiano</span><strong>Madrelingua</strong></div>
            <div><span>Inglese</span><strong>B2 — certificato</strong></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">03 — Contatti</p>
        <h2 id="contact-title">Parliamone.</h2>
        <div className="contact-grid">
          <p>Disponibile per collaborazioni, progetti culturali e opportunità in ambito visual, video e comunicazione digitale.</p>
          <div className="contact-links">
            <a href="mailto:gemmaantuzzi@gmail.com">gemmaantuzzi@gmail.com ↗</a>
            <span>Firenze / Toscana</span>
            <span className="pending-link">LinkedIn / Instagram — da inserire</span>
          </div>
        </div>
      </section>

      <footer>
        <p>Gemma Antuzzi © 2026</p>
        <a href="#top">Torna su ↑</a>
      </footer>
    </main>
  );
}
