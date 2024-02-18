import Footer from "./Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="AboutUsP">
        {/* <h1 className="ABHP">About Us</h1> */}
        <div className="AC">
          <div className="L">
            <img src="/Image/Home.png" alt="" />
          </div>
          <div className="R">
            <h1>Join Us on This Journey</h1>
            <p>
              {" "}
              <p>
                As we continue to grow and expand our offerings, we invite you
                to join us on this exciting journey. E-Com Website is more than
                just an E-Com; its a community of passionate shoppers who
                appreciate the thrill of finding the perfect item. Thank you for
                being a part of the E-Com Website family. Lets make every
                shopping experience unforgettable! Happy shopping! <br /><strong> [Digvijay
                Rajebhosale] <br /> Founder, [E-Com Website] </strong>
              </p>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
