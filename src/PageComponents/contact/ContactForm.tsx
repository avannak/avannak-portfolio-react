"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import gmailPixel from "../../assets/images/gmail-pixel.webp";
import { useForm } from "react-hook-form";
import axios from "axios";
import Header from "@/components/Header";
import smiley from "../../assets/images/smiley.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const ContactForm = (props: Props) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<IFormInput>({ mode: "onChange" });
  const onSubmit = (data: any) => {
    console.log("Form Submitted! Here is what was submitted: ", data);
    axios
      .post("https://eopvtqqy312v6wt.m.pipedream.net", data)
      .then((res) => {
        setLoading(true);
        setSuccessMessage(
          `Thank you for submitting a message! I will try to get back to you as soon as possible. Check your inbox for updates 😃`
        );
      })
      .catch((e) => console.error(e));
    // https://eopvtqqy312v6wt.m.pipedream.net
  };
  interface IFormInput {
    name: string;
    email: string;
    message: string;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-container">
        <div className="header-container-contact-form">
          <p className="contact-form title" style={{ textAlign: "center" }}>
            <FontAwesomeIcon className="font-awesome-icon" icon={faPhone} />
            Contact Form{" "}
          </p>
        </div>
        <div className="input-group">
          <input
            placeholder="Your Name"
            id="name"
            required
            {...register("name", {
              required: "Name is required.",
              minLength: {
                value: 1,
                message: "Your message should be at least 1 character long.",
              },
              pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: "Invalid name. Only letters allowed.",
              },
            })}
            className="input"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>
        <div className="input-group">
          <input
            placeholder="Email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email.",
              },
            })}
            id="email"
            required
            className="input"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className="input-group">
          <textarea
            id="message"
            placeholder="Enter Your Message"
            {...register("message", {
              required: "Message is required.",
              minLength: {
                value: 10,
                message: "Your message should be at least 10 characters long.",
              },
              maxLength: {
                value: 500,
                message: "Your message can be up to 500 characters long.",
              },
            })}
            required
          />
          {errors.message && <p className="error">{errors.message.message}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
        </div>
        <button
          className={`pushable contact${
            loading || !isDirty || !isValid ? " disabled" : ""
          }`}
          type="submit"
        >
          <span className="shadow"></span>
          <span className="edge blue"></span>
          <span className="front blue">Send Message</span>
        </button>
      </div>
      <div className="image-container">
        <div className="description">
          <div className="header-container">
            <p className="contact-form title" style={{ textAlign: "center" }}>
              <FontAwesomeIcon
                className="font-awesome-icon"
                icon={faMailBulk}
              />
              My Email{" "}
            </p>
          </div>
          <span>Shoot a message straight to my inbox:</span>
          <span>
            <a
              id="email-link"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=arthurvat7@gmail.com&body"
            >
              arthurvat7@gmail.com
            </a>
          </span>
          <div className="image">
            <Image
              id="gmail-pic"
              src={gmailPixel}
              alt="gmail-pixel"
              height={374}
              width={510}
              placeholder="blur"
            ></Image>
          </div>
        </div>
        <Header />
      </div>
    </form>
  );
};

export default ContactForm;
