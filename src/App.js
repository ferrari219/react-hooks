import React, { useState } from 'react';
import Screen from './Screen';

const App = () => {
	const [user, setUser] = useState({
		name: 'anonymous',
		login: false,
	});

	const handleLogin = (e) => {
		e.preventDefault();
		// console.log('Login');
		setUser({
			name: 'Nico',
			login: true,
		});
	};
	return (
		<>
			<Screen user={user} />
			<button onClick={handleLogin}>Log user in</button>
		</>
	);
};

export default App;
