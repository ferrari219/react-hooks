import React from 'react';

const Headers = ({ user }) => {
	return (
		<header>
			<a href="#">Home</a> Hello, {user.name}!
		</header>
	);
};

export default Headers;
