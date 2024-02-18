import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { items } from "./Data";
import { useEffect, useState } from "react";
import Product from "./Product";

const Product_Details = ({ cart, setcart }) => {
  const { id } = useParams();

  const [product, setproduct] = useState({});
  const [RelatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterproduct = items.filter((product) => product.id == id);
    setproduct(filterproduct[0]);

    const RelatedProducts = items.filter(
      (p) => p.category === product.category
    );
    setRelatedProducts(RelatedProducts);
  }, [id, product.category]);

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
      <div className="container con d-flex flex-wrap" >
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>

          <button className="btn btn-primary mx-3">₹{product.price}</button>
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
      <h1 className="text-center" style={{marginTop:'8vh'}}>Related Products</h1>
      <Product items={RelatedProducts} cart={cart} setcart={setcart} />
    </>
  );
};

export default Product_Details;
