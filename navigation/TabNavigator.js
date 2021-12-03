import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealsNavigator from "./MealsNavigator";
import FavNavigator from "./FavNavigator";
import Colors from "../constants/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
	return (
		<Tab.Navigator
			screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}
		>
			<Tab.Screen name="meals" component={MealsNavigator} />
			<Tab.Screen name="favorites" component={FavNavigator} />
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	tabBar: {
		position: "absolute",
		bottom: 25,
		left: 20,
		right: 20,
		borderRadius: 15,
		height: 90,
		shadowColor: "#7f5df0",
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.25,
		shadowRadius: 10,
		elevation: 5,
	},
});

export default TabNavigator;
