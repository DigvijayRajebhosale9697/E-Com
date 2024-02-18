import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = ({ cart }) => {
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} id="A" className="brand">
          <TbTruckDelivery style={{fontSize:'2.5rem'}}/>
          </Link>

          <div className="Middle_Con">
            <Link id="B" className="Li" to={"/"}>
              Home
            </Link>
            <Link className="Li" to={"/About"}>
              About
            </Link>
            <Link className="Li" to={"/product"}>
              Products
            </Link>
            <Link className="Li" to={"/Contact"}>
              Contact
            </Link>
          </div>

          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <FiShoppingCart style={{ fontSize: "1.2rem" }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
