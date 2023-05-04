export const MyApiFun = (initialState) => {
	const reducer = (state = initialState, action) => {
		switch (action.type) {
			// crete fields
			case 'CREATE':
				return {
					...state,
					selected: [
						...state.selected,
						{
							name: action.payload.name,
							itemID: action.payload.itemID,
							id: state.selected[state.selected.length - 1]?.id + 1 || 1,

							qty: null,
						},
					],
				};

			// change select
			case 'CHANGE_SELECT':
				return {
					...state,
					selected: state.selected.map((e) =>
						e.id === action.payload.id
							? { ...e, [action.payload.name]: action.payload.value }
							: { ...e }
					),
				};

			// change value
			case 'CHANGE_VALUE':
				return {
					...state,
					selected: state.selected.map((e) =>
						e.id === action.payload.id
							? { ...e, [action.payload.name]: action.payload.value }
							: { ...e }
					),
				};

			// delete fields
			case 'DELETE':
				return {
					...state,
					selected: state.selected.filter((e) => e.id !== action.payload),
				};

			default:
				return {
					state,
				};
		}
	};
	return { reducer };
};
