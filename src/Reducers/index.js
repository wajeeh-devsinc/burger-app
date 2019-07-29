import { combineReducers} from 'redux';
import addIngredientReducer from './addIngredient';
//import removeIngredientReducer from './removeIngredient';

const rootReducer = combineReducers({
	ingredients: addIngredientReducer
	//removeIngredient: removeIngredientReducer
});

export default rootReducer;