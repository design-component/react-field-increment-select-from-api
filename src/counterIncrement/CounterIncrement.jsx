import React, { useReducer } from 'react';
import { initialState, reducer } from './action';

function CounterIncrement() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<div className="text-center  ">
				<button
					className="btn btn-danger rounded-0"
					onClick={() =>
						dispatch({
							type: 'DECREMENT',
						})
					}
				>
					-
				</button>

				<span className="btn btn-success rounded-0">{state.count}</span>

				<button
					className="btn btn-primary rounded-0"
					onClick={() =>
						dispatch({
							type: 'INCREMENT',
						})
					}
				>
					+
				</button>
			</div>
		</div>
	);
}

export default CounterIncrement;
