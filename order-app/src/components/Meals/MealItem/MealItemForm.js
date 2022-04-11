import styles from "./MealItemForm.module.scss";

const MealItemForm = function (props) {
  return (
    <form action='' className={styles.form}>
      <input type='text' />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
