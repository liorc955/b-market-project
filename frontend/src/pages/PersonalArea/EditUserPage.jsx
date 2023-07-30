import { useForm } from "react-hook-form";
import Button from "../../components/UI/Button";
import FormInputs from "../../components/UI/FormInputs";
import PageContent from "../../components/UI/PageContent";
import { userInputs } from "../../inputs";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouteLoaderData } from "react-router-dom";

const EditUserPage = () => {
  const user = useRouteLoaderData("personal");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  const userInputsWithDefaultVal = userInputs.map((input) => ({
    ...input,
    defaultValue: user[input.keyName],
  }));

  return (
    <PageContent>
      <h5>
        <AccountCircleIcon /> Your user information:
      </h5>
      <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
        <FormInputs inputs={userInputsWithDefaultVal} errors={errors} register={register} />
        <div className="text-center">
          <Button>Submit</Button>
        </div>
      </form>
    </PageContent>
  );
};

export default EditUserPage;
