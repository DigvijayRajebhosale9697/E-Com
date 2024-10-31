import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const Product_Details = ({ cart, setCart, items }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.find((product) => product._id === id);
    setProduct(filterProduct);

    if (filterProduct) {
      const related = items.filter(
        (p) =>
          p.category === filterProduct.category && p._id !== filterProduct.id
      );
      setRelatedProducts(related);
    }
  }, [id, items]);

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = { id, price, title, description, imgSrc };
    setCart([...cart, obj]);
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
      {product && (
        <div className="container con d-flex flex-wrap">
          <div className="img">
            <img src={product.imgSrc} alt={product.title} />
          </div>
          <div className="text-center">
            <h1 className="card-title">{product.title}</h1>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary mx-3">₹{product.price}</button>
            <button
              onClick={() =>
                addToCart(
                  product.id,
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
      )}
      <h1 className="text-center" style={{ marginTop: "8vh" }}>
        Related Products
      </h1>
      <div className="container my-5">
        <div className="row">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
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
    </>
  );
};

export default Product_Details;
