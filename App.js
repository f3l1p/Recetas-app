import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

import MealsNavigator from "./navigation/MealsNavigator";

export default function App() {
	const [myFonts] = useFonts({
		"poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
		"poppins-semi-bold": require("./assets/fonts/Poppins-SemiBold.ttf"),
		"poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
	});

	if (!myFonts) {
		return null;
	}

	return <MealsNavigator />;
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
