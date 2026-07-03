import { useState } from 'react';
import { submitRsvp } from '../lib/supabaseClient.js';

function RsvpForm({ event, onSubmitSuccess }) {
  const [form, setForm] = useState({ name: '', guests: 1, willAttend: 'yes', message: '' });
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const handleChange = (field) => (event) => {
    const value = field === 'guests' ? Number(event.target.value) : event.target.value;
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (eventSubmit) => {
    eventSubmit.preventDefault();
    setStatus({ loading: true, success: '', error: '' });

    const payload = {
      name: form.name.trim(),
      guests: form.guests,
      will_attend: form.willAttend === 'yes',
      message: form.message.trim(),
    };

    if (!payload.name) {
      setStatus({ loading: false, success: '', error: 'Nama harus diisi.' });
      return;
    }

    const { error } = await submitRsvp(payload);
    if (error) {
      setStatus({ loading: false, success: '', error: error.message || 'Gagal mengirim RSVP.' });
      return;
    }

    setStatus({ loading: false, success: 'Terima kasih! Konfirmasi kamu sudah terkirim.', error: '' });
    setForm({ name: '', guests: 1, willAttend: 'yes', message: '' });
    onSubmitSuccess?.();
  };

  return (
    <section className="rsvp-section" id="rsvp">
      <div className="rsvp-copy">
        <h2>RSVP</h2>
        <p>{event.rsvpCopy}</p>
      </div>

      <form className="rsvp-form" onSubmit={handleSubmit}>
        <label>
          Nama lengkap
          <input type="text" value={form.name} onChange={handleChange('name')} placeholder="Contoh: Siti Aisyah" />
        </label>

        <label>
          Konfirmasi hadir
          <select value={form.willAttend} onChange={handleChange('willAttend')}>
            <option value="yes">Hadir</option>
            <option value="no">Tidak hadir</option>
          </select>
        </label>

        <label>
          Jumlah tamu
          <input type="number" min="1" max="10" value={form.guests} onChange={handleChange('guests')} />
        </label>

        <label>
          Pesan untuk tuan rumah
          <textarea value={form.message} onChange={handleChange('message')} placeholder="Salam atau catatan..." />
        </label>

        <button type="submit" disabled={status.loading}>
          {status.loading ? 'Mengirim...' : 'Kirim RSVP'}
        </button>

        {status.error && <p className="form-message error">{status.error}</p>}
        {status.success && <p className="form-message success">{status.success}</p>}
      </form>
    </section>
  );
}

export default RsvpForm;
