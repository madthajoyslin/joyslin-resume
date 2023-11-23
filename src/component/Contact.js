import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/Contact.css";
import Loader from "./Loader";
import Footer from "./Footer";

function Contact() {
  const [loader, setloader] = useState();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setloader(true);
    emailjs
      .sendForm(
        "service_bz8631d",
        "template_mwm5iij",
        form.current,
        "_uR9IL8Hx-926PWRn"
      )
      .then(
        (result) => {
          alert("message sent");
          setloader(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        {!loader ? <input type="submit" value="Send" /> : <Loader />}
      </form>
      <Footer/>
    </>
  );
}
export default Contact;
