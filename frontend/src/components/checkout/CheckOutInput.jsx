import classes from "./CheckOutInput.module.css";

const CheckOutInput = (props) => {
  const errors = props.errors;
  const labelName = props.labelName;
  const inputKeyName = props.inputKeyName;

  return (
    <div className="m-2">
      <label className="form-label">{labelName}</label>
      <input
        className={`form-control ${
          errors[`${inputKeyName}`] &&
          `${classes["error-placeholder"]} border-danger`
        }`}
        {...props.register(inputKeyName, { ...props.contrains })}
        aria-invalid={errors[inputKeyName] ? "true" : "false"}
        placeholder={`${
          errors[`${inputKeyName}`]
            ? `${errors[`${inputKeyName}`]?.message}`
            : `${labelName}`
        }`}
        type={props.type}
      />
    </div>
  );
};

export default CheckOutInput;
