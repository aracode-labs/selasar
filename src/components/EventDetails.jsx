function EventDetails({ event }) {
  return (
    <section className="event-details">
      <div className="detail-card">
        <h2>Tentang Acara</h2>
        <p>{event.description}</p>
      </div>

      <div className="detail-grid">
        <div className="detail-card soft-card">
          <h3>Rundown</h3>
          <ul>
            {event.schedule.map((item) => (
              <li key={item.time}>
                <strong>{item.time}</strong>
                <span>{item.activity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-card soft-card">
          <h3>Detail</h3>
          <dl>
            <div>
              <dt>Lokasi</dt>
              <dd>{event.location.name}</dd>
            </div>
            <div>
              <dt>Alamat</dt>
              <dd>{event.location.address}</dd>
            </div>
            <div>
              <dt>Dress Code</dt>
              <dd>{event.dressCode}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="detail-card map-card">
        <h3>Petunjuk Lokasi</h3>
        <p>{event.location.description}</p>
        <a href={event.location.mapUrl} target="_blank" rel="noreferrer">
          Buka di Google Maps
        </a>
      </div>
    </section>
  );
}

export default EventDetails;
