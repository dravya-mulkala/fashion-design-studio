import Image from 'next/image';
import Button from '@/components/Button';
import Container from '@/components/Container';
import { products } from '@/data/products';
import { formatCurrency } from '@/lib/utils';

const cartItems = [
  { ...products[0], quantity: 1 },
  { ...products[3], quantity: 1 },
  { ...products[6], quantity: 2 }
];

export default function CartPage() {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 12;
  const total = subtotal + shipping;

  return (
    <section className="py-12">
      <Container className="space-y-8">
        <h1 className="text-3xl font-semibold text-slate-900">Your Cart</h1>

        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
            {cartItems.map((item) => (
              <article key={item.id} className="flex items-center gap-4 border-b border-slate-100 pb-4 last:border-none last:pb-0">
                <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-slate-100">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                </div>
                <div className="flex-1">
                  <h2 className="font-medium text-slate-900">{item.name}</h2>
                  <p className="text-sm text-slate-500">
                    Qty: {item.quantity} • {item.category}
                  </p>
                </div>
                <p className="font-medium text-slate-800">{formatCurrency(item.price * item.quantity)}</p>
              </article>
            ))}
          </div>

          <aside className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Summary</h2>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{formatCurrency(shipping)}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2 text-base font-medium text-slate-900">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
            <Button className="w-full">Checkout</Button>
          </aside>
        </div>
      </Container>
    </section>
  );
}
