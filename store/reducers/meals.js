import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAV } from "../actions/meals";

const initialState = {
	meals: MEALS,
	favMeals: [],
};

const mealsReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FAV:
			const existingIndex = state.favMeals.findIndex(
				(meal) => meal.id === action.categoryId
			);
			if (existingIndex >= 0) {
				const updatedFavMeals = [...state.favMeals];
				updatedFavMeals.splice(existingIndex);
				return { ...state, favMeals: updatedFavMeals };
			} else {
				const meal = state.meals.find((meal) => meal.id === action.categoryId);
				return {
					...state,
					favMeals: state.favoriteMeals.concat(meal),
				};
			}
		default:
			return state;
	}

	return state;
};

export default mealsReducer;
