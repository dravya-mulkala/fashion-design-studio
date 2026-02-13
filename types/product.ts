export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Ethnic' | 'Casual' | 'Party Wear' | 'Custom';
  image: string;
  description: string;
  fabric: string;
  sizes: string[];
  colors: string[];
  featured?: boolean;
}
