import { json, redirect, useLoaderData } from "react-router-dom";
import { getToken } from "../../auth";
import PageContent from "../../components/UI/PageContent";
import { SERVER_URL_API } from "../../envConfig";
import UserOrderList from "../../components/order/UserOrderList";
import { useCallback, useState } from "react";
import YearSelector, { extractYear } from "../../components/UI/YearSelector";

const OrdersPage = () => {
  const orders = useLoaderData();
  const [orderYear, setOrderYear] = useState(0);

  let filteredOrders = orders;
  if (orderYear) {
    filteredOrders = orders.filter(
      (order) => extractYear(order.timeStamp) === orderYear
    );
  }

  const handleOnChange = useCallback((event) => {
    setOrderYear(parseInt(event.target.value));
  }, []);

  return (
    <PageContent title="Orders" description="Orders page">
      <h4> 🚚 Orders:</h4>
      <YearSelector
        className="mb-2 mt-3"
        orders={orders}
        handleOnChange={handleOnChange}
      />
      <UserOrderList orders={filteredOrders} />
    </PageContent>
  );
};

export default OrdersPage;

export const ordersLoader = async () => {
  const token = getToken();
  if (token && token !== "EXPIRED") {
    try {
      const response = await fetch(`${SERVER_URL_API}/orders`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok)
        throw new Error("Cound not fetch orders for this user token.");
      const data = await response.json();
      return data;
    } catch (expection) {
      console.log(expection.message);
      throw json({});
    }
  }
  return redirect("/");
};
