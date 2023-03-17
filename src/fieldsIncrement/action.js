// initial state
export const initialState = {
	fields: [
		{
			id: 1,
			name: '',
			value: '',
		},
	],
};

// all logic
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		// crete fields
		case 'CREATE':
			return {
				...state,
				fields: [
					...state.fields,
					{
						id: state.fields[state.fields.length - 1]?.id + 1 || 1,
						name: '',
						value: '',
					},
				],
			};

		// change text
		case 'CHANGE_TEXT':
			return {
				...state,
				fields: state.fields.map((e) =>
					e.id === action.payload.id
						? { ...e, [action.payload.name]: action.payload.value }
						: { ...e }
				),
			};

		// delete fields
		case 'DELETE':
			return {
				...state,
				fields: state.fields.filter((e) => e.id !== action.payload),
			};

		default:
			return {
				state,
			};
	}
};
