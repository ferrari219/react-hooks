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

const useTabs = (initialTab, allTabs) => {
	const [currentIndex, setCurrentIndex] = useState(initialTab);

	if (!allTabs || !Array.isArray(allTabs)) {
		// 에러 안나게 처리
		return;
	}

	// console.log(setCurrentIndex);
	return {
		currentItem: allTabs[currentIndex],
		changeItem: setCurrentIndex,
	};
};

const App = () => {
	const { currentItem, changeItem } = useTabs(0, content);
	// const tabs = useTabs(0);
	// const tabs = useTabs(0, content);
	return (
		<div>
			{content.map((item, index) => (
				<button type="button" key={item.id} onClick={() => changeItem(index)}>
					{item.tab}
				</button>
			))}
			<div>{currentItem.content}</div>
		</div>
	);
};

export default App;
