// import React, { useContext } from 'react';
import React from 'react';
import { useUser } from './context';

const Headers = () => {
	// const context = useContext(UserContext);
	const { name, loggedIn } = useUser();
	// console.log(name, loggedIn);
	return (
		<header>
			<a href="#">Home</a> Hello, {name}! You are{' '}
			{loggedIn ? 'loggedIn' : 'anonymous'}
		</header>
	);
};

export default Headers;
