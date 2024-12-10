import {CATEGORIES} from "../data/dummy-data"
import {FlatList} from "react-native";
import CategoryGridTiles from "../components/CategoryGridTiles";

const CategoriesScreen = ({navigation}) => {
  const pressHandler = (item) => {
    navigation.navigate("Meals Overview", {
      categoryId: item.id,
      categoryTitle: item.title,
    })
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({item}) =>
        <CategoryGridTiles color={item.color} title={item.title} onPress={pressHandler.bind(this, item)}/>
      }
      keyExtractor={item => item.id}
      numColumns={2}
    />
  )
}

export default CategoriesScreen