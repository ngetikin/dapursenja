export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Coffee' | 'Non-Coffee' | 'Main Course' | 'Dessert' | 'Seasonal';
  image: string;
  isBestSeller?: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'ambience' | 'food' | 'moments' | 'interior';
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  role: string;
}
