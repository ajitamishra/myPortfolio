import "./contact.scss";
import { useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm('service_9se64ql', 'template_t11bq06', e.target, 'user_OsAcDKZnoVmSRUqUf6u1q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setMessage(true);
    e.target.reset()
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name"/>
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="Subject" name="subject"/>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit" value="Send">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
