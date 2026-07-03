const eventData = {
  title: 'Undangan Spesial',
  subtitle: 'Sebuah momen istimewa yang ingin kami bagikan bersama kamu.',
  date: 'Sabtu, 20 Juli 2026',
  time: '16:00 - 20:00 WIB',
  note: 'Kami menantikan kehadiranmu untuk merayakan hari bahagia ini.',
  location: {
    name: 'Gedung Sinar Bahagia',
    address: 'Jl. Bahagia No. 12, Jakarta Selatan',
    description: 'Tempat nyaman dengan taman terbuka dan suasana hangat.',
    mapUrl: 'https://maps.google.com/?q=Gedung+Sinar+Bahagia',
  },
  description:
    'Mari bergabung dalam acara perayaan kami dengan suasana hangat dan penuh makna. Acara ini dirancang untuk keluarga dan sahabat dekat.',
  schedule: [
    { time: '16:00', activity: 'Sambutan & Welcome Drink' },
    { time: '17:00', activity: 'Acara Utama' },
    { time: '18:30', activity: 'Makan Malam' },
    { time: '19:30', activity: 'Penutup & Foto Bersama' },
  ],
  dressCode: 'Smart casual dengan sentuhan warna hangat',
  rsvpPrompt: 'Lihat statistik RSVP dan pastikan namamu terdaftar.',
  rsvpCopy:
    'Isi form berikut untuk mengonfirmasi kehadiranmu. Data tersimpan langsung ke Supabase.',
};

export default eventData;
