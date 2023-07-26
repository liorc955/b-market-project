import FormInput from "../UI/FormInput";

const LoginFormInputs = (props) => {
  return (
    <>
      <FormInput
        key="username"
        register={props.register}
        errors={props.errors}
        contrains={{
          required: "Provide a valid username",
          maxLength: {
            value: 10,
            message: "Provide a valid username",
          },
        }}
        type="text"
        inputKeyName="username"
        labelName="Username"
      />
      <FormInput
        key="password"
        register={props.register}
        errors={props.errors}
        contrains={{
          required: "Provide a valid password",
          maxLength: {
            value: 12,
            message: "Provide a valid password",
          },
        }}
        type="password"
        inputKeyName="password"
        labelName="Password"
      />
    </>
  );
};

export default LoginFormInputs;
