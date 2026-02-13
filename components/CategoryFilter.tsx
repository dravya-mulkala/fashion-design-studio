interface CategoryFilterProps {
  categories: readonly string[];
  activeCategory: string;
}

export default function CategoryFilter({ categories, activeCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <span
            key={category}
            className={`rounded-full border px-4 py-2 text-sm ${
              isActive
                ? 'border-accent bg-violet-50 text-accent'
                : 'border-slate-200 bg-white text-slate-600'
            }`}
          >
            {category}
          </span>
        );
      })}
    </div>
  );
}
