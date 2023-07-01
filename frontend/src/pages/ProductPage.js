import { json } from "react-router-dom";
import ProductInfo from "../components/product/ProductInfo";


const ProductPage = () => {
  return <ProductInfo />;
};

export default ProductPage;

export const productLoader = async ({ req, params }) => {
  const { id: productId } = params;

  try {
    const response = await fetch(
      `${process.env.SERVER_URL}/products/${productId}`
    );
    if (!response.ok) throw new Error('Cound not fetch the product info.');
    const data = await response.json();
    return {...data, id: productId};
  } catch (exception) {
    throw json({message: exception.message}, {status: 500});
  }
};
