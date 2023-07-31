import { json, redirect, useLoaderData } from "react-router-dom";
import { getToken } from "../../auth";
import PageContent from "../../components/UI/PageContent";
import { SERVER_URL_API } from "../../envConfig";

const OrdersPage = () => {
  const orders = useLoaderData();
  console.log(orders);
  return (
    <PageContent title="Orders" description="Orders page">
      <h4> 🚚 Orders:</h4>
    </PageContent>
  );
};

export default OrdersPage;


export const ordersLoader = async () => {
  const token = getToken();
  if (token) {
    try {
      const response = await fetch(`${SERVER_URL_API}/orders`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Cound not fetch orders for this user token.");
      const data = await response.json();
      return data;
    } catch (expection) {
      console.log(expection.message);
      throw json({});
    }
  }
  return redirect('/');
}