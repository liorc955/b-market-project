
import FormInput from "../UI/FormInput";

const textRegex = /^[A-Za-z]+$/;

const inputs = [
  {
    contrains: {
      required: "Provide a valid first name",
      pattern: {
        value: textRegex,
        message: "Provide a valid first name",
      },
    },
    type: "text",
    keyName: "firstName",
    labelName: "First Name",
  },
  {
    contrains: {
      required: "Provide a valid last name",
      pattern: {
        value: textRegex,
        message: "Provide a valid last name",
      },
    },
    type: "text",
    keyName: "lastName",
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
      required: `Provide a valid street address`,
      pattern: {
        value: /^[A-Za-z0-9\s]+$/,
        message: "Provide a valid street address",
      },
    },
    type: "text",
    keyName: "street",
    labelName: "Street",
  },
  {
    contrains: {
      required: "Provide a valid city",
      maxLength: 80,
      pattern: {
        value: textRegex,
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
        value: textRegex,
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
    keyName: "zipCode",
    labelName: "Zip Code",
  },
];

const CheckOutFormInputs = (props) => {
  return (
    <>
      {inputs.map((inputElement) => (
        <FormInput
          key={inputElement.keyName}
          register={props.register}
          errors={props.errors}
          contrains={inputElement.contrains}
          type={inputElement.type}
          inputKeyName={inputElement.keyName}
          labelName={inputElement.labelName}
        />
      ))}
    </>
  );
};

export default CheckOutFormInputs;
