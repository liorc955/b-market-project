import { Link, json, redirect, useRouteLoaderData } from "react-router-dom";
import { userLoader } from "../../auth";
import classes from "./PersonalAreaPage.module.css";
import PageContent from "../../components/UI/PageContent";
import { SERVER_URL_API } from "../../envConfig";

const PersonalAreaPage = () => {
  const userData = useRouteLoaderData("personal");
  const blackBorder = "border-bottom border-dark";

  return (
    <PageContent title="Personal Area" description="Personal Area page">
      <div className="m-2">
        <h3>
          Hello {userData.firstName} {userData.lastName}👋
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

export const updateUserAction = async ({ request, params }) => {
  const url = new URL(request.url);
  const paths = url.pathname.split("/");
  const lastPath = paths[paths.length - 1];
  const data = await request.formData();
  let payLoadData = {};

  if (lastPath === "userInfo") {
    payLoadData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
    };
  }

  if (lastPath === "address") {
    payLoadData = {
      address: {
        city: data.get("city"),
        state: data.get("state"),
        street: data.get("street"),
        zipCode: data.get("zipCode"),
      },
    };
  }

  try {
    const response = await fetch(`${SERVER_URL_API}/users/user`, {
      method: "PUT",
      body: JSON.stringify(payLoadData),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.status === 402) return { error: data.errorMsg };
  } catch (expection) {
    console.log(expection.message);
    return { error: "Something went wrong!" };
  }

  return redirect("..");
};
