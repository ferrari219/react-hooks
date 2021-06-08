import React from 'react';

const App = () => {
	const useNotification = (title, options) => {
		if (!('Notification' in window)) {
			return;
		}
		// useEffect(() => {}, []);
		const fireNotif = () => {
			if (Notification.permission !== 'granted') {
				Notification.requestPermission().then((permission) => {
					if (permission === 'granted') {
						new Notification(title, options);
					} else {
						return;
					}
				});
			} else {
				new Notification(title, options);
			}
		};
		return fireNotif;
	};
	const triggerNotif = useNotification('Can I allow this?');
	return (
		<div>
			<button type="button" onClick={triggerNotif}>
				click
			</button>
		</div>
	);
};

export default App;
