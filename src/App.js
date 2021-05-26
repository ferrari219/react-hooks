import React, { useState } from 'react';

const tabContent = [
	{
		id: 0,
		tab: 'tab1',
		content: 'This is tab1 content',
	},
	{
		id: 1,
		tab: 'tab2',
		content: 'This is tab2 content',
	},
];

const App = () => {
	return (
		<div>
			{tabContent.map((item) => (
				<button type="button" key={item.id}>
					{item.tab}
				</button>
			))}
		</div>
	);
};

export default App;
