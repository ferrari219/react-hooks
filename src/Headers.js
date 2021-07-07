import React, { useContext } from 'react';
import { UserContext } from './context';

const Headers = () => {
	const context = useContext(UserContext);
	console.log(context);
	return (
		<header>
			<a href="#">Home</a> Hello, user!
		</header>
	);
};

export default Headers;
