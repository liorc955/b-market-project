import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import { Suspense, lazy } from "react";

const ProductPage = lazy(() => import("./pages/ProductPage"));
const CheckOutPage = lazy(() => import("./pages/CheckOutPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const loadingContent = <p>Loading...</p>;

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
        path: "products/:id",
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
    path: "/checkout",
    element: (
      <Suspense fallback={loadingContent}>
        <CheckOutPage />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
