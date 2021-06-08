import defaultAxios from 'axios';
import react, { useState, useEffect } from 'react';

const useAxios = (opts, axiosInstance = defaultAxios) => {
	const [state, setState] = useState({
		loading: true,
		error: null,
		data: null,
	});
	if (opts.url) return; //url이 없다면 리턴

	useEffect(() => {
		axiosInstance(opts).then((data) => {
			setState({
				...state,
				loading: false,
				data,
			});
		});
		return () => {};
	}, []);

	return state;
};
export default useAxios;
