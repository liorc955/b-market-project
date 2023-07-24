import { useForm } from "react-hook-form";
import Button from "../UI/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Card from "./../UI/Card";
import FormInput from "../UI/FormInput";
import { Form, redirect, useActionData, useSubmit } from "react-router-dom";
import Modal from "../UI/Modal";
import PageLoading from "../UI/PageLoading";
import { useEffect, useState } from "react";
import { setToken } from "../../auth";

const Login = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (actionData) setIsLoading(false);
  }, [actionData]);

  const onSubmit = (data) => {
    setIsLoading(true);
    submit(data, { method: "post" });
  };

  return (
    <div className="mt-5 row d-flex justify-content-center">
      <Card className="text-center col-md-6 col-xl-4">
        <AccountCircleIcon
          style={{ height: "100px", width: "100px", color: "#06f" }}
        />
        <Form className="form-group" onSubmit={handleSubmit(onSubmit)}>
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
            type="password"
            inputKeyName="password"
            labelName="Password"
          />
          <div className="text-center mt-3">
            <Button disabled={isLoading}>Login</Button>
          </div>
        </Form>
        {actionData && (
          <div className="mt-3 alert alert-danger">
            <span>{actionData.error}</span>
          </div>
        )}
      </Card>
      {isLoading && (
        <Modal>
          <PageLoading />
        </Modal>
      )}
    </div>
  );
};

export default Login;

export const submitAction = async ({ request }) => {
  const data = await request.formData();

  const userData = {
    username: data.get("username"),
    password: data.get("password"),
  };

  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) return { error: data.errorMsg };
    setToken(data.accessToken);
  } catch (expection) {
    console.log(expection.message);
    return { error: "Something went wrong!" };
  }

  return redirect("/");
};
