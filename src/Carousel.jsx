import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/Image/dslr.jpg"
              className="d-block w-100"
              alt="DSLR Camera"
            />
            <div
              className="carousel-caption d-flex flex-column align-items-start justify-content-center"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <h3>DSLR Camera</h3>
              <p>High quality, professional camera for stunning images.</p>
              <Link to="/product">
                {" "}
                <button className="btn btn-warning mt-2">Shop Now</button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/Image/earbuds.jpg"
              className="d-block w-100"
              alt="Earbuds"
            />
            <div
              className="carousel-caption d-flex flex-column align-items-start justify-content-center"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <h3>Earbuds</h3>
              <p>Experience the best sound quality with wireless earbuds.</p>
              <Link to="/product">
                {" "}
                <button className="btn btn-warning mt-2">Shop Now</button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/Image/headset.jpg"
              className="d-block w-100"
              alt="Headset"
            />
            <div
              className="carousel-caption d-flex flex-column align-items-start justify-content-center"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <h3>Headset</h3>
              <p>Perfect for immersive sound and comfort during long use.</p>
              <Link to="/product">
                {" "}
              <button className="btn btn-warning mt-2">Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
