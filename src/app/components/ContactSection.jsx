"use client";

import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import contact from "../../../public/assets/images/contact.json";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { formValidationSchema } from "../validations/formValidationSchema";
import { motion as m } from "framer-motion";

function ContactSection() {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      subject: "",
      message: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values, { resetForm }) => {
      if (formik.isValid)
        emailjs
          .sendForm(
            "service_akttvxf",
            "template_r3e0vkb",
            form.current,
            "JKMPUz_UMIju4Rhfi"
          )
          .then(
            () => {
              setIsFormSubmitted(true);
              resetForm();
            },
            (error) => {
              setFormError(true);
              console.log(error.text);
            }
          );
    },
  });

  useEffect(() => {
    if (isFormSubmitted) {
      const timer = setTimeout(() => {
        setIsFormSubmitted(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isFormSubmitted]);

  useEffect(() => {
    if (formError) {
      const timer = setTimeout(() => {
        setFormError(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [formError]);

  return (
    <div id="contact">
      <h2 className="mt-28 text-center text-5xl font-extrabold mb-16">
        Contact Me
      </h2>
      <div className="flex gap-5">
        <div className="w-1/3 p-5 bg-black rounded-md shadow-[inset_0px_0px_20px_0px_rgba(255,255,255,1)]">
          <Lottie animationData={contact} style={{ width: "100%" }} />
          <h3 className="text-4xl text-center font-bold tracking-wide mb-1">
            Pranjul Agrawal
          </h3>
          <h4 className="text-center text-lg font-medium text-red-500 mb-3">
            Software Developer
          </h4>
          <p className="text-gray-400 text-lg mb-3">
            I am available for freelance work. Connect with me via and call in
            to my account.
          </p>
          <div className="text-gray-400 text-lg">
            Phone:{" "}
            <a href="tel:+919639901801" className="text-[#d1d5db]">
              +919639901801
            </a>
          </div>
          <div className="text-gray-400 text-lg">
            Email:{" "}
            <a
              href="mailto:pranjulagrawal9@gmail.com"
              className="text-[#d1d5db]"
            >
              pranjulagrawal9@gmail.com
            </a>
          </div>
        </div>
        <div className="w-2/3 bg-black rounded-lg shadow-[inset_0px_0px_20px_0px_rgba(255,255,255,1)]">
          <form
            className="p-5 w-full flex flex-col gap-5"
            ref={form}
            onSubmit={formik.handleSubmit}
          >
            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="Name"
                id="name"
                name="user_name"
                onChange={formik.handleChange}
                value={formik.values.user_name}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="name" className="form__label uppercase">
                Your name
              </label>
              {formik.touched.user_name && formik.errors.user_name && (
                <div className="text-red-500">{formik.errors.user_name}</div>
              )}
            </div>

            <div className="form__group field">
              <input
                type="email"
                className="form__field"
                placeholder="Email"
                id="email"
                name="user_email"
                onChange={formik.handleChange}
                value={formik.values.user_email}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="email" className="form__label uppercase">
                Email
              </label>
              {formik.touched.user_email && formik.errors.user_email && (
                <div className="text-red-500">{formik.errors.user_email}</div>
              )}
            </div>

            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="Subject"
                id="subject"
                name="subject"
                onChange={formik.handleChange}
                value={formik.values.subject}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="subject" className="form__label uppercase">
                Subject
              </label>
              {formik.touched.subject && formik.errors.subject && (
                <div className="text-red-500">{formik.errors.subject}</div>
              )}
            </div>

            <div className="mt-3">
              <label htmlFor="message" className="text-[#9b9b9b] uppercase">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur}
                className="mt-3 resize-none w-full min-h-[235px] border border-[#9b9b9b] bg-transparent p-3 rounded-lg focus:bg-white focus:outline focus:outline-2 focus:outline-red-600 transition-all duration-300 focus:text-gray-500"
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-500">{formik.errors.message}</div>
              )}
            </div>

            {isFormSubmitted && (
              <m.div
                className="text-green-500 font-semibold text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Your submission is appreciated. Thank you!. You can expect to
                hear back within 24 hours.
              </m.div>
            )}

            {formError && (
              <m.div
                className="text-red-500 font-semibold text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Oops! Something went wrong. Please re-submit after sometime.
              </m.div>
            )}

            {!isFormSubmitted && !formError && (
              <m.button
                type="submit"
                className="w-28 bg-red-600 py-2 rounded-lg hover:bg-red-700 font-semibold active:scale-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Send
              </m.button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
