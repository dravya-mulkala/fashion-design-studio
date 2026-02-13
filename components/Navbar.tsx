import Link from 'next/link';
import Container from './Container';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wide text-slate-900">
          Fashion Design Studio
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-5 text-sm text-slate-600">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/designs" className="hover:text-accent">
            Designs
          </Link>
          <Link href="/cart" className="hover:text-accent">
            Cart
          </Link>
        </nav>
      </Container>
    </header>
  );
}
