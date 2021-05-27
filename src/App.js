import React, { useState } from 'react';

const content = [
	{
		id: 0,
		tab: 'Section 1',
		content: 'I am the content of the Section 1',
	},
	{
		id: 1,
		tab: 'Section 2',
		content: 'I am the content of the Section 2',
	},
];

const useTabs = (initialTab) => {
	const [currentIndex, setCurrentIndex] = useState(initialTab);

	return { currentIndex }; //이렇게만 하면 0만 노출되므로 필요한 답을 얻을수 없음
};

const App = () => {
	const tabs = useTabs(0);
	return (
		<div>
			{content.map((item) => (
				<button type="button" key={item.id}>
					{item.tab}
				</button>
			))}
			<div>{tabs.currentIndex}</div>
		</div>
	);
};

export default App;
