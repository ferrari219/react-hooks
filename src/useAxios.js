import defaultAxios from 'axios';
import react, { useState, useEffect } from 'react';

const useAxios = (opts, axiosInstance = defaultAxios) => {
	const [state, setstate] = useState({
		loading: true,
		error: null,
		data: null,
	});
	const [trigger, setTrigger] = useState(0);
	const refetch = () => {
		console.log(Date.now());
		setstate({
			...state,
			loading: true,
		});
		setTrigger(Date.now());
	};

	useEffect(() => {
		if (!opts.url) return;
		else {
			axiosInstance(opts)
				.then((data) => {
					setstate({
						...state,
						loading: false,
						data,
					});
				})
				.catch((error) => {
					setstate({
						...state,
						loading: false,
						error,
					});
				});
		}
	}, [trigger]);

	return { ...state, refetch };
};

export default useAxios;
