import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeal";

const Meals = function () {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
};

export default Meals;
