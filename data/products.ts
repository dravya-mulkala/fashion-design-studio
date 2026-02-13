import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'royal-anarkali',
    name: 'Royal Anarkali Ensemble',
    price: 189,
    category: 'Ethnic',
    image: '/images/royal-anarkali.svg',
    description: 'A flowing anarkali featuring hand-inspired motifs and a graceful silhouette.',
    fabric: 'Silk Blend',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Rose Gold', 'Midnight Blue'],
    featured: true
  },
  {
    id: 'linen-power-set',
    name: 'Linen Power Set',
    price: 129,
    category: 'Casual',
    image: '/images/linen-power-set.svg',
    description: 'Relaxed tailoring with breathable linen for elevated everyday wear.',
    fabric: 'Premium Linen',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Sand', 'Olive', 'Black'],
    featured: true
  },
  {
    id: 'velvet-noir-gown',
    name: 'Velvet Noir Gown',
    price: 249,
    category: 'Party Wear',
    image: '/images/velvet-noir-gown.svg',
    description: 'A dramatic evening gown with sculpted draping and subtle shimmer accents.',
    fabric: 'Stretch Velvet',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Noir', 'Merlot']
  },
  {
    id: 'signature-drape',
    name: 'Signature Drape Dress',
    price: 219,
    category: 'Custom',
    image: '/images/signature-drape.svg',
    description: 'Made-to-order draped dress that celebrates your individual style profile.',
    fabric: 'Satin Crepe',
    sizes: ['Custom'],
    colors: ['Emerald', 'Champagne', 'Ruby'],
    featured: true
  },
  {
    id: 'sunset-coord',
    name: 'Sunset Co-ord Set',
    price: 99,
    category: 'Casual',
    image: '/images/sunset-coord.svg',
    description: 'Soft two-piece set with a tailored crop top and wide-leg trousers.',
    fabric: 'Cotton Twill',
    sizes: ['S', 'M', 'L'],
    colors: ['Coral', 'Stone']
  },
  {
    id: 'mirror-lehenga',
    name: 'Mirror Work Lehenga',
    price: 279,
    category: 'Ethnic',
    image: '/images/mirror-lehenga.svg',
    description: 'Celebration-ready lehenga detailed with modern mirror-inspired patterns.',
    fabric: 'Georgette',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Fuchsia', 'Teal', 'Gold']
  },
  {
    id: 'starlight-jumpsuit',
    name: 'Starlight Jumpsuit',
    price: 159,
    category: 'Party Wear',
    image: '/images/starlight-jumpsuit.svg',
    description: 'A sleek jumpsuit with a cinched waist and metallic thread highlights.',
    fabric: 'Poly Blend',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Silver', 'Navy']
  },
  {
    id: 'atelier-cape-set',
    name: 'Atelier Cape Set',
    price: 199,
    category: 'Custom',
    image: '/images/atelier-cape-set.svg',
    description: 'A couture-inspired cape and dress combination tailored for statement events.',
    fabric: 'Organza + Crepe',
    sizes: ['Custom'],
    colors: ['Pearl', 'Blush', 'Slate']
  }
];

export const categories = ['All', 'Ethnic', 'Casual', 'Party Wear', 'Custom'] as const;
