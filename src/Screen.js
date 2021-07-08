import React, { useContext } from 'react';
import Headers from './Headers';
// import { UserContext } from './context';
import { useFns } from './context';

const Screen = () => {
	// const { logUserIn } = useContext(UserContext);
	const { logUserIn } = useFns();
	// console.log(context);
	return (
		<div>
			<Headers />
			<h4>Screen</h4>
			<button onClick={logUserIn}>logIn</button>
		</div>
	);
};

export default Screen;
