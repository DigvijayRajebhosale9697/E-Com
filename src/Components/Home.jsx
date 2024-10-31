import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "./Footer/Footer";
import Carousel from "../Carousel";
import ProductGrid from "../Productgrid";
import DealOfTheDay from "./Deal";

const Home = () => {
  return (
    <>
      <div className="HomeContainer">
        <div className="Left">
          <h1>
            {" "}
            YOU <br /> DESERVE <br /> THE BEST{" "}
          </h1>
          <p>
            YOU DESERVE BEST AND WERE HERE TO <br />
            HELP YOU WITH OUR PRODUCTS.
          </p>
          <button className="btn-danger SBTN BTN">
            <Link to="/product">SHOP NOW</Link>
          </button>
          <button className="CBTN BTN">
            <Link to="/product">CATEGORY</Link>
          </button>
          <h5 style={{ margin: "14px" }}>Our Partners:</h5>
          <div className="Logoss">
            <a
              href="https://www.amazon.in/s?k=nike+red+shoes&crid=3G97PIMQHJLSV&sprefix=nike+red+shoe%2Caps%2C236&ref=nb_sb_noss_1"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/Image/A.png" alt="" height="80px" />
            </a>
            <a
              href="https://www.flipkart.com/search?q=nike%20red%20shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/Image/F.png" alt="" height="80px" />
            </a>
          </div>
        </div>
        <div className="Right">
          <img src="/Image/Home3.png" alt="" height="550px" />
        </div>
      </div>
      <Carousel />
      <ProductGrid />

      <Footer />
    </>
  );
};

export default Home;
