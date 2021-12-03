import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigation";

const MainNavigator = (props) => {
	const user = null;

	return (
		<NavigationContainer>
			{/* {user ? <TabNavigator /> : <AuthNavigator />} */}
			<TabNavigator />
		</NavigationContainer>
	);
};

export default MainNavigator;
