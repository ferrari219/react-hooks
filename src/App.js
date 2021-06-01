import React, { useEffect } from 'react';

const App = () => {
	const useBeforeLeave = (onBefore) => {
		const handle = (e) => {
			console.log(e);
			const { clientY } = e;
			if (clientY <= 0) onBefore();
			// console.log('leaving');
		};
		useEffect(() => {
			if (typeof onBefore === 'function') {
				document.addEventListener('mouseleave', handle); //cdm
				return () => document.removeEventListener('mouseleave', handle); //cdm
			} else {
				return;
			}
		}, []); //1번만 실행되게끔 처리
	};
	const begForLife = () => console.log('Plz dont leave');
	useBeforeLeave(begForLife);
	return (
		<div>
			<h1>test</h1>
		</div>
	);
};

export default App;
