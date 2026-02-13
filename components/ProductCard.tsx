import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { formatCurrency } from '@/lib/utils';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="space-y-3 p-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
          <p className="text-sm text-slate-500">{product.category}</p>
        </div>
        <p className="text-base font-medium text-slate-800">{formatCurrency(product.price)}</p>
        <Link href={`/designs/${product.id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </div>
    </article>
  );
}
