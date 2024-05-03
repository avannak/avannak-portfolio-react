"use client";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import ContactForm from "../../PageComponents/contact/ContactForm";

const ContactPage = ({ setActiveRoute }: any) => {
  return (
    <>
      <motion.section
        className="contact-page-container"
        id="contact-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.3,
          x: { duration: 0.2 },
        }}
        exit={{ opacity: 0 }}
      >
        <div className="contact-section" id="contact-section">
          <ContactForm setActiveRoute={setActiveRoute} />
        </div>
      </motion.section>
    </>
  );
};

export default ContactPage;
