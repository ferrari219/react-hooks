import React, { useState, useEffect } from 'react';

const App = () => {
	const [number, setNumber] = useState(0);
	const [aNumber, setAnumber] = useState(0);

	const handleIncrement = () => setNumber(number + 1);
	const handleaIncrement = () => setAnumber(aNumber + 1);

	//useEffect
	const sayHello = () => {
		console.log('Hi');
	};
	// useEffect(() => {
	// 	sayHello();
	//  }, [number]);
	useEffect(sayHello, [number]); //Number 업데이트 할때만 실행됨

	return (
		<div>
			<button type="button" onClick={handleIncrement}>
				{number}
			</button>
			<button type="button" onClick={handleaIncrement}>
				{aNumber}
			</button>
		</div>
	);
};

export default App;
