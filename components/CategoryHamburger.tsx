'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CategoryHamburgerProps {
  categories: readonly string[];
}

export default function CategoryHamburger({ categories }: CategoryHamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getCategoryHref = (category: string) =>
    category === 'All' ? '/designs' : `/designs?category=${encodeURIComponent(category)}`;

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Open shop by category menu"
      >
        <span aria-hidden="true">☰</span>
        Shop by Category
      </button>

      {isOpen ? (
        <div
          className="absolute left-0 z-20 mt-2 w-56 rounded-lg border border-slate-200 bg-white p-2 shadow-lg"
          role="menu"
          aria-label="Shop by Category"
        >
          {categories.map((category) => (
            <Link
              key={category}
              href={getCategoryHref(category)}
              className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-violet-50 hover:text-accent"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              {category}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
