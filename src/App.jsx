import menu from "./data.js";
import { useState } from "react";
import MenuItems from "./components/MenuItems.jsx";
import Buttons from "./components/Buttons.jsx";

const category = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

  const handleCategory = (category) => {
    const newArray = menu.filter((item) => item.category === category);

    if (category === "all") {
      setMenuItems(menu);
      return;
    }

    setMenuItems(newArray);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="my-16 text-4xl underline underline-offset-24">Our Menu</h1>
      <Buttons categories={category} handleCategory={handleCategory} />
      <MenuItems menuItems={menuItems} />
    </div>
  );
};

export default App;
