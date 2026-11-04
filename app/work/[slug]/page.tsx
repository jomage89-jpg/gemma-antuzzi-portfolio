import Link from 'next/link';

const projects = {
  'prompt-melting': {
    number: '01',
    title: 'Prompt: Melting',
    category: 'IA · video · flipbook · installazione',
    intro: 'Un lavoro che mette in relazione immagine generata, fotografia e trasformazione del supporto.',
    description: [
      'Il progetto parte da fotografie dell’artista, utilizzate come materia di partenza per la generazione di un video. Le immagini vengono progressivamente degradate e ricondotte a una sequenza bicromatica.',
      'La visione si sposta dallo schermo a una dimensione fisica attraverso una proiezione su carta e un flipbook: due modalità differenti di incontrare la stessa immagine in trasformazione.',
    ],
    media: [{ type: 'image', src: '/images/prompt-installazione.png', alt: 'Installazione di Prompt: Melting' }, { type: 'image', src: '/images/prompt-volto.png', alt: 'Immagine dal progetto Prompt: Melting' }, { type: 'video', src: '/media/prompt-melting.mp4', alt: 'Video di Prompt: Melting' }],
    details: [['Tecniche e linguaggi', 'Intelligenza artificiale, video, fotografia, stampa e libro d’artista'], ['Formati', 'Video, proiezione su carta e flipbook']],
  },
  'bratgreen': {
    number: '02',
    title: 'BratGreen',
    category: 'Ambiente digitale · animazione 2D · interazione',
    intro: 'Un ambiente digitale animato in cui il movimento si attiva attraverso il gesto dell’utente.',
    description: [
      'BratGreen è un’illustrazione interattiva in HTML composta da quattro gatti animati frame by frame.',
      'Il clic su ogni personaggio attiva il movimento e la musica. In assenza dell’intervento dell’utente, la composizione resta statica e incompleta: l’interazione diventa parte del lavoro.',
    ],
    media: [{ type: 'image', src: '/images/bratgreen-animation.jpg', alt: 'Animazione BratGreen' }, { type: 'video', src: '/media/bratgreen.mp4', alt: 'Video di BratGreen' }],
    details: [['Tecniche e linguaggi', 'Animazione 2D frame by frame e HTML'], ['Interazione', 'Il clic attiva il movimento e la musica dei personaggi']],
  },
  'di-passaggio': {
    number: '03',
    title: 'Di Passaggio',
    category: 'Installazione interattiva · elettronica · spazio',
    intro: 'Un’installazione che traduce la presenza umana in una risposta luminosa.',
    description: [
      'Il lavoro utilizza LED e materiali riflettenti per costruire una relazione tra corpo e spazio.',
      'La presenza delle persone attiva una risposta del sistema luminoso: il passaggio dello spettatore entra così nel funzionamento dell’installazione e ne modifica l’esperienza.',
    ],
    media: [{ type: 'video', src: '/media/di-passaggio.mp4', alt: 'Documentazione video di Di Passaggio' }],
    details: [['Tecniche e linguaggi', 'Elettronica, LED e materiali riflettenti'], ['Interazione', 'La presenza umana attiva una risposta luminosa']],
  },
  'negligenza-a-circuito-chiuso': {
    number: '04',
    title: 'Negligenza a circuito chiuso',
    category: 'Google Street View · found imagery · libro d’artista',
    intro: 'Una raccolta di anomalie visive che mette in discussione l’idea di uno sguardo automatico e neutrale.',
    description: [
      'La ricerca si sviluppa attraverso Google Street View e la raccolta di anomalie legate ai processi di anonimizzazione delle immagini.',
      'I frammenti vengono riuniti in un libro d’artista. La lettura richiede di ricomporre le immagini e osservare ciò che normalmente resta ai margini della mappatura.',
    ],
    media: [{ type: 'video', src: '/media/negligenza.mp4', alt: 'Documentazione di Negligenza a circuito chiuso' }],
    details: [['Tecniche e linguaggi', 'Google Street View, found imagery e libro d’artista'], ['Formato', 'Libro di frammenti']],
  },
} as const;

type ProjectSlug = keyof typeof projects;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in projects)) return null;
  const project = projects[slug as ProjectSlug];
  const currentIndex = Object.keys(projects).indexOf(slug);
  const slugs = Object.keys(projects) as ProjectSlug[];
  const previous = currentIndex > 0 ? slugs[currentIndex - 1] : null;
  const next = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;

  return (
    <main className="project-detail-page">
      <header className="site-header">
        <Link className="wordmark" href={`/`}>Gemma Antuzzi</Link>
        <nav aria-label="Navigazione principale">
          <Link href={`/#work`}>Selected Work</Link>
          <Link href={`/#cv`}>CV</Link>
          <Link href={`/#contact`}>Contatti</Link>
        </nav>
      </header>

      <section className="detail-hero">
        <Link className="back-link" href={`/#work`}>← Torna ai lavori selezionati</Link>
        <p className="eyebrow">Selected Work / {project.number}</p>
        <h1>{project.title}</h1>
        <p className="detail-category">{project.category}</p>
        <p className="detail-intro">{project.intro}</p>
      </section>

      <section className="detail-content" aria-label={`Dettagli di ${project.title}`}>
        <div className="detail-description">
          <p className="eyebrow">Il progetto</p>
          <div>{project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
        <div className="detail-facts">
          {project.details.map(([label, value]) => <div key={label}><span>{label}</span><p>{value}</p></div>)}
        </div>
      </section>

      <section className="detail-gallery" aria-label={`Materiali visivi di ${project.title}`}>
        {project.media.map((item) => item.type === 'video' ? (
          <video key={item.src} controls playsInline preload="metadata" aria-label={item.alt}>
            <source src={`${basePath}${item.src}`} type="video/mp4" />
          </video>
        ) : (
          <figure key={item.src}><img src={`${basePath}${item.src}`} alt={item.alt} /></figure>
        ))}
      </section>

      <nav className="detail-pagination" aria-label="Navigazione tra progetti">
        {previous ? <Link href={`/work/${previous}/`}>← {projects[previous].title}</Link> : <span />}
        {next ? <Link href={`/work/${next}/`}>{projects[next].title} →</Link> : <Link href={`/#work`}>Tutti i progetti ↗</Link>}
      </nav>
      <footer><p>Gemma Antuzzi © 2026</p><Link href={`/#top`}>Torna alla home ↑</Link></footer>
    </main>
  );
}
