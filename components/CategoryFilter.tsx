import Link from 'next/link';

interface CategoryFilterProps {
  categories: readonly string[];
  activeCategory: string;
  getCategoryHref?: (category: string) => string;
  onCategoryChange?: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  getCategoryHref,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        const className = `rounded-full border px-4 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
          isActive
            ? 'border-accent bg-violet-50 text-accent'
            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
        }`;

        if (getCategoryHref) {
          return (
            <Link key={category} href={getCategoryHref(category)} className={className}>
              {category}
            </Link>
          );
        }

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange?.(category)}
            className={className}
            aria-pressed={isActive}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
