import React, { useContext } from 'react';
import { UserContext } from './context';

const Headers = () => {
	// const context = useContext(UserContext);
	const { name } = useContext(UserContext);
	console.log(name);
	return (
		<header>
			<a href="#">Home</a> Hello, {name}!
		</header>
	);
};

export default Headers;
