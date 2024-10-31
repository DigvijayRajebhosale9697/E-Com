import { useLocation } from "react-router-dom";

const Navbar = ({ filterByCategory }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/product" && (
        <div className="nav-bar-wrapper">
          <div className="items">Filter By{" -> "}</div>
          <div onClick={() => filterByCategory("all")} className="items HIDE">
            No Filter
          </div>
          <div onClick={() => filterByCategory("mobiles")} className="items">
            Mobiles
          </div>
          <div onClick={() => filterByCategory("laptops")} className="items">
            Laptops
          </div>
          <div onClick={() => filterByCategory("tablets")} className="items">
            Tablets
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
