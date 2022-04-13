import styles from "./Input.module.scss";

const Input = function (props) {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label} </label>
      <input {...props.input} />
    </div>
  );
};

export default Input;