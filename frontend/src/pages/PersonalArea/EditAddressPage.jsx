import {
  useRouteLoaderData,
} from "react-router-dom";
import PageContent from "../../components/UI/PageContent";
import { addressInputs } from "../../inputs";
import EditForm from "./EditForm";

const EditAddressPage = () => {
  const user = useRouteLoaderData("personal");
  const { address } = user;

  const inputs = addressInputs.map((input) => ({
    ...input,
    defaultValue: address[input.keyName],
  }));

  return (
    <PageContent title="Edit Address" description="Edit Address page">
      <h5>📮 Your address information: </h5>
      <EditForm inputs={inputs} />
    </PageContent>
  );
};

export default EditAddressPage;
