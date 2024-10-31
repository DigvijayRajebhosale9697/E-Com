import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiLogOut } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <header className="sticky-top">
      <div className="nav-bar">
        <Link to={"/"} id="A" className="brand">
          {authToken ? (
            <FiLogOut
              onClick={handleLogout}
              style={{ fontSize: "2.5rem", cursor: "pointer" }}
              title="Logout"
            />
          ) : (
            <TbTruckDelivery style={{ fontSize: "2.5rem" }} />
          )}
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
  );
};

export default Navbar;
