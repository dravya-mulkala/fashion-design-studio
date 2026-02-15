'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CategoryHamburgerProps {
  categories: readonly string[];
}

const appLinks = [
  { label: 'Home', href: '/' },
  { label: 'Designs', href: '/designs' },
  { label: 'Cart', href: '/cart' },
  { label: 'Login', href: '/login' },
  { label: 'Register', href: '/register' },
] as const;

export default function CategoryHamburger({ categories }: CategoryHamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getCategoryHref = (category: string) =>
    category === 'All' ? '/designs' : `/designs?category=${encodeURIComponent(category)}`;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="app-side-menu"
      >
        <span aria-hidden="true">☰</span>
        Menu
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/40"
            aria-label="Close side menu"
            onClick={() => setIsOpen(false)}
          />

          <aside
            id="app-side-menu"
            className="absolute left-0 top-0 h-full w-80 max-w-[85vw] border-r border-slate-200 bg-white p-4 shadow-2xl"
            role="dialog"
            aria-label="Application menu"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-900">Menu</h3>
              <button
                type="button"
                className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={getCategoryHref(category)}
                  className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-violet-50 hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>

            <div className="my-5 border-t border-slate-200" />

            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Quick Navigation</h4>
            <div className="space-y-2">
              {appLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
