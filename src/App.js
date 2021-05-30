import React, { useRef, useEffect } from 'react';

const App = () => {
	const useClick = (onClick) => {
		const ref = useRef();
		// console.log(element.current); // undefinded로 나옴 => 비동기 처리 필요
		useEffect(() => {
			const element = ref;
			console.log(element.current); //<h1>hi</h1>
			if (typeof onClick === 'function') {
				console.log(element.current);
				// componentDidMount, componentDidUpdate일때 실행
				console.log('componentDidMount, componentDidUpdate');
				if (element.current) {
					//값이 있는건 확인했으니
					element.current.addEventListener('click', onClick);
				}
			}
			return () => {
				console.log(element.current);
				console.log('componentWillUnmount');
				if (element.current) {
					element.current.removeEventListener('click', onClick);
					//unmount 되면 해당 이벤트가 삭제 되므로 클릭해도 더이상 실행되지 않음
				}
			};
		}, [onClick]);
		return ref;
	};
	const sayHello = () => {
		console.log('Hello');
	}; //onclick에서 실행할 함수 제작
	const h1Element = useClick(sayHello); //componentDidMount, componentDidUpdate
	//const h1Element = useClick(sayHello); // componentWillUnmount
	return (
		<div>
			<h1 ref={h1Element}>hi</h1>
			<h2>bye</h2>
		</div>
	);
};

export default App;
