const initialState = {
	bacon:0,
	meat:0,
	salad:0,
	cheese:0
}///;
const addIngredientReducer = (state=initialState, action)=>{
	switch(action.ingredient){
		case 'bacon':
			if(action.type === 'add')
				return { ...state, bacon: state.bacon+1 }
			else
				return { ...state, bacon: state.bacon-1 }
			// return {
			// 	bacon: ++state[bacon],
			// 	meat: state[meat],
			// 	salad: state[salad],
			// 	cheese: state[cheese]
			// }

		case 'meat':
			if(action.type === 'add')
				return { ...state, meat: state.meat+1 }
			else
				return { ...state, meat: state.meat-1 }
			// return {
			// 	bacon: state[bacon],
			// 	meat: ++state[meat],
			// 	salad: state[salad],
			// 	cheese: state[cheese]
			// }

		case 'salad':
			if(action.type === 'add')
				return { ...state, salad: state.salad+1 }
			else
				return { ...state, salad: state.salad-1 }
			// return {
			// 	bacon: state[bacon],
			// 	meat: state[meat],
			// 	salad: ++state[salad],
			// 	cheese: state[cheese]
			// }

		case 'cheese':
			if(action.type === 'add')
				return { ...state, cheese: state.cheese+1 }
			else
				return { ...state, cheese: state.cheese-1 }
			// return {
			// 	bacon: state[bacon],
			// 	meat: state[meat],
			// 	salad: state[salad],
			// 	cheese: ++state[cheese]
			// }

		default :
			return state
	}
}

export default addIngredientReducer