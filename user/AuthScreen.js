import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
	StyleSheet,
	TextInput,
} from "react-native";

const AuthScreen = () => {
	return (
		<KeyboardAvoidingView style={styles.screen}>
			<View style={styles.container}>
				<Text style={styles.title}>Registro</Text>
				<Text style={styles.label}>Email</Text>
				<TextInput
					style={styles.input}
					keyboardType="email-address"
					autoCapitalize="none"
				/>
				<TouchableOpacity>
					<Text>Registrarse</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	screen: {},
	container: {},
	title: {},
	label: {},
});

export default AuthScreen;
