import React, { useState, useEffect } from 'react';

const App = () => {
	const useTitle = (initialTitle) => {
		const [title, setTitle] = useState(initialTitle);
		const updateTitle = () => {
			const htmlTitle = document.querySelector('title');
			htmlTitle.innerText = title;
		};
		useEffect(updateTitle, [title]);
		console.log({ title }, { setTitle });
		return setTitle;
		// return { setTitle }; //객체로 뺄지 그냥 사용할지는 내 선택
	};
	const titleUpdater = useTitle('Loading...');
	setTimeout(() => titleUpdater('Home'), 500);
	// setTimeout(() => titleUpdater.setTitle('Home'), 500);
	return (
		<div>
			<h1>hi</h1>
		</div>
	);
};

export default App;
