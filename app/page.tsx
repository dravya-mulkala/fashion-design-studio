import Link from 'next/link';
import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';
import { products } from '@/data/products';

export default function HomePage() {
  const featured = products.filter((product) => product.featured).slice(0, 4);

  return (
    <>
      <section className="bg-gradient-to-b from-violet-100 to-slate-50 py-20">
        <Container className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Personal Boutique</p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Fashion Design Studio
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-600 sm:text-lg">
            Curated silhouettes, handcrafted details, and timeless elegance for every occasion.
          </p>
          <Link href="/designs">
            <Button>Explore Designs</Button>
          </Link>
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Featured Designs</h2>
            <Link href="/designs" className="text-sm font-medium text-accent hover:text-violet-700">
              View all
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
