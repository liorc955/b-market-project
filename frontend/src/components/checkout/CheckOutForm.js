import { useForm } from "react-hook-form";
import FormInput from "../UI/FormInput";
import Button from "../UI/Button";

const inputs = [
  {
    contrains: {
      required: "Provide a valid first name",
      pattern: {
        value: /^[A-Za-z]+$/,
        message: "Provide a valid first name",
      },
    },
    type: "text",
    keyName: "first-name",
    labelName: "First Name",
  },
  {
    contrains: {
      required: "Provide a valid last name",
      pattern: {
        value: /^[A-Za-z]+$/,
        message: "Provide a valid last name",
      },
    },
    type: "text",
    keyName: "last-name",
    labelName: "Last Name",
  },
  {
    contrains: {
      required: "Provide a valid email",
    },
    type: "email",
    keyName: "email",
    labelName: "Email",
  },
  {
    contrains: {
      required: `Provide a valid mobile number`,
      pattern: {
        value: /^\d+$/,
        message: "Provide a valid mobile number",
      },
    },
    type: "text",
    keyName: "mobile-number",
    labelName: "Mobile Number",
  },
  {
    contrains: {
      required: "Provide a valid city",
      maxLength: 80,
      pattern: {
        value: /^[A-Za-z]+$/,
        message: "Provide a valid city",
      },
    },
    type: "text",
    keyName: "city",
    labelName: "City",
  },
  {
    contrains: {
      required: "Provide a valid state",
      maxLength: {
        value: 10,
        message: "Provide a valid state",
      },
      pattern: {
        value: /^[A-Za-z]+$/,
        message: "Provide a valid state",
      },
    },
    type: "text",
    keyName: "state",
    labelName: "State",
  },
  {
    contrains: {
      required: "Provide a valid zip code",
      maxLength: {
        value: 7,
        message: "Provide a valid zip code",
      },
      pattern: {
        value: /^\d+$/,
        message: "Provide a valid zip code",
      },
    },
    type: "text",
    keyName: "zip-code",
    labelName: "Zip Code",
  },
];

const CheckOutForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    props.postNewOrder(data);
  };

  return (
    <>
      <h5 className="text-center">
        Please enter the details to complete the order:
      </h5>
      <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((inputElement) => (
          <FormInput
            key={inputElement.keyName}
            register={register}
            errors={errors}
            contrains={inputElement.contrains}
            type={inputElement.type}
            inputKeyName={inputElement.keyName}
            labelName={inputElement.labelName}
          />
        ))}
        <div className="text-center">
          <Button disabled={isSubmitting}>Submit Order</Button>
          {props.isErrorOnPost && (
            <p className="text-danger mt-2" role="alert">
              Please Try Again
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default CheckOutForm;
