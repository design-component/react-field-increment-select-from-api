import React, { useReducer } from 'react';
import { initialState, reducer } from './action';
import InputField from './InputFild';

function FieldIncrement() {
	// reducer
	const [state, dispatch] = useReducer(reducer, initialState);

	// input field
	// const InputField = ({ data }) => {
	// 	return (
	// 		<div>
	// 			<div
	// 				className="d-flex justify-content-center py-2 "
	// 				style={{ gap: '20px' }}
	// 			>
	// 				<input
	// 					className="mb-1 px-2"
	// 					placeholder="name"
	// 					type="text"
	// 					name="name"
	// 					// defaultValue={data.name}
	// 					onChange={(e) => {
	// 						dispatch({
	// 							type: 'CHANGE_TEXT',
	// 							payload: {
	// 								id: data?.id,
	// 								value: e.target.value,
	// 								name: e.target.name,
	// 							},
	// 						});
	// 					}}
	// 				/>
	// 				<input
	// 					className="mb-1 px-2"
	// 					placeholder="value"
	// 					type="text"
	// 					name="value"
	// 					// defaultValue={data.value}
	// 					onChange={(e) => {
	// 						dispatch({
	// 							type: 'CHANGE_TEXT',
	// 							payload: {
	// 								id: data?.id,
	// 								value: e.target.value,
	// 								name: e.target.name,
	// 							},
	// 						});
	// 					}}
	// 				/>
	// 				<button
	// 					disabled={state.fields.length === 1}
	// 					style={{
	// 						display: state.fields.length === 1 ? 'none' : 'inline-block',
	// 					}}
	// 					className="btn btn-danger btn-sm"
	// 					onClick={() =>
	// 						dispatch({
	// 							type: 'DELETE',
	// 							payload: data.id,
	// 						})
	// 					}
	// 				>
	// 					--
	// 				</button>
	// 			</div>
	// 		</div>
	// 	);
	// };
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
