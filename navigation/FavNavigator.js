import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/colors";

const Stack = createNativeStackNavigator();

const FavNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="My Favorites"
				component={FavoritesScreen}
				options={{
					title: "Favorites",
					headerTitle: "My Favorites",
					headerStyle: {
						backgroundColor:
							Platform.OS === "android" ? Colors.primaryColor : "",
					},
					headerTintColor:
						Platform.OS === "android" ? "white" : Colors.primaryColor,
				}}
			/>
		</Stack.Navigator>
	);
};

export default FavNavigator;
