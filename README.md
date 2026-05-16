# Dapur Senja

Sebuah situs web pemesanan restoran/kafe berbasis satu halaman (landing page) dengan estetika “sunset vibes”. Dibuat menggunakan **React 19 + TypeScript**, dibundel oleh **Vite 6**, diperindah dengan **Tailwind CSS 4**, dan dinamisasi dengan **Framer Motion 12**. Form reservasi terintegrasi dengan WhatsApp, dan situs ini memanggil **Google Generative AI** untuk konten dinamis.

> **Production**: <https://dapursenja.vercel.app/>  
> **Demo** (same as production): <https://dapursenja.vercel.app/>  

![Screenshot](https://github.com/ngetikin/dapursenja/blob/main/image.png?raw=true)

---

## ✨ Fitur Utama

| Fitur | Penjelasan |
|------|-------------|
| **Beranda** | Menampilkan highlight menu, galeri, dan testimoni. |
| **Menu** | Daftar produk kopi & makanan terperinci, filter kategori, highlight best‑seller. |
| **Galeri** | Foto ambience dan produk dengan kategori. |
| **Reservasi** | Form reservasi lengkap, integrasi dengan WhatsApp. |
| **Animasi & Lazy‑Load** | Scroll animasi menggunakan Framer Motion, gambar di‑load secara lazy. |
| **Responsif** | Tampilan mobile‑first, tablet & desktop. |
| **TypeScript** | Tipe statik + linting mengurangi bug di runtime. |

---

## 🛠️ Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| **Frontend** | React 19, Vite 6, TypeScript, Tailwind CSS 4, Framer Motion 12, lucide‑react |
| **AI** | Google Generative AI (`@google/genai` – uses `GEMINI_API_KEY`) |
| **Utilities** | `npm` scripts, `tsc` (`npm run lint`), `npm run preview` |
| **Deployment** | Netlify/Vercel (static site) |

---

## 📦 Instalasi

1. **Clone repositori**

   ```bash
   git clone https://github.com/ngetikin/dapursenja.git
   cd dapursenja
   ```

2. **Pasang dependensi**

   ```bash
   npm install          # atau gunakan `pnpm install` / `yarn`
   ```

3. **Setel variabel lingkungan**  
   Salin contoh `.env.example` (jika ada) ke `.env` dan isi kunci API:

   ```bash
   cp .env.example .env
   vim .env           # tambahkan GEMINI_API_KEY dan variabel lain
   ```

4. **Jalankan server pengembangan**

   ```bash
   npm run dev
   ```

   Server tersedia di <http://localhost:3000> (dapat diakses secara publik jika diset `0.0.0.0`).

5. **Buat build produksi**

   ```bash
   npm run build
   npm run preview          # preview build lokal
   ```

---

## ⚙️ Variabel Lingkungan

| Variabel | Keterangan |
|----------|------------|
| `GEMINI_API_KEY` | Kunci API Google Generative AI yang digunakan oleh backend integrasi WhatsApp |

> Catatan: Tidak ada server backend; semua layanan eksternal dipanggil lewat client‑side API calls.

---

## 🚀 Penggunaan

| Perintah | Deskripsi |
|----------|-----------|
| `npm run dev` | Run dev server (Vite) |
| `npm run build` | Buat bundle produksi |
| `npm run preview` | Preview hasil build |
| `npm run clean` | Hapus folder `dist/` |
| `npm run lint` | Kinerja TypeScript type‑checking (`tsc --noEmit`) |

---

## 📁 Struktur Proyek

```
da​pursenja/
├─ public/               # index.html, favicon, dll.
├─ src/
│  ├─ components/
│  │  ├─ layout/        # Navbar, Footer
│  │  ├─ ui/            # UI reusable component
│  │  └─ utils/         # util utilities (misalnya ScrollToTop)
│  ├─ constants/        # data statis (menu, galeri, testimoni)
│  ├─ pages/            # router pages (Home, About, Menu, Gallery, Reservation)
│  ├─ App.tsx            # Root component Routing
│  ├─ main.tsx           # bootstrap aplikasi
│  └─ index.css          # Tailwind import + custom
├─ index.html            # Vite entry
├─ vite.config.ts       # konfigurasi bundler + env
├─ package.json
└─ tsconfig.json
```

---

## 📸 Screenshots

- ![Screenshot](https://github.com/ngetikin/dapursenja/blob/main/image.png?raw=true)

---

## 🧪 Testing

Proyek ini tidak mengimplementasikan unit‑test atau end‑to‑end test. Ditambah, folder `tests/` belum ada. Jika diperlukan, tambahkan skrip lint (`npm run lint`) dan setup testing framework di masa depan.

---

## 🤝 Kontribusi

1. Fork proyek dan buat branch baru (`git checkout -b feat/...`).
2. Sinkronkan perubahan branch master (`git pull`).
3. Commit dengan pesan semantik (mis. `feat: add sticky CTA`).
4. Push ke remote dan buat Pull Request.
5. Pastikan `npm run lint` dan `npm run build` tanpa error.

---

## 📄 Lisensi

Kode ini dilisensikan di bawah **MIT**. Lihat file `LICENSE`.

---