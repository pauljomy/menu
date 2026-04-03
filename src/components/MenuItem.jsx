const MenuItem = ({ id, title, price, img, desc }) => {
  return (
    <div className="overflow-hidden rounded-sm shadow-sm mb-12">
      <img src={img} alt={title} className="object-cover w-90 h-60 mb-6" />
      <div className="px-5">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl capitalize font-medium">{title}</h2>
          <p>{price}</p>
        </div>
        <p className="leading-7 text-slate-500 mb-4">{desc}</p>
      </div>
    </div>
  );
};

export default MenuItem;
