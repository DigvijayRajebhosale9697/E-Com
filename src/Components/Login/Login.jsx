/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Services/Auth.service";
import "./Login.css";

const Login = () => {
  const [Credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  let Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(Credentials.email, Credentials.password);
      if (!response.success) {
        alert("Invalid credentials");
      } else {
        Navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request");
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
    <div className="Login-Container">
      <div className="leftLoginImg">
        <img src="/pngwing.com.png" alt="Left Login" />
      </div>
      <div className="RightContainer">
        <div className="RightLoginImg">
          <img src="/Logo_Nwe.png" alt="Logo" />
        </div>
        <label htmlFor="" style={{ marginTop: ".6rem" }}>
          Welcome back! Please login to your account.
        </label>
        <form onSubmit={handleSubmit} className="FORM-S">
          <div className="form-group Ip-parent-container">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Please Enter Your Email Address"
              name="email"
              value={Credentials.email}
              onChange={onChange}
            />
          </div>
          <div
            className="form-group Ip-parent-container"
            style={{ marginTop: "1.2rem", position: "relative" }}
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

          <div className="lp-remPass-container">
            <div className="RememberIP">
              <input id="remember" type="checkbox" />
              <label className="gray-label" htmlFor="remember">
                Remember Me
              </label>
            </div>
            <Link to="forgot">
              <label className="blue-label">Forgot Password?</label>
            </Link>
          </div>

          <div className="BTN-Container">
            <button type="submit" className="Login-BTN">
              Login
            </button>
            <Link to="/createUser" className="Signup-BTN">
              Don't Have An Account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
