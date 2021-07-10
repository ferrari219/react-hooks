import React from 'react';
import { useSetLang, useHyperTranslate } from './context';
const Screen = () => {
  const setLang = useSetLang();
  const hyperTranslate = useHyperTranslate();
  return (
    <div>
      <h3>{hyperTranslate('Hello')}</h3>
      <button onClick={() => setLang('ko')}>
        {hyperTranslate('Translations')}
      </button>
    </div>
  );
};

export default Screen;
