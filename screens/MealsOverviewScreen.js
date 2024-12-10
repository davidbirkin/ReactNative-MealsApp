import {MEALS} from "../data/dummy-data"
import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({route, navigation}) => {
  const {categoryId, categoryTitle} = route.params;
  const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  const renderMeal = (itemData) => {
    return (
      <MealItem
        id={itemData.item.id}
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderMeal}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
});

export default MealsOverviewScreen;