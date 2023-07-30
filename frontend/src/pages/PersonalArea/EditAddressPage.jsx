import { useRouteLoaderData } from "react-router-dom";
import PageContent from "../../components/UI/PageContent";
import { useForm } from "react-hook-form";
import Button from "../../components/UI/Button";
import FormInputs from "../../components/UI/FormInputs";
import { addressInputs } from "../../inputs";

const EditAddressPage = () => {
  const user = useRouteLoaderData("personal");
  const { address } = user;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  const addressInputsWithDefaultVal = addressInputs.map((input) => ({
    ...input,
    defaultValue: address[input.keyName],
  }));

  return (
    <PageContent>
      <h5>📮 Your address information: </h5>
      <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
        <FormInputs
          inputs={addressInputsWithDefaultVal}
          errors={errors}
          register={register}
        />
        <div className="text-center">
          <Button>Submit</Button>
        </div>
      </form>
    </PageContent>
  );
};

export default EditAddressPage;
