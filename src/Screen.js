import React, { useContext } from 'react';
import Headers from './Headers';
import { UserContext } from './context';

const Screen = () => {
	const { handleLogin } = useContext(UserContext);
	// console.log({ handleLogin });
	return (
		<div>
			<Headers />
			<h4>Screen</h4>
			<button onClick={handleLogin}>login</button>
		</div>
	);
};

export default Screen;
