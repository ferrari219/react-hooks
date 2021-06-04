import React, { useRef } from 'react';

const App = () => {
	const useFullScreen = () => {
		const element = useRef();

		const triggerFull = () => {
			if (element.current) {
				element.current.requestFullscreen();
			}
		};

		const exitFull = () => {
			document.exitFullscreen();
		};
		return { element, triggerFull, exitFull };
	};
	const { element, triggerFull, exitFull } = useFullScreen();
	return (
		<div>
			<div ref={element}>
				<button onClick={exitFull}>Exit FullScreen</button>
				<img
					src="https://images.theconversation.com/files/393210/original/file-20210401-13-z6rl6z.jpg?ixlib=rb-1.1.0&rect=9%2C0%2C2994%2C1999&q=45&auto=format&w=496&fit=clip"
					alt=""
					style={{
						width: '100%',
					}}
				/>
			</div>
			<button onClick={triggerFull}>Make FullScreen</button>
		</div>
	);
};

export default App;
