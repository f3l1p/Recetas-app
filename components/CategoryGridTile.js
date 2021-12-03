import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryGridTile = (props) => {
	return (
		<View style={styles.gridItem}>
			<TouchableOpacity style={{ flex: 1 }} onPress={props.onSelect}>
				<View
					style={{ ...styles.container, ...{ backgroundColor: props.color } }}
				>
					<Text style={styles.title}>{props.title}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},

	container: {
		flex: 1,
		borderRadius: 10,
		shadowColor: "black",
		elevation: 4,
		shadowRadius: 10,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.26,

		padding: 20,
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	title: {
		fontFamily: "poppins-bold",
		fontSize: 18,
		color: "white",
	},
});

export default CategoryGridTile;
