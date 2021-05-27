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

	// return { currentIndex }; //이렇게만 하면 0만 노출되므로 필요한 답을 얻을수 없음
	return {
		currentItem: allTabs[currentIndex],
		changeItem: setCurrentIndex,
	};
};

const App = () => {
	// const tabs = useTabs(0); //allTabs에 대한 정의도 필요
	const { currentItem, changeItem } = useTabs(0, content); //allTabs에 대한 정의도 필요
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
