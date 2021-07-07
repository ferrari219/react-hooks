import React from 'react';

export const UserContext = React.createContext(); //저장소 생성

const UserContextProvider = ({ children }) => (
	<UserContext.Provider value={{ name: 'Nicolas' }}>
		{children}
	</UserContext.Provider>
);

export default UserContextProvider;
