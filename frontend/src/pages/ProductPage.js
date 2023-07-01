import { json, useLoaderData } from "react-router-dom";
import ProductInfo from "../components/product/ProductInfo";
import { SERVER_URL } from "../envConfig";
import Head from "../Head";

const ProductPage = () => {
  const product = useLoaderData();
  return (
    <>
      <Head title={product.title} description={product.description} />
      <ProductInfo product={product} />
    </>
  );
};

export default ProductPage;

export const productLoader = async ({ req, params }) => {
  const { id: productId } = params;

  try {
    const response = await fetch(`${SERVER_URL}/products/${productId}`);
    if (!response.ok) throw new Error("Cound not fetch the product info.");
    const data = await response.json();
    return { ...data, id: productId };
  } catch (exception) {
    throw json({ message: exception.message }, { status: 500 });
  }
};
