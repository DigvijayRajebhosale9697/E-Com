
import { items } from "./Data";

const FilterBy = ({ setdata }) => {
  
  const filterbycategory = (category) => {
    const elem = items.filter((product) => product.category === category);
    setdata(elem);
  };

  return (
    <>
        <div className="nav-bar-wrapper">
          <div className="items">Filter By{"->"}</div>
          <div className="items">No Filter</div>
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

    </>
  );
};

export default FilterBy;
