import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MyButton = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<View style={styles.container}>
				<Text style={styles.text}>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 12,
		margin: 10,
		borderRadius: 10,
		backgroundColor: "black",
		maxWidth: 150,
		width: 150,

		justifyContent: "center",
		alignItems: "center",
	},

	text: {
		color: "white",
		fontSize: 16,
	},
});

export default MyButton;
