import React, { useState, useRef, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import "./fonts.js";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import "./formstyle.css";

type FormFields = z.infer<typeof schema>;

const schema = z.object({
  user_email: z.string().email(),
  user_name: z.string().min(2),
  response: z.string().min(10),
});

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const form = useRef<HTMLFormElement>(null);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [thankYouMessage, setThankYouMessage] = useState(false);

  const sendEmail: SubmitHandler<FormFields> = async (data) => {
    try {
      await emailjs.sendForm(
        "gmail_katerina_website",
        "template_edo5tdn",
        form.current as HTMLFormElement,
        "e-zxHR-oxydFohlZC"
      );
      console.log("Email sent successfully!");
      setIsFormVisible(false);
      reset();
      setThankYouMessage(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setError("root", {
        message: "There was an error sending the email.",
      });
    }
  };

  const handleClickOutside = (event: Event) => {
    if (
      form.current &&
      !(form.current as HTMLFormElement).contains(event.target as Node)
    ) {
      setIsFormVisible(false);
    }
  };

  useEffect(() => {
    let timeoutId;

    if (thankYouMessage) {
      timeoutId = setTimeout(() => {
        setThankYouMessage(false);
      }, 3500);
    }

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      clearTimeout(timeoutId);
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [thankYouMessage, isFormVisible, form]);

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
          <form
            ref={form}
            className="contact-container"
            onSubmit={handleSubmit(sendEmail)}
          >
            <div className="contact-form">
              <div className="flex gap-2">
                <div className="flex-1 ">
                  <label htmlFor="firstName"></label>
                  <input
                    {...register("user_name")}
                    name="user_name"
                    placeholder="Name"
                    className="p-2 bg-opacity-0 bg-gray-400"
                    id="firstname"
                  />
                  {errors.user_name && (
                    <div className="text-red-500">
                      {errors.user_name.message}
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <label htmlFor="email"></label>
                  <input
                    {...register("user_email")}
                    name="user_email"
                    placeholder="Email"
                    className="p-2 bg-opacity-0 bg-gray-400"
                    id="email"
                  />
                  {errors.user_email && (
                    <div className="text-red-500">
                      {errors.user_email.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="py-4">
                <label htmlFor="response"> </label>
                <textarea
                  {...register("response")}
                  name="response"
                  placeholder="Message"
                  className="w-full h-60 p-2 mb-4 rounded-md bg-opacity-10 bg-gray-400"
                  id="response"
                />
                {errors.response && (
                  <div className="text-red-500">{errors.response.message}</div>
                )}
              </div>
              <div className="formbutton">
                <button
                  id="formbutton"
                  disabled={isSubmitting}
                  type="submit"
                  className="float-right w-40 bg-opacity-15 bg-gray-100 text-white p-2 rounded-md hover:bg-stone-700 button-background"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
              {errors.root && (
                <div className="text-red-500">{errors.root.message}</div>
              )}
            </div>
          </form>
        </div>
      )}

      {thankYouMessage && (
        <div
          id="feedback"
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-8 rounded-md z-50"
        >
          <p className="text-2xl text-gray-800">
            The message is sent. Thank you for reaching out.
          </p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
