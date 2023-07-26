import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import { Suspense, lazy } from "react";
import PageLoading from "./components/UI/PageLoading";
import { submitAction } from "./components/login/Login";
import { checkAutLoader } from "./auth";
import { checkOutPageLoader } from "./pages/CheckOutPage";

const ProductPage = lazy(() => import("./pages/ProductPage"));
const CheckOutPage = lazy(() => import("./pages/CheckOutPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

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
