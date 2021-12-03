import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FilterScreen from "../screens/FilterScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/colors";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MealsNavigator = (props) => {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerStyle: {
					backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
				},
				headerTintColor:
					Platform.OS === "android" ? "white" : Colors.primaryColor,
			}}
		>
			<Stack.Screen name="Home" component={CategoriesScreen} />
			<Stack.Screen name="Categories" component={CategoryMealsScreen} />
			<Stack.Screen name="FilterScreen" component={FilterScreen} />
			<Stack.Screen name="Detail" component={MealDetailScreen} />
			<Stack.Screen name="Favorites" component={FavoritesScreen} />
		</Stack.Navigator>
	);
};

export default MealsNavigator;
