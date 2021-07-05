import * as React from "react";
import { useForm } from "react-hook-form";
import Upload from "./Upload";
import Search from "./Search";

const Input = ({ label, register, required }) => (
  <div>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </div>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ onChange, name, label }, ref) => (
  <div>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange}>
      <option value="Photo">Photo printing</option>
      <option value="Film">Film</option>
      <option value="Photo">Canvas</option>
      <option value="Editing">Editing service</option>
      <option value="Courier">Pick up by courier</option>
    </select>
  </div>
));

const OrderOnline = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="service-main">
      <div className="service-banner">
        <div className="service-form">

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="Your Name" register={register} required />
            <Input label="Email" register={register} required />
            <Input label="Phone" register={register} required />
            <Input label="Addesss" register={register} />
            <div className="ServiceChoice">
              <Select label="Type of Service" {...register("Service")} />
              <Upload />
            </div>
            <div className="Message">
              <input
                type="Message"
                placeholder="Leave a message"
                {...register("Message")}
              />
            </div>

            <button id="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>

        </div>

        <div className="service-picture service-picture-order-online">
          <Search />
        </div>
    </div>
    </div>

  );
};

export default OrderOnline;
