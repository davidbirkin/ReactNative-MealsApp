import {StatusBar} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesProvider from "./store/context/favorites";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import Entypo from "@expo/vector-icons/Entypo";
import {AntDesign} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      id={'mealdrawers'}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneStyle: {backgroundColor: "#3f2f25"},
        drawerStyle: {backgroundColor: "#351401"},
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1"
      }}
    >
      <Drawer.Screen
        name={"Categories Drawer"}
        component={CategoriesScreen}
        options={{
          drawerIcon: ({color, size}) => <Entypo name="list" size={size} color={color}/>,
          title: "Categories",
        }}/>
      <Drawer.Screen
        name={"Favourites"}
        component={FavoriteScreen}
        options={{
          drawerIcon: ({color, size}) => <AntDesign name="star" size={size} color={color}/>,
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style={"light"}/>
      <FavoritesProvider>
        <NavigationContainer>
          <Stack.Navigator
            id={"meal-categories-stack"}
            initialRouteName={"Categories"}
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "white",
              contentStyle: {backgroundColor: "#3f2f25"}
            }}
          >
            <Stack.Screen
              name="Categories"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={"Meals Overview"}
              component={MealsOverviewScreen}
              options={({route}) => ({title: route.params.categoryTitle})}
            />
            <Stack.Screen
              name={"Meal Details"}
              component={MealDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesProvider>
    </>
  );
}
