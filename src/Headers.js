// import React, { useContext } from 'react';
import React from 'react';
import { useUser } from './context';

const Headers = () => {
	const { name, login } = useUser();
	console.log(name, login);
	return (
		<header>
			<a href="#">Home</a> Hello, {login ? name : 'anonymous'}!
		</header>
	);
};

export default Headers;
