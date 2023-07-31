import PageContent from "../../components/UI/PageContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouteLoaderData } from "react-router-dom";
import EditForm from "./EditForm";
import { userInputs } from "../../inputs";

const EditUserPage = () => {
  const userData = useRouteLoaderData("personal");

  const inputs = userInputs.map((input) => ({
    ...input,
    defaultValue: userData[input.keyName],
  }));

  return (
    <PageContent title="Edit Account" description="Edit Account page">
      <h5>
        <AccountCircleIcon /> Your account information:
      </h5>
      <EditForm inputs={inputs} />
    </PageContent>
  );
};

export default EditUserPage;
