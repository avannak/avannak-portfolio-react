import Image from "next/image";
import React, { useState, FormEvent } from "react";
import { MdContactMail } from "react-icons/md";
import gmailPixel from "../../assets/images/gmail-pixel.png";

type Props = {};

const ContactForm = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log("Form submitted!");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="input-group">
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <textarea
            id="message"
            placeholder="Enter Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="pushable">
          <span className="shadow"></span>
          <span className="edge blue"></span>
          <span className="front blue">Get In Touch</span>
        </button>
      </div>
      <div className="image-container">
        <div className="description">
          <span>
            You can fill out the form or shoot a message straight to my inbox:
          </span>
          <span>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=arthurvat7@gmail.com&body">
              arthurvat7@gmail.com
            </a>
          </span>
        </div>
        <div className="image">
          <Image
            id="gmail-pic"
            src={gmailPixel}
            alt="gmail-pixel"
            height={374}
            width={510}
          ></Image>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
