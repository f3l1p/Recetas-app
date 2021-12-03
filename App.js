import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MainNavigator from "./navigation";
import mealsReducer from "./store/reducers/meals";

enableScreens();

const rootReducer = combineReducers({
	meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
	const [myFonts] = useFonts({
		"poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
		"poppins-semi-bold": require("./assets/fonts/Poppins-SemiBold.ttf"),
		"poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
	});

	if (!myFonts) {
		return null;
	}

	return (
		<Provider store={store}>
			<MainNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	text: {
		fontFamily: "poppins-bold",
	},
});
