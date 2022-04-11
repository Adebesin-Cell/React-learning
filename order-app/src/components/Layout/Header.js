import { Fragment } from "react";
import headerImage from "../../assets/meals.jpg";
import styles from "./Header.module.scss";
import HeaderCartButton from "./HeaderCartButton";

const Header = function (props) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className=''>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img
          src={headerImage}
          alt='A table full of delicious food'
          className=''
        />
      </div>
    </Fragment>
  );
};

export default Header;
