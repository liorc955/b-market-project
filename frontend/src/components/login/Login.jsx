import { useForm } from "react-hook-form";
import Button from "../UI/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Form, redirect, useActionData, useSubmit } from "react-router-dom";
import Modal from "../UI/Modal";
import PageLoading from "../UI/PageLoading";
import { useEffect, useState } from "react";
import { setExpirationTime } from "../../auth";
import { SERVER_URL_AUTH } from "../../envConfig";
import FormInputs from "../UI/FormInputs";
import { loginInputs } from "../../inputs";
import ErrorBoxMsg from "./../UI/ErrorBoxMsg";

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
    <>
      <div className="text-center">
        <AccountCircleIcon
          style={{ height: "100px", width: "100px", color: "#06f" }}
        />
      </div>
      <Form className="form-group" onSubmit={handleSubmit(onSubmit)}>
        <FormInputs
          disabled={isLoading}
          inputs={loginInputs}
          errors={errors}
          register={register}
        />
        <div className="text-center mt-3">
          <Button disabled={isLoading}>Login</Button>
          {actionData && <ErrorBoxMsg errorMsg={actionData.error} />}
        </div>
      </Form>
      {isLoading && (
        <Modal>
          <PageLoading />
        </Modal>
      )}
    </>
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
    const response = await fetch(`${SERVER_URL_AUTH}/login`, {
      method: "POST",
      body: JSON.stringify(userData),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) return { error: data.errorMsg };
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    setExpirationTime(expiration.toISOString());
  } catch (expection) {
    console.log(expection.message);
    return { error: "Something went wrong!" };
  }

  return redirect("/");
};
