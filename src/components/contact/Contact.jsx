import React, { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";
import emailjs from "emailjs-com";
export const Contact = () => {
  let arr = [
    {
      icon: <MdOutlineEmail className="contact_option_icon" />,
      h4: "Email",
      h5: "rehankhanabdali@gmail.com",
      link: "mailto:rehankhanabdali@gmail.com",
    },
    {
      icon: <RiMessengerLine className="contact_option_icon" />,
      h4: "Messenger",
      h5: "M Rehan Khan",
      link: "https://m.me/rahankhan.khan.50702",
    },
    {
      icon: <BsWhatsapp className="contact_option_icon" />,
      h4: "WhatsApp",
      h5: "+123456789",
      link: "https://api.whatsapp.com/send?phone=+03174079966",
    },
  ];
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gayj1w8",
        "template_1c9xbvr",
        form.current,
        "xGmvWqO4q9GtcR9yS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          {arr.map((item) => {
            const { icon, h4, h5, link } = item;
            return (
              <article className="contact_option">
                {icon}
                <h4>{h4}</h4>
                <h5>{h5}</h5>
                <a href={link} target="_blank">
                  Send a message
                </a>
              </article>
            );
          })}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
