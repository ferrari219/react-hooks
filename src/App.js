import React from 'react';
import useAxios from './useAxios';

const App = () => {
	const { loading, data, error } = useAxios({ url: 'https://yts.am/api/v2/list_movies.json' });
	console.log(`Loading:${loading}\n Error:${error}\n Data:${JSON.stringify(data)}`);
	return <div>.</div>;
};

export default App;
