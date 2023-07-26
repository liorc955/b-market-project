import { useForm } from "react-hook-form";
import Button from "../UI/Button";
import LoginFormInputs from "./../login/LoginFormInputs";
import CheckOutFormInputs from "./CheckOutFormInputs";
import { useState } from "react";
import { SERVER_URL_AUTH } from "../../envConfig";

const GuestCheckOut = (props) => {
  const [errorMsgOnRegister, setErrorMsgOnRegister] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setErrorMsgOnRegister(null);
    const userAddress = {
      street: data.street,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
    };
    try {
      const response = await fetch(`${SERVER_URL_AUTH}/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataRes = await response.json();
      if (!response.ok) throw new Error(dataRes.errorMsg);
      props.postNewOrder({
        id: dataRes._id,
        address: userAddress,
      });
    } catch (expection) {
      setErrorMsgOnRegister(expection.message);
    }
  };

  return (
    <>
      <h5>Hello Guest,</h5>
      <h5>Please enter the details to complete the order:</h5>
      <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
        <div className="border-bottom mb-3 pb-3">
          <h6>Login information:</h6>
          <LoginFormInputs errors={errors} register={register} />
        </div>
        <h6>Customer & address information:</h6>
        <CheckOutFormInputs errors={errors} register={register} />
        <div className="text-center">
          <Button disabled={isSubmitting}>Submit Order</Button>
          {(props.isErrorOnPost || errorMsgOnRegister) && (
            <p className="text-danger mt-2" role="alert">
              {props.isErrorOnPost ? "Please Try Again" : errorMsgOnRegister}
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default GuestCheckOut;
