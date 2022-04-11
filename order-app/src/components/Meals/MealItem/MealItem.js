import styles from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";

const MealItem = function (props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div className=''>
        <h3 className=''>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div className=''>
        <MealItemForm></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
