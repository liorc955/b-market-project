import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import { Suspense, lazy } from "react";
import PageLoading from "./components/UI/PageLoading";
import { submitAction } from "./components/login/Login";
import { checkAutLoader } from "./auth";
import { checkOutPageLoader } from "./pages/CheckOutPage";
import {
  personalAreaLoader,
  updateUserAction,
} from "./pages/PersonalArea/PersonalAreaPage";
import { ordersLoader } from "./pages/PersonalArea/OrdersPage";

const ProductPage = lazy(() => import("./pages/ProductPage"));
const CheckOutPage = lazy(() => import("./pages/CheckOutPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const PersonalAreaPage = lazy(() =>
  import("./pages/PersonalArea/PersonalAreaPage")
);
const EditAddressPage = lazy(() =>
  import("./pages/PersonalArea/EditAddressPage")
);
const EditUserPage = lazy(() => import("./pages/PersonalArea/EditUserPage"));
const OrdersPage = lazy(() => import("./pages/PersonalArea/OrdersPage"));

const loadingContent = <PageLoading />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        children: [
          {
            path: ":id",
            element: (
              <Suspense fallback={loadingContent}>
                <ProductPage />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/ProductPage").then((module) =>
                module.productLoader(meta)
              ),
          },
        ],
      },
      {
        path: "login",
        element: (
          <Suspense fallback={loadingContent}>
            <LoginPage />
          </Suspense>
        ),
        action: submitAction,
        loader: checkAutLoader,
      },
      {
        path: "personal-area",
        element: <Outlet />,
        loader: personalAreaLoader,
        id: "personal",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={loadingContent}>
                <PersonalAreaPage />
              </Suspense>
            ),
          },
          {
            path: "address",
            element: (
              <Suspense fallback={loadingContent}>
                <EditAddressPage />
              </Suspense>
            ),
            action: updateUserAction,
          },
          {
            path: "userInfo",
            element: (
              <Suspense fallback={loadingContent}>
                <EditUserPage />
              </Suspense>
            ),
            action: updateUserAction,
          },
          {
            path: "orders",
            element: (
              <Suspense fallback={loadingContent}>
                <OrdersPage />
              </Suspense>
            ),
            loader: ordersLoader,
          },
        ],
      },
    ],
  },
  {
    path: "checkout",
    errorElement: <ErrorPage />,
    element: (
      <Suspense fallback={loadingContent}>
        <CheckOutPage />
      </Suspense>
    ),
    loader: checkOutPageLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
