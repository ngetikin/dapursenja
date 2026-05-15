import { motion } from 'motion/react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { GALLERY_IMAGES } from '../constants/content';

export default function Gallery() {
  return (
    <div className="pt-20">
      <header className="bg-senja-bg py-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-8"
          >
            Galeri Senja
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-senja-warm-gray text-lg max-w-xl mx-auto"
          >
            Tangkapan visual dari momen-momen hangat di Dapur Senja.
          </motion.p>
        </div>
      </header>

      <AnimatedSection className="max-w-7xl mx-auto py-0 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group break-inside-avoid"
            >
              <div className="overflow-hidden rounded-3xl bg-senja-cream">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <span className="text-white text-xs font-bold uppercase tracking-widest mb-2">
                  {img.category}
                </span>
                <h3 className="text-white text-xl font-serif">{img.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
