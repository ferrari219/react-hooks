// import React, { useContext } from 'react';
import React, { useContext } from 'react';
import { UserContext } from './context';

const Headers = () => {
	const {
		user: { name, login },
	} = useContext(UserContext);
	// console.log(name, login);
	return (
		<header>
			<a href="#">Home</a> Hello, {login ? name : 'anonymous'}!
		</header>
	);
};

export default Headers;
