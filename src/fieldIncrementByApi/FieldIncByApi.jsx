import React, { useReducer } from 'react';
import Fields from './Fields';
import { MyApiFun } from './action';
import { api } from './apiData';

function FieldIncByApi() {
	const initialState = {
		selected: [{ name: api[0].name, itemID: api[0].id, id: 1, qty: null }],
		apiData: [...api],
	};

	const [state, dispatch] = useReducer(
		MyApiFun(initialState).reducer,
		initialState
	);
	console.log(state.selected);
	return (
		<div>
			{state.selected?.map((e, i) => (
				<Fields key={i} data={e} state={state} dispatch={dispatch} />
			))}
			<div>
				<button
					onClick={() =>
						dispatch({
							type: 'CREATE',
							payload: { name: api[0].name, itemID: api[0].id },
						})
					}
				>
					++
				</button>
			</div>
			<p>{JSON.stringify(state.selected, undefined, 2)}</p>
		</div>
	);
}

export default FieldIncByApi;
