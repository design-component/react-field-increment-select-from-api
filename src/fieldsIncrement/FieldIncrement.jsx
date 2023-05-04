import React, { useReducer } from 'react';
import { initialState, reducer } from './action';
import InputField from './InputFild';

function FieldIncrement() {
	// reducer
	const [state, dispatch] = useReducer(reducer, initialState);

	console.log(state);
	return (
		<div className="mt-5">
			<form>
				{state.fields.map((e) => (
					<InputField dispatch={dispatch} state={state} key={e.id} data={e} />
				))}
				<div className="text-center">
					<button
						onClick={() =>
							dispatch({
								type: 'CREATE',
							})
						}
						type="button"
						className="btn btn-primary btn-sm mt-3  "
					>
						++
					</button>
				</div>
			</form>

			<p className="text-center">{JSON.stringify(state)}</p>
		</div>
	);
}

export default FieldIncrement;
