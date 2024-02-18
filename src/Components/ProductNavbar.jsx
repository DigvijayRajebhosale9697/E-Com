import { items } from "./Data";
import { useLocation } from "react-router-dom";

const Navbar = ({ setdata }) => {
  const location = useLocation();

  const filterbycategory = (category) => {
    const elem = items.filter((product) => product.category === category);
    setdata(elem);
  };

  const NoFilter = () => {
    setdata(items);
  };

  return (
    <>
      {location.pathname == "/product" && (
        <div className="nav-bar-wrapper">
          <div className="items">Filter By{"->"}</div>
          <div onClick={() => NoFilter()} className="items HIDE">
            No Filter
          </div>
          <div onClick={() => filterbycategory("mobiles")} className="items">
            Mobiles
          </div>
          <div onClick={() => filterbycategory("laptops")} className="items">
            Laptops
          </div>
          <div onClick={() => filterbycategory("tablets")} className="items">
            Tablets
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
