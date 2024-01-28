import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./fonts.js";
import "./formstyle.css";

 


const form = useRef(null);

export const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        currentForm,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [isFormVisible, setIsFormVisible] = useState(true);
  const handleClickOutside = (event: Event) => {
    const formElement = formRef.current as HTMLFormElement | null;
    if (formElement && !formElement.contains(event.target as Node)) {
      setIsFormVisible(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCloseClick = () => {
    setIsFormVisible(false);
  };







  return (
    <div>
      {isFormVisible && (
        <div className="form-overlay">
          <button
            type="button"
            className="close-button"
            onClick={handleCloseClick}
          />
          <form ref={form} onSubmit={sendEmail}
            className="contact-container"       
          >
            <div className="contact-form">
              <div className="flex gap-2">
                <div className="flex-1">
                  <label>Email</label>
                  <input type="text" name="user_email" placeholder="Email" className="w-72 p-2 bg-opacity-0 bg-gray-400" id="email" />
                 </div>
                <div className="flex-1 ">
                  <label>Name</label>
                  <textarea type="text"  name="message" placeholder="Message" className="w-full p-2 bg-opacity-0 bg-gray-400" id="response"/>
                                       </div>
                   
                </div>
              </div>

              <div className="py-4">
                <label>Message</label>
                <textarea type="text" 
                  placeholder="Message"
                  className="w-full h-60 p-2 mb-4 rounded-md bg-opacity-10 bg-gray-400"
                  id="response"
                />
                 
              </div>
              <div className="formbutton">
                <button
                  id="formbutton"
                  disabled={isSubmitting}
                  type="submit"
                  className="float-right w-20 bg-opacity-15 bg-gray-100 text-white p-2 rounded-md hover:bg-stone-700"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
              
            </div>
          </form>
        </div>
      )}
    </div>
  );
};








 