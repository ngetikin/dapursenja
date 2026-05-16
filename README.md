# Dapur Senja

**Sistem reservasi restoran/ kafe berbasis SPA**
menggunakan React dengan tema “sunset vibes”.
Aplikasi ini dibuat dengan Vite 6, Tailwind CSS 4, Framer Motion 12, Google Generative AI.

![Screenshot](https://github.com/ngetikin/dapursenja/blob/main/image.png?raw=true)

## 🔗 Link

- **Demo** : <https://dapursenja.vercel.app/>
- **Repositori**: <https://github.com/ngetikin/dapursenja>

---

## ✨ Fitur Utama

| 🚀 Fitur | 📖 Penjelasan |
|----------|---------------|
| **Beranda** | Menampilkan highlight menu, galeri, testimoni. |
| **Menu** | Daftar produk kopi & makanan terperinci, filter kategori, highlight best‑seller. |
| **Galeri** | Foto ambience dan produk dengan kategori. |
| **Reservasi** | Form reservasi lengkap, integrasi dengan WhatsApp. |
| **Cache & Motion** | Animasi scroll menggunakan Framer Motion; image lazy‑load. |
| **Responsif** | Menyesuaikan tampilan perangkat mobile, tablet & desktop. |
| **TypeScript** | Dukungan tipe statis & linting. |

---

## 🛠️ Stack Teknologi

| Kategori | Teknologi |
|----------|-----------|
| **Frontend** | React 19 (strict mode) / Vite 6 / TypeScript |
| **UI** | Tailwind CSS 4 / Framer Motion 12 / lucide‑react |
| **Routing** | React Router `v7` |
| **AI** | Google Generative AI (`@google/genai` – `GEMINI_API_KEY`) |
| **Bundler** | esbuild (dapat dioptimasi lewat Vite) |
| **Build** | Vite (dev, build, preview) |
| **Lint** | `tsc --noEmit` (type checking) |
| **Env** | `.env` (contoh: `GEMINI_API_KEY=…`) |

> **Catatan**: Paket `express` sudah di‑install namun belum digunakan; proyek ini bersifat frontend‑only.

---

## 📦 Instalasi

```bash
# 1. Clone repositori
git clone https://github.com/ngetikin/dapursenja.git
cd dapursenja

# 2. Install dependensi
npm install          # atau use `pnpm install`/`yarn`
# 3. Copy file contoh `.env.example` (jika ada) atau buat `.env`
cp .env.example .env   # buat jika file contoh tersedia
vim .env              # tambahkan variabel

# 4. Jalankan server development
npm run dev

# 5. Build untuk produksi
npm run build
```

> Server development di‑expose pada `http://localhost:3000`.

---

## 🚀 Penggunaan

| Perintah | Tujuan |
|----------|--------|
| `npm run dev` | Jalankan dev server (Vite) |
| `npm run build` | Bikin bundle produksi |
| `npm run preview` | Preview hasil build |
| `npm run clean` | Hapus folder `dist` dan `server.js` |
| `npm run lint` | Lakukan type‑checking Typescript |

**Langkah sederhana menguji produksi**

```bash
npm run build
npm run preview
```

---

## 📁 Struktur Proyek

```
dapursenja/
├─ public/             # index html, favicon, dll.
├─ src/
│  ├─ components/
│  │   ├─ layout/        # Navbar, Footer
│  │   ├─ ui/           # UI reusable component
│  │   └─ utils/         # ScrollToTop
│  ├─ constants/       # data statis (menu, gallery, testimoni)
│  ├─ pages/             # router pages (Home, About, Menu, Gallery, Reservation)
│  ├─ App.tsx           # Root component Routing
│  ├─ main.tsx          # bootstrap aplikasi
│  └─ index.css         # Tailwind import + custom
├─ index.html           # Vite entry
├─ vite.config.ts      # konfigurasi bundler + env
├─ package.json
└─ tsconfig.json
```

---

## 📸 Screenshot

![Screenshot](https://github.com/ngetikin/dapursenja/blob/main/image.png?raw=true)

---

## ⛏️ Roadmap

> (Belum ada item roadmap terdefinisi dalam repositori ini.)

---

## 🤝 Kontribusi

1. Fork proyek dan buat branch baru (`git checkout -b feat/...`).
2. Sinkronkan perubahan branch master (`git pull`).
3. Commit dengan pesan semantik (e.g., `feat: add sticky CTA`).
4. Push ke remote dan buat Pull Request.
5. Pastikan lint/tsc tanpa error.

---

## 📄 Lisensi

Kode ini dilisensikan di bawah **MIT**. Lihat file `LICENSE` (jika ada) atau periksa komentar header.
