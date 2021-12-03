import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Cart" />
		</Stack.Navigator>
	);
};
