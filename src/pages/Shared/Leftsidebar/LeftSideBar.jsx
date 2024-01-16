import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">All Categories</h2>
      <div className="">
        {categories.map((category) => (
          <NavLink
            className="block py-4 "
            key={category.id}
            category={category}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
