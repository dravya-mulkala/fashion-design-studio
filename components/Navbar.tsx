import Link from 'next/link';
import Container from './Container';
import CategoryHamburger from './CategoryHamburger';
import { categories } from '@/data/products';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3">
        <CategoryHamburger categories={categories} />

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center justify-end gap-3 text-xs text-slate-600 sm:gap-5 sm:text-sm"
        >
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/designs" className="hover:text-accent">
            Designs
          </Link>
          <Link href="/cart" className="hover:text-accent">
            Cart
          </Link>
          <Link href="/login" className="hover:text-accent">
            Login
          </Link>
          <Link href="/register" className="hover:text-accent">
            Register
          </Link>
        </nav>
      </Container>
    </header>
  );
}
