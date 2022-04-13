import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const closeModalHandler = function () {
    setCartIsShown(false);
  };

  const showCartHandler = function () {
    setCartIsShown(true);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={closeModalHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
