import { useContext } from "react";
import styles from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = function (props) {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = function (amount) {
    cartCtx.addItems({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div className=''>
        <h3 className=''>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div className=''>
        <MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
