function Hero({ event, stats }) {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="hero-label">Undangan Digital</p>
        <h1>{event.title}</h1>
        <p className="hero-subtitle">{event.subtitle}</p>
        <div className="hero-meta">
          <div>
            <strong>{event.date}</strong>
            <span>{event.time}</span>
          </div>
          <div>
            <strong>Lokasi</strong>
            <span>{event.location.name}</span>
          </div>
        </div>
        <p className="hero-note">{event.note}</p>
      </div>

      <div className="hero-card">
        <div className="hero-card-body">
          <h2>RSVP</h2>
          <p>{event.rsvpPrompt}</p>
          <div className="hero-stats">
            <div>
              <span>{stats.yes}</span>
              <small>Hadir</small>
            </div>
            <div>
              <span>{stats.no}</span>
              <small>Tidak hadir</small>
            </div>
          </div>
          <a href="#rsvp" className="hero-button">
            Konfirmasi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
