import React from 'react';
import { motion } from 'motion/react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { MENU_ITEMS } from '../constants/content';

export default function Menu() {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');
  const categories = ['All', 'Coffee', 'Non-Coffee', 'Main Course', 'Dessert'];

  const filteredItems = activeCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Header */}
      <header className="bg-senja-brown py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-senja-orange rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl text-senja-cream mb-6"
          >
            Menu Senja
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-senja-warm-gray text-lg max-w-xl mx-auto"
          >
            Setiap sajian dikurasi dengan detail untuk memberikan rasa yang paling otentik dan nyaman.
          </motion.p>
        </div>
      </header>

      {/* Category Filter */}
      <section className="bg-senja-bg py-8 sticky top-20 z-40 border-b border-senja-cream">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-senja-orange text-white shadow-lg'
                  : 'bg-senja-cream text-senja-brown hover:bg-senja-orange/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Grid */}
      <AnimatedSection className="max-w-7xl mx-auto min-h-[60vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {item.isBestSeller && (
                  <div className="absolute top-4 left-4 bg-senja-orange text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                    Best Seller
                  </div>
                )}
              </div>
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-serif text-senja-brown group-hover:text-senja-orange transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xl font-serif font-bold text-senja-brown">{item.price}</span>
                </div>
                <p className="text-senja-warm-gray text-sm leading-relaxed border-l-2 border-senja-cream pl-4 italic">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-24 text-senja-warm-gray">
            Coming soon.
          </div>
        )}
      </AnimatedSection>
    </div>
  );
}
