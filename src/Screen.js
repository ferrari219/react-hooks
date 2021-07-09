import React from 'react';
import Headers from './Headers';
import { useFns } from './context';

const Screen = () => {
	const { handleLogin } = useFns();
	console.log(handleLogin);
	return (
		<div>
			<Headers />
			<h4>Screen</h4>
			<button onClick={handleLogin}>login</button>
		</div>
	);
};

export default Screen;
