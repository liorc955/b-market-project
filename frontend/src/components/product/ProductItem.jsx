import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/cart-slice";
import { useNavigate } from "react-router-dom";
import ProductImg from "../product/ProductImg";
import AddToCartBtn from "../UI/AddToCartBtn";
import { useCallback } from "react";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const description = props.description.substring(
    0,
    props.description.indexOf(".") + 1
  );

  const addProductToCart = useCallback((event) => {
    event.stopPropagation();
    dispatch(
      cartSliceActions.addItemToCart({
        item: {
          productId: props.id,
          title: props.title,
          price: props.price,
          description: description,
          image: props.image,
        },
      })
    );
  }, [description, dispatch, props.id, props.image, props.price, props.title]);

  const navigateToProductInfo = () => {
    navigate(`products/${props.id}`);
  }
  
  return (
    <li onClick={navigateToProductInfo} className={classes["list-group-item"]}>
      <ProductImg alt={props.title} src={props.image}/>
      <div className="media align-items-lg-center flex-column flex-lg-row p-3">
        <div className="media-body order-2 order-lg-1">
          <h5 className="mt-0 font-weight-bold mb-2">{props.title}</h5>
          <p className="font-italic text-muted mb-0 small">{description}</p>
          <h6 className="font-weight-bold my-2">${props.price}</h6>
          <AddToCartBtn onAddItem={addProductToCart} />
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
