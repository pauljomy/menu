import MenuItem from "./MenuItem";

const MenuItems = ({ menuItems }) => {
  return (
    <div className="grid grid-cols-3 gap-12 px-12 rounded-sm ">
      {menuItems.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default MenuItems;
