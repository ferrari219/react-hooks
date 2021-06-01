import React from 'react';

const App = () => {
	const usePreventLeave = () => {
		//exit 확인창 생성 후 취할 행동
		const listener = (e) => {
			e.preventDefault(); // 표준방법
			e.returnValue = ''; // Chrome에서는 returnValue 설정이 필요함
			console.log('test');
		};
		const enablePrevent = () => window.addEventListener('beforeunload', listener);
		const disablePrevent = () => window.removeEventListener('beforeunload', listener);
		return { enablePrevent, disablePrevent };
	};
	const { enablePrevent, disablePrevent } = usePreventLeave();
	return (
		<div>
			<button type="button" onClick={enablePrevent}>
				Protect
			</button>
			<button type="button" onClick={disablePrevent}>
				UnProtect
			</button>
		</div>
	);
};

export default App;
