import FormInput from "./FormInput";

const FormInputs = (props) => {
  return (
    <>
      {props.inputs.map((inputElement) => (
        <FormInput
          defaultValue={inputElement.defaultValue}
          key={inputElement.keyName}
          register={props.register}
          errors={props.errors}
          contrains={inputElement.contrains}
          type={inputElement.type}
          inputKeyName={inputElement.keyName}
          labelName={inputElement.labelName}
          disabled={props.disabled}
        />
      ))}
    </>
  );
};

export default FormInputs;
