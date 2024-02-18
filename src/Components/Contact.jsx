
import Style from './Contact.module.css'
import ContactForm from './ContactForm'
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <h1 className={Style.Heading} > Contact Us</h1>
      <p className={Style.Paragraph}>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
      <ContactForm/>
      <Footer/>
    </div>

  )
}

export default Contact
