import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "./Footer";

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
          <h5 style={{margin:'14px'}}>Our Partners:</h5>
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
          <img
            src="/Image/Home3.png"
            alt=""
            height="550px" 
          />
        </div>
      </div>

      <div className="AboutUs">
        <h1 className="ABH">OUR STORY..!</h1>
        <div className="RIGHTLEFT">
          <h2>Welcome to Our E-Com Website - Where Shopping Finds Its Joy!</h2>
          <p>
            At Our E-Com Website, we believe that every shopping experience
            should be more than just a transaction; it should be an adventure, a
            journey filled with joy, excitement, and discovery. Our story is one
            of passion, dedication, and a relentless commitment to providing you
            with the best E-Com experience possible.
          </p>

          <div>
            <h2>Our Humble Beginning</h2>
            <p>
              It all started with a simple idea: to create a platform that not
              only offers a wide range of products but also transforms the way
              you shop online. In [Year Founded], a group of enthusiasts
              gathered with a shared vision to build [Your E-Com Website], an
              E-Com destination that goes beyond the ordinary.
            </p>
          </div>

          <div>
            <h2>Our Mission</h2>
            <p>
              Our mission is clear - to bring joy to your doorstep. We strive to
              curate a diverse selection of high-quality products that cater to
              every need and desire. Whether youre seeking the latest trends,
              timeless classics, or innovative gadgets, [Your E-Com Website] is
              your one-stop destination.
            </p>
          </div>
        </div>
      </div>

      <div className="I">
        <h1>Welcome To E-Com Store!</h1>
        <p>
          Elevate your run with the Nike,Puma,Adidas.Featuring a responsive Zoom
          Air unit, breathable mesh upper, and secure Flywire cables, these
          shoes offer optimal comfort and support. The durable traction outsole
          ensures a reliable grip, making them perfect for both road and trail
          running. Step into performance and style order your pair today. Also
          Check The Electronic Items From E-Com,And Coming Sooon With To Mens
          Wear aAnd Womens Wear And Kidz Wear Too...
        </p>
        <h1 style={{ textAlign: "center" }}>Featured Products</h1>
        <div className="C">
          <div className="C1">
            <img src="/Image/pngwing.com (21).png" alt="" />
          </div>
          <div className="C1">
            <img src="/Image/pngwing.com (22).png" alt="" />
          </div>
          <div className="C1">
            <img
              src="/Image/nike-free-nike-air-max-sneakers-shoe-red-shoes-78c3ee1eb5170ce50ef0c55755e33899.png"
              alt=""
            />
          </div>
        </div>
        <div className="C2">
          <img src="/Image/pngwing.com (25).png" alt="" />
        </div>
        <button className="SBTN BTN">
            <Link to="/product">SHOP NOW</Link>
          </button>
          <div className="CC" style={{marginTop:"25px"}}></div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
