import { Link } from "react-router-dom";

const ProductCard = ({ backgroundImage, discount, title, subTitle }) => {
  return (
    <div
      className="card text-center p-3 mt-4 mb-4"
      style={{
        borderRadius: "15px",
        color: "white",
        width: "25rem",
        height: "300px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="position-relative">
        <div
          className="position-absolute top-0 end-0 p-2"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          {discount}
        </div>
      </div>
      <div className="card-body d-flex flex-column justify-content-center align-items-end">
        <h2 className="card-title mb-2 ">
          {title} <br />
          {subTitle}
        </h2>
        <Link to="/product">
          {" "}
          <button className="btn btn-warning mt-2">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const products = [
    {
      backgroundImage: "/Image/banner1.jpg",
      discount: "60% Off",
      title: "Wireless",
      subTitle: "Device",
    },
    {
      backgroundImage: "/Image/banner2.jpg",
      discount: "60% Off",
      title: "Wired",
      subTitle: "Earbuds",
    },
    {
      backgroundImage: "/Image/banner3.jpg",
      discount: "60% Off",
      title: "Smart",
      subTitle: "Watches",
    },
  ];

  return (
    <div className="d-flex justify-content-around gap-4 flex-wrap">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          backgroundImage={product.backgroundImage}
          discount={product.discount}
          title={product.title}
          subTitle={product.subTitle}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
