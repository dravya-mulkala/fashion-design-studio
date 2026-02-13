import Image from 'next/image';
import { notFound } from 'next/navigation';
import Button from '@/components/Button';
import Container from '@/components/Container';
import { products } from '@/data/products';
import { formatCurrency } from '@/lib/utils';

interface DesignDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function DesignDetailPage({ params }: DesignDetailPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <section className="py-12">
      <Container className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
          <Image src={product.image} alt={product.name} fill className="object-cover" priority />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{product.category}</p>
            <h1 className="text-3xl font-semibold text-slate-900">{product.name}</h1>
            <p className="text-xl font-medium text-accent">{formatCurrency(product.price)}</p>
          </div>

          <p className="text-slate-600">{product.description}</p>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Fabric</h2>
            <p className="mt-1 text-slate-600">{product.fabric}</p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">Available Sizes</h2>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <span key={size} className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600">
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">Color Options</h2>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <span key={color} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                  {color}
                </span>
              ))}
            </div>
          </div>

          <Button className="w-full sm:w-auto">Add to Cart</Button>
        </div>
      </Container>
    </section>
  );
}
