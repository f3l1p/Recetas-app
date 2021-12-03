import React, { useEffect, useCallback } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleFav } from "../store/actions/meals";

const MealDetailScreen = (props) => {
	const { categoryId, mealTitle } = props.route.params;

	const avalibleMeals = useSelector((state) => state.meals.meals);

	const selectedMeal = avalibleMeals.find((meal) => meal.id === categoryId);

	const dispatch = useDispatch();

	const toggleFavHandler = useCallback(() => {
		dispatch(toggleFav(categoryId));
	}, [dispatch, categoryId]);

	useEffect(() => {
		props.navigation.setParams({
			toggleFav: toggleFavHandler,
			mealTitle: selectedMeal.title,
		});
	}, [selectedMeal]);

	return (
		<ScrollView>
			<Text numberOfLines={2} style={styles.mainTitle}>
				{selectedMeal.title}
			</Text>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<Text>{selectedMeal.duration}</Text>
				<Text>{selectedMeal.complexity.toUpperCase()}</Text>
				<Text>{selectedMeal.affordability.toUpperCase()}</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.title}>Ingredients</Text>
				{selectedMeal.ingredients.map((ingredients) => (
					<Text key={ingredients}>{ingredients}</Text>
				))}
				<Text style={styles.title}>Steps</Text>
				{selectedMeal.steps.map((step) => (
					<Text key={step}>{step}</Text>
				))}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	mainTitle: {
		fontFamily: "poppins-bold",
		fontSize: 22,
		textAlign: "center",
		backgroundColor: "black",
		color: "white",
		padding: 5,
	},
	title: {
		fontFamily: "poppins-semi-bold",
		fontSize: 18,
		textAlign: "center",
	},
	image: {
		width: "100%",
		height: 200,
	},
	details: {
		flexDirection: "row",
		padding: 15,
		justifyContent: "space-around",
	},
	infoContainer: {
		marginHorizontal: 20,
		marginVertical: 10,
	},
});

export default MealDetailScreen;
