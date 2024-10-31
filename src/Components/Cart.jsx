/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const calculateTotalAmount = () => {
    return cart.reduce((total, product) => total + Number(product.price), 0);
  };

  // Calculate subtotal and total amount
  const subtotal = calculateTotalAmount();

  const handleRazorpayPayment = () => {
    const options = {
      key: "rzp_test_SUnNlKQa53NqL8", // Replace with your Test API Key
      amount: subtotal * 100, // Amount in smallest currency unit
      currency: "INR",
      name: "Your Store Name",
      description: "Purchase Description",
      image: "your_logo_url", // Optional: add your logo URL
      handler: function (response) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
        setCart([]); // Clear cart after payment success
      },
      prefill: {
        name: "Digvijay",
        email: "customer@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <div className="container my-5" style={{ width: "54%" }}>
        {cart.length === 0 ? (
          <div className="text-center">
            <h1 style={{ textTransform: "capitalize" }}>Your Cart is Empty</h1>
            <Link to={"/product"} className="btn btn-warning">
              Continue Shopping...
            </Link>
          </div>
        ) : (
          <>
            {cart.map((product) => (
              <div
                key={product.id}
                className="card mb-3 my-5"
                style={{ maxWidth: "800px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={product.imgSrc}
                      className="img-fluid rounded-start"
                      alt={product.title}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center my-5">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-primary mx-3">
                        ₹{product.price}
                      </button>
                      <button className="btn btn-warning">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Display subtotal */}
            <div className="text-center my-4">
              <h4>Subtotal: ₹{subtotal}</h4>
            </div>
          </>
        )}
      </div>

      {cart.length !== 0 && (
        <div
          className="container text-center my-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleRazorpayPayment}
            className="btn btn-success mx-3"
          >
            Pay with Razorpay
          </button>
          <button onClick={() => setCart([])} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
