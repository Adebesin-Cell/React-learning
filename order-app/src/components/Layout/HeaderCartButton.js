import React from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "../Layout/HeaderCartButton.module.scss";

const HeaderCartButton = function (props) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
