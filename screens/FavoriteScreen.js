import MealsList from "../components/MealsList/MealsList";
import {useContext} from "react";
import {FavoritesCtx} from "../store/context/favorites";
import {MEALS} from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";

const FavoriteScreen = () => {
  const faveMealsCtx = useContext(FavoritesCtx)
  const favoriteMeals = MEALS.filter(meal => faveMealsCtx.ids.includes(meal.id))

  if (!favoriteMeals.length) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )
  }

  return (<MealsList items={favoriteMeals}/>)
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white'
  },
})

export default FavoriteScreen;