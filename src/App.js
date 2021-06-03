import React, { useState, useEffect } from 'react';

const App = () => {
	const useScroll = () => {
		const [state, setState] = useState({
			x: 0,
			y: 0,
		});
		const onScroll = () => {
			// console.log('x', window.scrollX, 'y', window.scrollY);
			setState({ x: window.scrollX, y: window.scrollY });
		};
		useEffect(() => {
			console.log('effect');
			window.addEventListener('scroll', onScroll);
			return () => {
				console.log('cleanup');
				window.removeEventListener('scroll', onScroll);
			};
		}, [state]);
		return state;
	};
	const { y } = useScroll();
	return (
		<div style={{ height: '1000vh' }}>
			<h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>test</h1>
		</div>
	);
};

export default App;
