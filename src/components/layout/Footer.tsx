import { NavLink } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-senja-bg text-senja-brown py-20 border-t border-senja-brown/10">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-16 items-end">
        <div className="md:col-span-1">
          <h2 className="text-xl font-serif font-bold mb-4 tracking-widest uppercase">
            DAPUR SENJA
          </h2>
          <p className="text-senja-warm-gray text-[10px] font-sans uppercase tracking-widest leading-relaxed opacity-60">
            Tempat Pulang Setelah Hari Panjang.
          </p>
        </div>

        <div className="flex gap-16 md:col-span-2">
          <div>
            <p className="text-[9px] font-sans uppercase tracking-widest opacity-40 mb-3 font-semibold">Location</p>
            <p className="text-xs font-sans tracking-wide">Jl. Senja No. 42, Jakarta Selatan</p>
          </div>
          <div>
            <p className="text-[9px] font-sans uppercase tracking-widest opacity-40 mb-3 font-semibold">Open Hours</p>
            <p className="text-xs font-sans tracking-wide">Tue — Sun, 15:00 — 23:00</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-[9px] font-sans uppercase tracking-[0.3em] opacity-40 mb-3 font-semibold">Connect</p>
          <div className="flex gap-6 text-xs font-sans uppercase tracking-widest justify-end">
            <a href="https://instagram.com" className="hover:text-senja-orange transition-colors">@DAPURSENJA</a>
            <span className="opacity-20">/</span>
            <NavLink to="/contact" className="hover:text-senja-orange transition-colors">RESERVASI</NavLink>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 mt-16 pt-8 border-t border-senja-brown/5 text-center text-[9px] font-sans uppercase tracking-[0.3em] text-senja-warm-gray opacity-40">
        &copy; {new Date().getFullYear()} DAPUR SENJA. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
