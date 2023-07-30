import { Link, json, redirect, useRouteLoaderData } from "react-router-dom";
import { userLoader } from "../../auth";
import classes from "./PersonalAreaPage.module.css";
import PageContent from "../../components/UI/PageContent";

const PersonalAreaPage = () => {
  const user = useRouteLoaderData("personal");

  const blackBorder = "border-bottom border-dark";

  return (
    <PageContent>
      <div className="m-2">
        <h3>
          Hello {user.firstName} {user.lastName}👋
        </h3>
        <h4>Choose between the options:</h4>
        <ul className={`${classes["menu-container"]} px-1 mt-4`}>
          <Link to="userInfo">
            <li className={blackBorder}>View & Edit account information</li>
          </Link>

          <Link to="address">
            <li className={blackBorder}>View & Edit address information</li>
          </Link>

          <Link to="orders">
            <li>View Orders</li>
          </Link>
        </ul>
      </div>
    </PageContent>
  );
};

export default PersonalAreaPage;

export const personalAreaLoader = async () => {
  try {
    const data = await userLoader();
    if (data === null) return redirect("/");
    return data;
  } catch (exception) {
    throw json({ message: exception.message }, { status: 500 });
  }
};
