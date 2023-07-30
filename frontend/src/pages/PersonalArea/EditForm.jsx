import { Form, useActionData, useSubmit } from "react-router-dom";
import FormInputs from "../../components/UI/FormInputs";
import Button from "../../components/UI/Button";
import ErrorBoxMsg from "../../components/UI/ErrorBoxMsg";
import { useForm } from "react-hook-form";


const EditForm = (props) => {
  const submit = useSubmit();
  const actionData = useActionData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    submit(data, { method: "put" });
  }

  return (
    <Form className="form-group" onSubmit={handleSubmit(onSubmit)}>
      <FormInputs inputs={props.inputs} errors={errors} register={register} />
      <div className="text-center">
        <Button>Submit</Button>
        {actionData && <ErrorBoxMsg errorMsg={actionData.error} />}
      </div>
    </Form>
  );
};

export default EditForm;
