import React from 'react';

function Fields({ state, data, dispatch }) {
	// console.log(state.apiData);
	return (
		<div style={{ display: 'flex' }}>
			<div>
				<select
					name="name"
					onChange={(e) =>
						dispatch({
							type: 'CHANGE_SELECT',
							payload: {
								itemID: e.target.value.split(' ')[0],
								name: e.target.name,
								value: e.target.value.split(' ')[1],
								id: data.id,
							},
						})
					}
				>
					{state.apiData.map((e, i) => (
						<option key={i} value={`${e.id} ${e.name}`}>
							{e.name}
						</option>
					))}
				</select>
				<input
					type="text"
					name="qty"
					onChange={(e) =>
						dispatch({
							type: 'CHANGE_VALUE',
							payload: {
								name: e.target.name,
								value: e.target.value,
								id: data.id,
							},
						})
					}
					defaultValue={data.qty}
					placeholder="Add qty"
				/>
			</div>

			<button
				disabled={state.selected.length === 1}
				style={{
					display: state.selected.length === 1 ? 'none' : 'inline-block',
				}}
				onClick={(e) =>
					dispatch({
						type: 'DELETE',
						payload: data.id,
					})
				}
			>
				--
			</button>
		</div>
	);
}

export default Fields;
