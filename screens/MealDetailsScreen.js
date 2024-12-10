import {useContext, useLayoutEffect} from "react";
import {Image, ScrollView, StyleSheet, Text} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import {FavoritesCtx} from "../store/context/favorites";

const MealDetailsScreen = ({route, navigation}) => {
  const {mealId} = route.params;
  const favoriteMealsCtx = useContext(FavoritesCtx)
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)

  const changeFavoriteHandler = () => {
    mealIsFavorite
      ? favoriteMealsCtx.removeFavorite(mealId)
      : favoriteMealsCtx.addFavorite(mealId)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outlined"}
            color={'white'}
            onPress={changeFavoriteHandler}
          />
        )
      },
    })
  }, [navigation, changeFavoriteHandler]);

  return (
    <ScrollView style={styles.screen}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails {...selectedMeal} textStyle={{color: 'white'}}/>

      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients}/>
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: 'white'
  },
  screen: {
    marginBottom: 32
  }
})

export default MealDetailsScreen;