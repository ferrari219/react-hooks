import React from 'react';

const useConfirm = (message = '', onConfirm, onCancel) => {
	// console.log('useConfirm');
	const confirmAction = () => {
		if (window.confirm(message)) {
			// console.log('onConfirm');
			onConfirm();
		} else {
			// console.log('onCancel');
			onCancel();
		}
	};
	return confirmAction;
};

const App = () => {
	const confirm = () => console.log('삭제됨');
	const cancel = () => console.log('보류됨');
	const confirmDelete = useConfirm('정말로 삭제하시겠습니까?', confirm, cancel);
	return (
		<div>
			<button type="button" onClick={confirmDelete}>
				삭제
			</button>
		</div>
	);
};

export default App;
