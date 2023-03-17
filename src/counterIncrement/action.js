export const initialState = {
	count: 1,
};
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1,
			};
		case 'DECREMENT':
			if (state.count <= 1) {
				return {
					...state,
					count: 1,
				};
			} else {
				return {
					...state,
					count: state.count - 1,
				};
			}
		case 'CUSTOM':
			return {
				...state,
				count: action.payload,
			};

		default:
			return {
				...state,
			};
	}
};
