import React, { useState } from 'react';
import Screen from './Screen';
import UserContextProvider from './context';

const App = () => {
	// const handleLogin = (e) => {
	// 	e.preventDefault();
	// };
	return (
		<UserContextProvider>
			<Screen />
			{/* <button onClick={handleLogin}>Log user in</button> */}
		</UserContextProvider>
	);
};

export default App;
