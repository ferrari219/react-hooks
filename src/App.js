import React, { useRef, useEffect } from 'react';

const App = () => {
	const useFadeIn = (duration = 1, delay = 1) => {
		const ref = useRef();
		useEffect(() => {
			const element = ref;
			// console.log(element.current);
			if (element.current && duration !== 'number') {
				const { current } = element;
				current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
				current.style.opacity = 1;
			}
		}, []);
		return {
			//이렇게 변형하면 재활용가능해짐
			ref: ref,
			style: { opacity: 0 },
		};
	};
	const fadeInH1 = useFadeIn();
	return (
		<div>
			<h1 {...fadeInH1}>test</h1>
		</div>
	);
};

export default App;
