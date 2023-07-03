import { useCallback, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";
import Error from "../UI/Error.js";
import { SERVER_URL } from "../../envConfig";
import ProductLoading from "../UI/ProductLoading";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isThereErrorFetching, setIsThereErrorFetching] = useState(false);

  const fetchProductList = useCallback(async () => {
    try {
      const response = await fetch(`${SERVER_URL}/products/`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const productList = data.map((product) => ({
        ...product,
        id: product._id,
      }));
      setProducts(productList);
    } catch (exception) {
      console.log(exception.message);
      setIsThereErrorFetching(true);
    }
  }, []);

  useEffect(() => {
    fetchProductList();
  }, [fetchProductList]);

  const productList = products.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      description={product.description}
      image={product.image}
      price={product.price}
    />
  ));

  let body =
    products.length === 0 ? (
      <ProductLoading />
    ) : (
      <ul className={classes["list-group"] + " shadow"}>{productList}</ul>
    );

  if (isThereErrorFetching) {
    body = <Error />;
  }

  return (
    <div className="container py-5">
      <div className="col-lg-8 mx-auto">{body}</div>
    </div>
  );
};

export default ProductList;
