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

const App = () => {
	return (
		<div>
			{content.map((item) => (
				<button type="button" key={item.id}>
					{item.tab}
				</button>
			))}
		</div>
	);
};

export default App;
