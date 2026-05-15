import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';
import { MENU_ITEMS, TESTIMONIALS, GALLERY_IMAGES } from '../constants/content';
import { ArrowRight, Coffee, Clock, MapPin, Star } from 'lucide-react';

export default function Home() {
  const signatureItems = MENU_ITEMS.filter(item => item.isBestSeller).slice(0, 3);
  const galleryPreview = GALLERY_IMAGES.slice(0, 4);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden px-12">
        {/* Sunset Atmosphere Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-senja-accent via-senja-cream to-transparent opacity-20 blur-[120px] rounded-full -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-senja-cream to-transparent opacity-40 blur-[100px] rounded-full -ml-20 -mb-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-6"
          >
            <span className="inline-block text-[11px] font-sans uppercase tracking-[0.5em] mb-4 text-senja-orange font-semibold">
              The Warmest Welcome
            </span>
            <h1 className="text-8xl leading-[0.9] mb-8 font-medium">
              Dapur<br />
              <span className="italic text-senja-orange">Senja</span>
            </h1>
            <p className="text-2xl font-light italic text-senja-warm-gray max-w-md mb-10 leading-relaxed">
              &ldquo;Tempat pulang setelah hari panjang.&rdquo;
            </p>
            
            <div className="flex items-center gap-6 mb-12">
              <div className="h-[1px] w-12 bg-senja-brown opacity-30"></div>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] leading-loose max-w-xs opacity-60">
                Experience the cinematic warmth of slow living through our craft coffee and soulful dishes.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <NavLink
                to="/contact"
                className="px-8 py-4 border border-senja-brown font-sans text-xs uppercase tracking-[0.2em] hover:bg-senja-brown hover:text-white transition-all"
              >
                Book a Table
              </NavLink>
              <NavLink
                to="/menu"
                className="px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-all flex items-center gap-2"
              >
                Explore Menu <ArrowRight size={14} />
              </NavLink>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-6 hidden lg:grid grid-cols-2 grid-rows-6 gap-6 h-[600px]"
          >
            <div className="col-span-2 row-span-4 bg-senja-cream rounded-tl-[120px] rounded-br-[120px] relative overflow-hidden group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200"
                alt="Ambient"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-80">Current Mood</p>
                <h3 className="text-2xl italic font-serif">Golden Hour Sanctuary</h3>
              </div>
            </div>

            <div className="row-span-2 bg-white/50 backdrop-blur-md p-6 border border-white/30 rounded-2xl flex flex-col justify-between shadow-lg">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-sans bg-senja-cream px-2 py-1 rounded">Signature</span>
                <span className="text-sm italic font-serif">38k</span>
              </div>
              <div>
                <h4 className="text-lg font-medium font-serif">Sunset Latte</h4>
                <p className="text-[9px] font-sans opacity-60 mt-1 uppercase tracking-wider italic">Espresso, Orange Peel, Cinnamon</p>
              </div>
            </div>

            <div className="row-span-2 bg-senja-brown text-senja-cream p-6 rounded-2xl flex flex-col justify-between shadow-xl">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-sans bg-white/10 px-2 py-1 rounded uppercase tracking-tighter">Dessert</span>
                <span className="text-sm italic font-serif">45k</span>
              </div>
              <div>
                <h4 className="text-lg font-medium font-serif">Burnt Senja</h4>
                <p className="text-[9px] font-sans opacity-60 mt-1 uppercase tracking-wider italic">Smokey Basque Cheesecake</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <AnimatedSection className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-senja-orange/10 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
          <img
            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800"
            alt="Our Story"
            className="relative rounded-2xl w-full h-[500px] object-cover shadow-2xl"
          />
        </div>
        <div>
          <span className="text-senja-orange font-bold tracking-widest uppercase text-xs mb-4 block">Our Story</span>
          <h2 className="text-4xl mb-6">Filosofi Senja & Kehangatan</h2>
          <p className="text-senja-warm-gray leading-relaxed mb-8">
            Dapur Senja lahir dari kerinduan akan tempat di mana waktu seolah melambat. Kami percaya bahwa setiap hari yang panjang layak ditutup dengan kenyamanan—baik itu lewat aroma kopi yang menenangkan atau rasa masakan yang memeluk jiwa.
          </p>
          <NavLink to="/about" className="text-senja-brown font-bold border-b-2 border-senja-orange pb-1 hover:text-senja-orange hover:border-senja-brown transition-colors group">
            Learn More
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </NavLink>
        </div>
      </AnimatedSection>

      {/* Signature Menu */}
      <section className="bg-senja-cream/20 py-32">
        <div className="max-w-7xl mx-auto px-12 text-center mb-20">
          <span className="text-[11px] font-sans uppercase tracking-[0.5em] mb-4 text-senja-orange font-semibold block">Crafted with Love</span>
          <h2 className="text-5xl font-medium mb-6">Signature Selection</h2>
          <div className="h-[1px] w-24 bg-senja-orange mx-auto opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {signatureItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-8 rounded-sm shadow-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                />
                <div className="absolute top-6 right-6 font-sans text-[10px] uppercase tracking-widest text-white mix-blend-difference">
                  {item.category}
                </div>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-2xl font-serif italic">{item.name}</h3>
                  <span className="text-sm font-sans tracking-widest opacity-60">{item.price}</span>
                </div>
                <p className="text-senja-warm-gray text-xs uppercase tracking-elegant leading-loose opacity-80">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <AnimatedSection className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {[
            { icon: <Coffee className="text-senja-orange" />, title: 'Premium Blend', desc: 'Biji kopi pilihan dari petani lokal terbaik.' },
            { icon: <Clock className="text-senja-orange" />, title: 'Slow Living', desc: 'Tempat ideal untuk beristirahat dari rutinitas.' },
            { icon: <Star className="text-senja-orange" />, title: 'Warm Service', desc: 'Pelayanan ramah yang membuat Anda merasa di rumah.' },
            { icon: <MapPin className="text-senja-orange" />, title: 'Strategic Spot', desc: 'Lokasi tenant di pusat kota namun tetap tenang.' },
          ].map((feature, i) => (
            <div key={i} className="group">
              <div className="w-12 h-12 bg-senja-cream rounded-2xl flex items-center justify-center mb-6 group-hover:bg-senja-orange/10 group-hover:scale-110 transition-all duration-300 mx-auto md:mx-0">
                {feature.icon}
              </div>
              <h3 className="text-xl mb-3 font-serif">{feature.title}</h3>
              <p className="text-senja-warm-gray text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Gallery Section Preview */}
      <section className="py-24 bg-senja-brown text-senja-cream">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-senja-orange font-bold tracking-widest uppercase text-xs mb-4 block">Visual Moments</span>
            <h2 className="text-4xl">Suasana di Senja</h2>
          </div>
          <NavLink
            to="/gallery"
            className="text-senja-orange font-bold border-b border-senja-orange mb-1 hover:text-white hover:border-white transition-colors"
          >
            Explore Gallery
          </NavLink>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryPreview.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl group"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest font-bold">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <AnimatedSection className="max-w-7xl mx-auto text-center">
        <span className="text-senja-orange font-bold tracking-widest uppercase text-xs mb-4 block">Kind Words</span>
        <h2 className="text-4xl mb-16 italic font-serif">"Tempat yang membuat hari panjang <br /> terasa lebih ringan."</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="relative">
              <p className="text-lg mb-6 leading-relaxed relative z-10 font-serif">
                "{t.text}"
              </p>
              <div className="w-12 h-px bg-senja-orange mx-auto mb-4" />
              <p className="font-bold text-senja-brown">{t.name}</p>
              <p className="text-xs text-senja-warm-gray uppercase tracking-widest">{t.role}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <section className="bg-senja-orange p-12 md:p-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto text-white"
        >
          <h2 className="text-white text-fluid-lg mb-8">
            Siap Melepas Penat?
          </h2>
          <p className="text-white/80 text-xl mb-12">
            Nikmati sore terbaikmu di DAPUR SENJA. <br />
            Kami telah menyiapkan meja dan secangkir kopi hangat untukmu.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <NavLink
              to="/contact"
              className="bg-senja-brown text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-senja-brown transition-all shadow-2xl"
            >
              Reserve Now
            </NavLink>
            <a
              href="https://wa.me/6281234567890"
              className="bg-white text-senja-orange px-10 py-5 rounded-full font-bold hover:bg-senja-brown hover:text-white transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
