import React from 'react';

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const categories = ['Startups', 'Security', 'AI', 'Apps', 'Tech'];

  return (
    <div className="px-4 mb-8 lg:space-x-16 flex flex-wrap items-center gap-[30px] border-b-2 py-5 text-gray-900 font-semibold">
      <button
        className={`${!activeCategory  ? 'active-button' : ''}`}
        onClick={() => onSelectCategory(null)}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`${activeCategory === category ? 'active-button' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
