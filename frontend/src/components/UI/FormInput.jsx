import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const errors = props.errors;
  const labelName = props.labelName;
  const inputKeyName = props.inputKeyName;
  const errorMsg = errors[inputKeyName] ? errors[inputKeyName]?.message : null;

  return (
    <div className="m-2">
      <label className="form-label">{labelName}</label>
      <input
        defaultValue={props.defaultValue}
        className={`form-control ${classes['input-field']}${
          errorMsg ?
          ` ${classes["error-placeholder"]} border-danger` : ""
        }`}
        {...props.register(inputKeyName, { ...props.contrains })}
        aria-invalid={errors[inputKeyName] ? "true" : "false"}
        placeholder={`${
          errorMsg
            ? errorMsg
            : `${labelName}`
        }`}
        type={props.type}
        autoComplete={props.inputKeyName}
        disabled={props.disabled}
      />
    </div>
  );
};

export default FormInput;
