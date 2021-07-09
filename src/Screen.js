import React from 'react';
import { useSetLang, useT } from './context';

const Screen = () => {
	const setLang = useSetLang();
	const t = useT();
	return (
		<>
			<h3>{t('Hello!')}</h3>
			<button onClick={() => setLang('es')}>{t('Translate')}</button>
		</>
	);
};

export default Screen;
