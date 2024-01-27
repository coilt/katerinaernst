import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  email: string;
  message: string;
  name: string;
};

const FormComponent = () => {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <form className="contact gap-2" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email")}
        type="text" // Use type="text" for text input
        placeholder="Email"
        className="w-full p-2 mb-4 rounded-md"
      />
      <input
        {...register("name")}
        type="text" // Use type="text" for text input
        placeholder="Name"
        className="w-full p-2 mb-4 rounded-md"
      />
      <textarea
        {...register("message")}
        placeholder="Message"
        className="w-full p-2 mb-4 rounded-md"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
