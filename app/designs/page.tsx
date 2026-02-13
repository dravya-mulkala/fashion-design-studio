import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import { categories, products } from '@/data/products';

export default function DesignsPage() {
  return (
    <section className="py-12">
      <Container className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-slate-900">All Designs</h1>
          <p className="text-slate-600">Browse our latest fashion sketches and ready-to-style looks.</p>
        </div>
        <CategoryFilter categories={categories} activeCategory="All" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
