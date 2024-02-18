import Styles from "./ContactForm.module.css";
import Button from "./Button";

const ContactForm = () => {
  return (
    <section className={Styles.Container}>
      <div className={Styles.ContactForm}>
        <Button />
      </div>
      <div className={Styles.ContactIMG}>
        <img src="/Image/CONTACT.png" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
