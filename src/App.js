import React, { useEffect, useState } from 'react';

const App = () => {
	const useNetwork = (onChange) => {
		console.log(navigator.onLine); // true
		const [status, setStatus] = useState(navigator.onLine);

		const handleChange = () => {
			if (typeof onChange === 'function') {
				onChange(navigator.onLine);
			}
			setStatus(navigator.onLine);
		};
		useEffect(() => {
			window.addEventListener('online', handleChange);
			window.addEventListener('offline', handleChange);

			//'cwum 일때 처리
			return () => {
				window.removeEventListener('online', handleChange);
				window.removeEventListener('offline', handleChange);
			};
		}, []);
		return status;
	};
	const handleNetworkChange = (online) => {
		console.log(online ? 'Online' : 'Offline');
	};
	const onLine = useNetwork(handleNetworkChange);
	return <div>{onLine ? 'online' : 'offline'}</div>;
};

export default App;
