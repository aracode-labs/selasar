# Digital Invitation MVP

Proyek ini adalah MVP digital invitation built dengan React + Vite dan Supabase.

## Setup lokal

1. Salin file environment:
   ```bash
   cp .env.example .env
   ```
2. Isi `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY` dengan nilai Supabase kamu.
3. Install dependensi:
   ```bash
   npm install
   ```
4. Jalankan development server:
   ```bash
   npm run dev
   ```

## Struktur penting

- `src/App.jsx` — layout utama
- `src/components` — komponen UI
- `src/data/event.js` — data event undangan
- `src/lib/supabaseClient.js` — koneksi Supabase
- `src/styles.css` — styling custom

## Deploy via GitHub + Vercel

1. Inisialisasi repository Git:
   ```bash
   git init
   git add .
   git commit -m "Initial MVP digital invitation"
   ```
2. Buat repository di GitHub.
3. Tambahkan remote dan push:
   ```bash
   git remote add origin git@github.com:<username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. Buka Vercel, lalu pilih `Import Project`.
5. Pilih repository GitHub yang sudah dibuat.
6. Pada bagian `Environment Variables`, tambahkan:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
7. Deploy.

> Vercel akan otomatis menggunakan `npm run build` sebagai build command.

## Supabase setup

1. Buat project di Supabase.
2. Buat table `rsvps` dengan kolom:
   - `id` (uuid atau serial primary key)
   - `name` (text)
   - `guests` (integer)
   - `will_attend` (boolean)
   - `message` (text)
3. Pastikan policy tabel memungkinkan insert publik untuk user anonymous, atau atur RLS sesuai kebutuhan.

## Catatan

- JANGAN commit file `.env` ke GitHub.
- Untuk staging / produksi, gunakan environment variables di Vercel.
