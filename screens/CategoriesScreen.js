import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/colors";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate("Categories", {
						categoryId: itemData.item.id,
					});
				}}
			/>
		);
	};
	return (
		<FlatList
			keyExtractor={(item, index) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default CategoriesScreen;
