import React, { useState } from 'react';

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({ name: 'Nico', login: false });
	const handleLogin = () => setUser({ ...user, login: true });
	return (
		<UserContext.Provider value={{ user, handleLogin }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
