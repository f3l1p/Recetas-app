import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import MealItem from "./MealItem";

const MealList = (props) => {
	const renderMealItem = (itemData) => {
		return (
			<MealItem
				title={itemData.item.title}
				onSelectMeal={() => {
					props.navigation.navigate("Detail", {
						categoryId: itemData.item.id,
					});
				}}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				image={itemData.item.imageUrl}
			/>
		);
	};
	return (
		<View style={styles.container}>
			<FlatList
				numColumns={1}
				data={props.listData}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItem}
				style={{ width: "90%" }}
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

export default MealList;
