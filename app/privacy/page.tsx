export const metadata = {
  title: 'Privacy e cookie — Gemma Antuzzi',
  description: 'Informativa sul trattamento dei dati e sull’uso dei cookie nel portfolio di Gemma Antuzzi.',
};

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function PrivacyPage() {
  return (
    <>
      <header className="site-header privacy-header">
        <a className="wordmark" href={`${publicBasePath}/`} aria-label="Torna al portfolio di Gemma Antuzzi">
          Gemma Antuzzi
        </a>
        <nav aria-label="Navigazione informativa">
          <a href={`${publicBasePath}/#cv`}>CV</a>
          <a href={`${publicBasePath}/#work`}>Work</a>
          <a href={`${publicBasePath}/#contact`}>Contatti</a>
        </nav>
      </header>

      <main className="privacy-page">
        <div className="privacy-intro">
          <p className="eyebrow">Informativa</p>
          <h1>Privacy<br />e cookie.</h1>
          <p className="privacy-updated">Ultimo aggiornamento: 26 settembre 2026</p>
        </div>

        <div className="privacy-content">
          <section>
            <h2>Titolare del trattamento</h2>
            <p>
              Il sito è il portfolio personale e professionale di Gemma Antuzzi. Per richieste relative
              alla privacy puoi scrivere a{' '}
              <a href="mailto:gemmaantuzzi@gmail.com">gemmaantuzzi@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2>Dati di navigazione e hosting</h2>
            <p>
              Il sito è pubblicato tramite GitHub Pages. Durante la normale navigazione il fornitore
              dell’hosting può trattare dati tecnici, come indirizzo IP, data e ora della richiesta,
              pagina visitata e informazioni sul dispositivo o sul browser, per distribuire e proteggere
              il servizio.
            </p>
            <p>
              Per maggiori informazioni consulta la{' '}
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">
                Privacy Statement di GitHub <span className="text-arrow" aria-hidden="true">↗︎</span>
              </a>.
            </p>
          </section>

          <section>
            <h2>Cookie e strumenti di tracciamento</h2>
            <p>
              Questo portfolio non utilizza strumenti di analisi, cookie pubblicitari, sistemi di
              profilazione o pixel di tracciamento. Non vengono installati cookie direttamente da Gemma
              Antuzzi. Eventuali tecnologie strettamente necessarie al funzionamento e alla sicurezza
              dell’hosting sono gestite da GitHub.
            </p>
          </section>

          <section>
            <h2>Collegamenti esterni</h2>
            <p>
              Il sito contiene semplici collegamenti a servizi esterni, tra cui YouTube, Vimeo, LinkedIn,
              Instagram e Artribune. Nessun contenuto di queste piattaforme viene incorporato o caricato
              automaticamente. Aprendo un collegamento si lascia questo sito e si applicano le informative
              del servizio raggiunto.
            </p>
          </section>

          <section>
            <h2>Contatti</h2>
            <p>
              Se scegli di scrivere tramite e-mail, i dati che comunichi vengono utilizzati esclusivamente
              per leggere e rispondere al messaggio e vengono conservati per il tempo necessario a gestire
              la richiesta.
            </p>
          </section>

          <section>
            <h2>I tuoi diritti</h2>
            <p>
              Puoi chiedere informazioni sui tuoi dati, la rettifica o la cancellazione dei dati forniti
              volontariamente scrivendo all’indirizzo indicato sopra.
            </p>
          </section>
        </div>
      </main>

      <footer>
        <p>Gemma Antuzzi © 2026</p>
        <div className="footer-links">
          <a href={`${publicBasePath}/`}>Torna al portfolio <span className="text-arrow" aria-hidden="true">↖︎</span></a>
        </div>
      </footer>
    </>
  );
}
