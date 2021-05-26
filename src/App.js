import React, { useState } from 'react';

const useInput = (initialValue, validator) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (e) => {
		const {
			target: { value },
		} = e;
		// const value = e.target.value;
		let willUpdate = true;
		if (typeof validator === 'function') {
			willUpdate = validator(value);
			console.log(validator(value));
		}
		if (willUpdate) setValue(value);
	};
	return { value, onChange };
};

const App = () => {
	// const maxLen = (value) => value.length <= 10;
	const maxLen = (value) => !value.includes('@');
	const inptBox = useInput('M', maxLen);
	return (
		<div>
			<input type="text" {...inptBox} />
			{/* <input type="text" value={inptBox.value} onChange={inptBox.onChange} /> */}
		</div>
	);
};

export default App;
