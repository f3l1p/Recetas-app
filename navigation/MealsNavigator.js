import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FilterScreen from "../screens/FilterScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import Colors from "../constants/colors";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="home">
				<Stack.Screen
					name="home"
					component={CategoriesScreen}
					options={{
						title: "Home",
						headerStyle: {
							backgroundColor:
								Platform.OS === "android" ? Colors.primaryColor : "",
						},
						headerTintColor:
							Platform.OS === "android" ? "white" : Colors.primaryColor,
					}}
				/>
				<Stack.Screen name="Categories" component={CategoryMealsScreen} />
				<Stack.Screen name="FilterScreen" component={FilterScreen} />
				<Stack.Screen name="Detail" component={MealDetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MealsNavigator;
