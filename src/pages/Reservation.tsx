import React from 'react';
import { motion } from 'motion/react';
import { Instagram, MapPin, Phone, MessageSquare, Send } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function Reservation() {
  const [formState, setFormState] = React.useState({
    name: '',
    date: '',
    guests: '2',
    notes: '',
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      window.open(`https://wa.me/6281234567890?text=Halo Dapur Senja, saya ${formState.name} ingin reservasi untuk tanggal ${formState.date} untuk ${formState.guests} orang. Notes: ${formState.notes}`, '_blank');
    }, 1000);
  };

  return (
    <div className="pt-20">
      <header className="bg-senja-orange py-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl text-white mb-6">Reservasi Table</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Sore terbaik Anda dimulai dengan sebuah persiapan kecil. Kami akan menyambut Anda dengan hangat.
          </p>
        </div>
      </header>

      <AnimatedSection className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 py-24">
        {/* Reservation Form */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-senja-orange/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Send size={120} className="rotate-12" />
          </div>
          
          <h2 className="text-3xl mb-8">Pesan Meja Anda</h2>
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={32} />
              </div>
              <h3 className="text-2xl mb-4">Mengarahkan ke WhatsApp...</h3>
              <p className="text-senja-warm-gray">Terima kasih atas reservasi Anda. Kami akan mengonfirmasi sesaat lagi.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-senja-orange">Nama Lengkap</label>
                  <input
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Masukkan nama..."
                    className="w-full bg-senja-bg border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-senja-orange transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-senja-orange">Tanggal & Waktu</label>
                  <input
                    required
                    type="datetime-local"
                    value={formState.date}
                    onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                    className="w-full bg-senja-bg border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-senja-orange transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-senja-orange">Jumlah Orang</label>
                <select
                  value={formState.guests}
                  onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                  className="w-full bg-senja-bg border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-senja-orange transition-all outline-none appearance-none"
                >
                  {[1, 2, 3, 4, 5, 10].map(n => (
                    <option key={n} value={n}>{n} {n === 10 ? 'Orang atau lebih' : 'Orang'}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-senja-orange">Catatan Khusus (Optional)</label>
                <textarea
                  value={formState.notes}
                  onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                  rows={4}
                  placeholder="Alergi, special event, dll..."
                  className="w-full bg-senja-bg border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-senja-orange transition-all outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-senja-brown text-white py-5 rounded-full font-bold text-lg hover:bg-senja-orange transition-colors shadow-lg shadow-senja-brown/20"
              >
                Konfirmasi Reservasi
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-12 py-8">
          <div>
            <h2 className="text-3xl mb-8">Informasi Kontak</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-senja-cream rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-senja-orange" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Lokasi Kami</h4>
                  <p className="text-senja-warm-gray leading-relaxed text-sm">
                    Jl. Senja No. 42, Kebayoran Baru,<br />
                    Jakarta Selatan, 12160
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-senja-cream rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-senja-orange" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Hubungi</h4>
                  <p className="text-senja-warm-gray text-sm">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-senja-cream rounded-2xl flex items-center justify-center shrink-0">
                  <Instagram className="text-senja-orange" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Instagram</h4>
                  <p className="text-senja-warm-gray text-sm">@dapur.senja</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-senja-cream">
            <h3 className="text-xl mb-4 font-serif">Punya Pertanyaan?</h3>
            <p className="text-senja-warm-gray text-sm mb-6">Kami selalu terbuka untuk kolaborasi atau sekadar ngobrol santai.</p>
            <a
              href="mailto:hello@dapursenja.com"
              className="inline-flex items-center gap-2 text-senja-orange font-bold uppercase tracking-widest text-xs border-b border-senja-orange pb-1"
            >
              Email Us <MessageSquare size={14} />
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Map Embed Placeholder */}
      <section className="h-[400px] bg-senja-cream relative overflow-hidden grayscale contrast-125">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
                <MapPin className="mx-auto mb-4 text-senja-orange" size={48} />
                <p className="font-serif text-xl">DAPUR SENJA Location</p>
            </div>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.71180436402!2d106.7725838421875!3d-6.241328600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f10925916327%3A0x6d91f42296d66e74!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid" 
          width="100%" 
          height="100%" 
          style={{border:0, opacity: 0.3}} 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
