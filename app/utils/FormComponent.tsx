import React, { useState, useRef, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./formoverlay.css";

type FormFields = {
  email: string;
  message: string;
  name: string;
};

const FormComponent = () => {
  const { register, handleSubmit } = useForm<FormFields>();
  const [isFormVisible, setIsFormVisible] = useState(true);
  const formRef = useRef(null);

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    // Additional form submission logic if needed
  };

  const handleClickOutside = (event: Event) => {
    const formElement = formRef.current as HTMLFormElement | null;

    if (formElement && !formElement.contains(event.target as Node)) {
      // Clicked outside the form, hide the form
      setIsFormVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener to body when component mounts
    document.body.addEventListener("click", handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCloseClick = () => {
    // Close button clicked, hide the form
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
          <form
            ref={formRef}
            className="contact-container"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="contact-form">
              <div className="flex gap-2">
                <div className="flex-1">
                  <label htmlFor="email">Email:</label>
                  <input
                    {...register("email")}
                    placeholder="Email"
                    className="w-full p-2 rounded-md border"
                    id="email"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="name">Name:</label>
                  <input
                    {...register("name")}
                    placeholder="Name"
                    className="w-full p-2 rounded-md border"
                    id="name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  {...register("message")}
                  placeholder="Message"
                  className="w-full p-2 mb-4 rounded-md border"
                  id="message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
