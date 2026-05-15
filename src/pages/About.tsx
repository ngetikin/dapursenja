import AnimatedSection from '../components/ui/AnimatedSection';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="bg-senja-cream/50 py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-senja-orange font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Since 2022
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-8"
          >
            Setiap Senja Punya Cerita.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-senja-warm-gray text-lg leading-relaxed"
          >
            Dapur Senja adalah wujud dari kecintaan kami pada masakan rumahan yang elegan dan kopi yang diracik dengan hati.
          </motion.p>
        </div>
      </section>

      {/* Story Detail */}
      <AnimatedSection className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-4xl mb-8">Filosofi Nama</h2>
          <p className="text-senja-warm-gray leading-relaxed mb-6">
            <strong>"Dapur"</strong> melambangkan keintiman dan sumber dari segala kehangatan sebuah rumah. Tempat di mana bahan-bahan sederhana diolah menjadi kenangan.
          </p>
          <p className="text-senja-warm-gray leading-relaxed mb-8">
            <strong>"Senja"</strong> adalah waktu transisi paling indah. Saat hari panjang berakhir, dan kita mencari tempat untuk berlabuh. Gabungan keduanya menciptakan visi kami: sebuah rumah makan yang menjadi tempat pulang bagi setiap jiwa yang lelah setelah hari yang panjang.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-senja-cream">
            <div>
              <h4 className="font-serif text-2xl mb-2 text-senja-orange">100%</h4>
              <p className="text-xs uppercase tracking-widest text-senja-warm-gray">Local Ingredients</p>
            </div>
            <div>
              <h4 className="font-serif text-2xl mb-2 text-senja-orange">Freshly</h4>
              <p className="text-xs uppercase tracking-widest text-senja-warm-gray">Roasted Coffee</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
            alt="Dapur Senja Philosophy"
            className="rounded-[40px] shadow-2xl w-full aspect-[4/5] object-cover"
          />
        </div>
      </AnimatedSection>

      {/* Visual Identity */}
      <section className="bg-senja-brown text-senja-cream py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-2xl mb-4 font-serif text-senja-orange">Warmth</h3>
            <p className="text-senja-warm-gray text-sm leading-relaxed">
              Kami menggunakan palet warna dan pencahayaan hangat untuk menciptakan atmosfer yang memeluk setiap tamu yang datang.
            </p>
          </div>
          <div>
            <h3 className="text-2xl mb-4 font-serif text-senja-orange">Comfort</h3>
            <p className="text-senja-warm-gray text-sm leading-relaxed">
              Dari pilihan kursi hingga playlist yang kami putar, semua dirancang untuk memberikan kenyamanan maksimal.
            </p>
          </div>
          <div>
            <h3 className="text-2xl mb-4 font-serif text-senja-orange">Connection</h3>
            <p className="text-senja-warm-gray text-sm leading-relaxed">
              Dapur Senja bukan hanya tentang makan dan minum, tapi tentang menciptakan koneksi—baik dengan orang tersayang maupun dengan diri sendiri.
            </p>
          </div>
        </div>
      </section>

      {/* Interior Philosophy */}
      <AnimatedSection className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Ruang & Cahaya</h2>
          <p className="text-senja-warm-gray max-w-xl mx-auto">Setiap sudut Dapur Senja dirancang dengan estetika minimalis namun tetap terasa personal.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="https://i.pinimg.com/736x/e0/57/d7/e057d706819b68119d2831960b664377.jpg"
            alt="Interior 1"
            className="rounded-3xl w-full h-80 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1200"
            alt="Interior 2"
            className="rounded-3xl w-full h-80 object-cover"
          />
        </div>
      </AnimatedSection>
    </div>
  );
}
