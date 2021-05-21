import React, { useState } from 'react';

const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (e) => {
		console.log(e.target);
	};
	console.log({ value }, { onChange });
	return { value, onChange };
};

const App = () => {
	const name = useInput('test');
	return (
		<div>
			<form>
				<input type="text" placeholder="Here" {...name} />
				{/* value={name.value} onChange={name.onChange} */}
			</form>
		</div>
	);
};

export default App;
