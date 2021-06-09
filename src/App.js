import React from 'react';
import useAxios from './useAxios';

const App = () => {
	const { loading, error, data, refetch } = useAxios({
		url: 'https://reqres.in/api/users?delay=1',
	});
	// console.log(loading, error, data);
	console.log(`Loading:${loading}\n Error:${error}\n Data:${JSON.stringify(data)}`);
	return (
		<div>
			<h1>{data && data.status}</h1>
			<h2>{loading && 'Loading'}</h2>
			<button type="button" onClick={refetch}>
				refetch
			</button>
		</div>
	);
};

export default App;
