import { useForm } from "react-hook-form";
import Button from "../UI/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Card from "./../UI/Card";
import FormInput from "../UI/FormInput";
import { Form, redirect } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div className="mt-5 row d-flex justify-content-center">
      <Card className="text-center col-md-6 col-xl-4">
        <AccountCircleIcon
          style={{ height: "100px", width: "100px", color: "#06f" }}
        />
        <Form className="form-group" method="post">
          <FormInput
            key="username"
            register={register}
            errors={errors}
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
            register={register}
            errors={errors}
            contrains={{
              required: "Provide a valid password",
              maxLength: {
                value: 12,
                message: "Provide a valid password",
              },
            }}
            type="text"
            inputKeyName="password"
            labelName="Password"
          />
          <div className="text-center mt-3">
            <Button disabled={isSubmitting}>Login</Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;

export const submitAction = async ({ request }) => {
  const data = await request.formData();
  console.log(data.get("username"));
  console.log(data.get("password"));
  return redirect("/login");
};
