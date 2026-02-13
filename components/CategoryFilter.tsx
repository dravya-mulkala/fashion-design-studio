'use client';

import { useState } from 'react';

interface CategoryFilterProps {
  categories: readonly string[];
  activeCategory: string;
  onCategoryChange?: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState(activeCategory);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = category === selectedCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => handleCategorySelect(category)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
              isActive
                ? 'border-accent bg-violet-50 text-accent'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
