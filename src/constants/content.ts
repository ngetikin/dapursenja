import { MenuItem, GalleryImage, Testimonial } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Sunset Latte',
    description: 'Our signature latte with a hint of warm spices and orange zest.',
    price: '38k',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Senja Cold Brew',
    description: 'Slow-steeped for 18 hours, presenting a clean and bright profile.',
    price: '35k',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Pasta Senja',
    description: 'Creamy fettuccine with smoked beef and a touch of secret spices.',
    price: '65k',
    category: 'Main Course',
    image: 'https://th.bing.com/th/id/OIP.ocU1GBXMi7EKvCI0Tu-2vQHaLF?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    isBestSeller: true,
  },
  {
    id: '4',
    name: 'Burnt Cheesecake',
    description: 'Basque-style cheesecake with a perfectly caramelized top.',
    price: '45k',
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800',
    isBestSeller: true,
  },
  {
    id: '5',
    name: 'Twilight Berry',
    description: 'Refreshing mixed berry tea with a splash of soda and lime.',
    price: '32k',
    category: 'Non-Coffee',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'Midnight Brownie',
    description: 'Dark chocolate brownie served with a scoop of vanilla bean gelato.',
    price: '40k',
    category: 'Dessert',
    image: 'https://tse2.mm.bing.net/th/id/OIP.DE5GvJTojjP8fHNxOe0KJAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800', alt: 'Cafe Ambience', category: 'ambience' },
  { id: '2', url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800', alt: 'Coffee Art', category: 'food' },
  { id: '3', url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800', alt: 'Cozy Corner', category: 'interior' },
  { id: '4', url: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800', alt: 'Customer Moment', category: 'moments' },
  { id: '5', url: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=800', alt: 'Iced Coffee', category: 'food' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Alina Shara', text: 'Tempat yang bikin lupa pulang. Vibes sunset-nya dapet banget!', role: 'Digital Nomad' },
  { id: '2', name: 'Rian Dirga', text: 'Kopi Sunset Latte-nya unik. Bakal jadi tempat favorit baru.', role: 'Coffee Enthusiast' },
  { id: '3', name: 'Maya Sari', text: 'Ambience-nya tenang, cocok buat quality time atau kerja santai.', role: 'Writer' },
];
