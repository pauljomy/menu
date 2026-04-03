const Buttons = ({ categories, handleCategory }) => {
  return (
    <div className="flex gap-4 mb-8 ">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategory(category)}
          className="w-full bg-amber-600 px-4 py-1 text-white capitalize rounded-sm cursor-pointer"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
