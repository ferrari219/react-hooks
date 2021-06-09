import React from 'react';
import useAxios from './useAxios';

const App = () => {
	const { loading, data, error, refetch } = useAxios({ url: 'https://reqres.in/api/users?delay=1' });
	console.log(`Loading:${loading}\n Error:${error}\n Data:${JSON.stringify(data)}`);
	return (
		<div className="App" style={{ height: '1000vh' }}>
			<h1>{data && data.status}</h1>
			<h2>{loading && 'Loading'}</h2>
			<button onClick={refetch}>Refetch</button>
		</div>
	);
};

export default App;
