import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer/Footer";
import ProductNavbar from "./ProductNavbar";

const Product = ({ cart, setCart, items, filterByCategory }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const Obj = { id, price, title, description, imgSrc };
    setCart([...cart, Obj]);
    toast.success("Added To Cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  console.log(items, "items");

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ProductNavbar filterByCategory={filterByCategory} />
      <div className="container my-5">
        <div className="row">
          {items.map((product) => (
            <div
              key={product._id}
              className="col-lg-4 my-3 col-md-6 text-center d-flex justify-content-center"
            >
              <div className="card" style={{ width: "20rem" }}>
                <Link
                  to={`/product/${product._id}`}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt={product.title}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mx-3">
                    ₹{product.price}
                  </button>
                  <button
                    onClick={() =>
                      addToCart(
                        product._id,
                        product.price,
                        product.title,
                        product.description,
                        product.imgSrc
                      )
                    }
                    className="btn btn-warning"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="CC" style={{ marginTop: "150px" }}></div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
