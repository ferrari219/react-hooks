import React, { useState, useContext } from 'react';

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({ name: 'Nico', login: false });
	const handleLogin = () => setUser({ ...user, login: true });
	return (
		<UserContext.Provider value={{ user, handleLogin: { handleLogin } }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const { user } = useContext(UserContext);
	// console.log(context);
	return user;
};
// console.log(useUser);
export const useFns = () => {
	const { handleLogin } = useContext(UserContext);
	// console.log(handleLogin);
	return handleLogin;
};

export default UserContextProvider;
