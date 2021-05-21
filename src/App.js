import React, { useState } from 'react';

const App = () => {
	const [item, setItem] = useState(1); // item, setITem의 이름은 중요치 않으며, useState 안에는 초기값 입력
	const IncrementItem = () => {
		setItem(item + 1);
	};
	const DecrementItem = () => {
		setItem(item - 1);
	};
	return (
		<div>
			<h1>{item}</h1>
			<div>
				<button onClick={IncrementItem}>+</button>
				<button onClick={DecrementItem}>-</button>
			</div>
		</div>
	);
};

export default App;
