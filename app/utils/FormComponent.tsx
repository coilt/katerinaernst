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
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const form = useRef<HTMLFormElement>(null);

  const sendEmail: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Data submitted:", data);

      // Use emailjs to send the form data
      emailjs
        .sendForm(
          "gmail_katerina_website",
          "template_edo5tdn",
          form.current,
          "e-zxHR-oxydFohlZC"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (error) {
      setError("root", {
        message: "There was an error sending the email.",
      });
    }
  };

  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleClickOutside = (event: Event) => {
    const formElement = form.current! as HTMLFormElement | null;

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
          <form
            ref={form}
            className="contact-container"
            onSubmit={handleSubmit(sendEmail)}
          >
            <div className="contact-form">
              <div className="flex gap-2">
                <div className="flex-1">
                  <label htmlFor="email"></label>
                  <input
                    {...register("user_email")}
                    name="user_email"
                    placeholder="Email"
                    className="w-72 p-2 bg-opacity-0 bg-gray-400"
                    id="email"
                  />
                  {errors.user_email && (
                    <div className="text-red-500">
                      {errors.user_email.message}
                    </div>
                  )}
                </div>
                <div className="flex-1 ">
                  <label htmlFor="firstName"></label>
                  <input
                    {...register("user_name")}
                    name="user_name"
                    placeholder="Name"
                    className="w-full p-2 bg-opacity-0 bg-gray-400"
                    id="firstname"
                  />
                  {errors.user_name && (
                    <div className="text-red-500">
                      {errors.user_name.message}
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
                  className="float-right w-20 bg-opacity-15 bg-gray-100 text-white p-2 rounded-md hover:bg-stone-700"
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
    </div>
  );
};

export default FormComponent;
