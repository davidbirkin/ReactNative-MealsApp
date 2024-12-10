import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";
import {MEALS} from "../data/dummy-data";

const MealItem = ({id, title, imageUrl, duration, complexity, affordability}) => {
  const navigation = useNavigation();

  const meal = MEALS.find(meal => meal.id === id);

  const selectMealItemHandler = () => {
    navigation.navigate("Meal Details", {
      mealId: id,
    })
  }


  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: "#ccc"}}
        style={
          ({pressed}) => pressed ? styles.buttonPressed : null
        }
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails {...meal} />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : 'visible',
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    padding: 8
  },
  buttonPressed: {
    opacity: 0.75,
  }
})

export default MealItem;