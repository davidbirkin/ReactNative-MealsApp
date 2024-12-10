import {MEALS} from "../data/dummy-data"
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({route, navigation}) => {
  const {categoryId} = route.params;
  const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  return (<MealsList items={meals}/>)
}

export default MealsOverviewScreen;