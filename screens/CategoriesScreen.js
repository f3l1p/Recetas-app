import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from "react-native";
import MyButton from "../components/MyButton";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/colors";

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<TouchableOpacity
				onPress={() => {
					props.navigation.navigate("Categories", {
						categoryId: itemData.item.id,
					});
				}}
				style={styles.gridItem}
			>
				<View>
					<Text>{itemData.item.title}</Text>
				</View>
			</TouchableOpacity>
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

	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,

		justifyContent: "center",
		alignItems: "center",
	},
});

export default CategoriesScreen;
