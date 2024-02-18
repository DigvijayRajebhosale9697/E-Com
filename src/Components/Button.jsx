import { useState } from "react";
import Style from "./Button.module.css";

const Button = () => {
  const [NAME, setNAME] = useState("  ");
  const [EMAIL, setEMAIL] = useState(" ");
  const [MESSAGE, setMESSAGE] = useState(" ");
  const [Data, setData] = useState(" ");

  const onViaCall = () => {
    console.log("CLICKED");
  };

  const onSubmit = (e) => {
    e.preventDefault(); // USED TO PREVENT PAGE REFRESH
    alert("DATA SUBMITTED")
    console.log("FORM SUCCESSFULLY SUBMITTED");
    setData(`YOUR DATA IS SUCCESSFULLY SUBMITTED DETAILS ARE AS FOLLOWS:`);
    setNAME(e.target[0].value);
    setEMAIL(e.target[1].value);
    setMESSAGE(e.target[2].value);
  };

  return (
    <div>
      <button type="submit" className={Style.BTN2}>
        <span className="fa-solid fa-envelope BTN2"></span> VIA SUPPORT CHAT
      </button>
      <button type="submit" className={Style.BTN2} onClick={onViaCall}>
        <i className="fa-solid fa-phone-volume"></i> VIA SUPPORT CALL
      </button>
      <br />
      <button type="submit" className={Style.BTN3}>
        <span className="fa-solid fa-envelope BTN2"></span> VIA EMAIL CHAT
      </button>

      <form onSubmit={onSubmit} action="" className={Style.FORMS}>
        <div className={Style.FORM_CONTROL}>
          <label htmlFor="name">NAME</label>
          <input type="text" name="name" />
        </div>

        <div className={Style.FORM_CONTROL}>
          <label htmlFor="email">E-MAIL</label>
          <input type="email" name="email" required='true' />
        </div>

        <div className={Style.FORM_CONTROL}>
          <label htmlFor="text">TEXT</label>
          <textarea name="text" id="" cols="30" rows="4" />
        </div>

        <button type="submit" className={Style.BTN2}>
          SUBMIT
        </button>

        <div className={Style.Data}>
          <div>{Data}</div>
          <div>{NAME}</div>
          <div>{EMAIL}</div>
          <div>{MESSAGE}</div>
        </div>

      </form>
    </div>
  );
};

export default Button;
