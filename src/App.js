import React from 'react';
import CounterIncrement from './counterIncrement/CounterIncrement';
import FieldIncrement from './fieldsIncrement/FieldIncrement';

function App() {
	return (
		<>
			<h6 className="text-center">Increment Field and save state</h6>
			<FieldIncrement />
			<h6 className="text-center">Increment Count value Stop After 1</h6>
			<CounterIncrement />
		</>
	);
}

export default App;
