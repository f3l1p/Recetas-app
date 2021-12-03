import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../user/AuthScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = (props) => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="AuthScreen" component={AuthScreen}>
				My Content
			</Stack.Screen>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	// my styles
});

export default AuthNavigator;
