import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import ProductNavbar from './ProductNavbar'

const Product = ({ items, setdata, cart, setcart }) => {
  const AddToCart = (id, price, title, description, imgSrc) => {
    const Obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setcart([...cart, Obj]);
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
      <ProductNavbar setdata={setdata}/>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div
                  key={product.id}
                  className="col-lg-4 my-3 col-md-6 text-center d-flex justify-content-center "
                >
                  <div className="card" style={{ width: "20rem" }}>
                    <Link
                      to={`/product/${product.id}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src={product.imgSrc} className="card-img-top" />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>

                      <button className="btn btn-primary mx-3">
                        ₹{product.price}
                      </button>
                      <button
                        onClick={() =>
                          AddToCart(
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
                </div>
              </>
            );
          })}
        </div>
        <div className="CC" style={{ marginTop: "150px" }}></div>
      </div>
      <Footer/>
    </>
  );
};

export default Product;
