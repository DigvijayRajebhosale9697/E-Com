import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../Services/Auth.service";
import "./Signup.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [Credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signup(
        Credentials.name,
        Credentials.email,
        Credentials.password,
        Credentials.geolocation
      );

      if (response.success) {
        navigate("/");
      } else {
        setErrorMessage("Failed to create account");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("USERNAEME / EMAIL ALREADY EXISTS");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...Credentials, [event.target.name]: event.target.value });
    if (event.target.name === "password") {
      setIsTyping(event.target.value.length > 0);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="SignupContainer">
      <div className="SignupIMG">
        <img src="/pngwing.com.png" alt="Signup" />
      </div>
      <div className="RightContainer">
        <div className="RightLoginImg">
          <img src="/Logo_Nwe.png" alt="Logo" />
        </div>
        <label htmlFor="" style={{ marginTop: ".6rem" }}>
          Welcome! Please Signup to your account.
        </label>
        {errorMessage && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            {errorMessage}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setErrorMessage("")}
            ></button>
          </div>
        )}
        <form onSubmit={handleSubmit} className="FORM-S">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              value={Credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="form-group Ip-parent-container">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email Address"
              name="email"
              value={Credentials.email}
              onChange={onChange}
            />
          </div>
          <div
            className="form-group Ip-parent-container"
            style={{ position: "relative" }}
          >
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Please Enter Your Password"
              name="password"
              value={Credentials.password}
              onChange={onChange}
            />
            {isTyping && (
              <span
                onClick={toggleShowPassword}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            )}
          </div>
          <div className="form-group Ip-parent-container">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Address"
              name="geolocation"
              value={Credentials.geolocation}
              onChange={onChange}
            />
          </div>
          <div
            className="lp-parent-container-terms d-flex align-items-baseline"
            style={{ gap: "12px" }}
          >
            <input name="agreement" id="signupCheck" type="checkbox" />
            <label
              htmlFor="signupCheck"
              style={{ marginTop: "12px" }}
              className="label-basic gray-label"
            >
              I agree with all terms and conditions
            </label>
          </div>
          <div className="BTN-Container-Signup">
            <button type="submit" className="submit-BTN mt-3">
              Submit
            </button>
            <Link to="/" className="Login-Link-BTN mt-3">
              Already Have An Account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
