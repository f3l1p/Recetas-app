import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const FavoritesScreen = (props) => {
	const favoritesMeals = useSelector((state) => state.meals.favoritesMeals);

	//const favoritesMeals = MEALS.filter((meal) => meal.id === "m1" || "m2");

	return <MealList listData={favoritesMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
	// my styles
});

export default FavoritesScreen;
