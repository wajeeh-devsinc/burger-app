const initialState = {
	bacon:0,
	meat:0,
	salad:0,
	cheese:0
};
const removeIngredientReducer = (state=initialState, action)=>{
	switch(action.type){
		// case 'bacon':
		// 	return {
		// 		bacon: --state[bacon],
		// 		meat: state[meat],
		// 		salad: state[salad],
		// 		cheese: state[cheese]
		// 	}

		// case 'meat':
		// 	return {
		// 		bacon: state[bacon],
		// 		meat: --state[meat],
		// 		salad: state[salad],
		// 		cheese: state[cheese]
		// 	}

		// case 'salad':
		// 	return {
		// 		bacon: state[bacon],
		// 		meat: state[meat],
		// 		salad: --state[salad],
		// 		cheese: state[cheese]
		// 	}

		// case 'cheese':
		// 	return {
		// 		bacon: state[bacon],
		// 		meat: state[meat],
		// 		salad: state[salad],
		// 		cheese: --state[cheese]
		// 	}

		 default :
			return state
	}
}

export default removeIngredientReducer;