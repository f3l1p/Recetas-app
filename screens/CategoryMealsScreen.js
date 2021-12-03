import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
	const { categoryId } = props.route.params;

	const avalibleMeals = useSelector((state) => state.meals.meals);

	const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

	const displayedMeals = avalibleMeals.filter(
		(meal) => meal.categoryIds.indexOf(categoryId) >= 0
	);

	return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default CategoryMealsScreen;
