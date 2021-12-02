import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MyButton from "../components/MyButton";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
	//const catId = props.navigation.getParam("categoryId");

	const { categoryId } = props.route.params;

	const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
	return (
		<View style={styles.container}>
			<Text>{selectedCategory.title}</Text>
			<MyButton
				title="Go to Details!"
				onPress={() => {
					props.navigation.navigate("Detail");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default CategoryMealsScreen;
