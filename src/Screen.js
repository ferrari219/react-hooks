import React from 'react';
import Headers from './Headers';

const Screen = ({ user }) => {
	return (
		<div>
			<Headers user={user} />
			<h4>First Screen</h4>
		</div>
	);
};

export default Screen;
