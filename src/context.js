import React, { createContext, useState, useContext } from 'react';

export const LangContext = createContext();

const LangContextProvicder = ({ defaultLang, children, translations }) => {
  const [lang, setLang] = useState(defaultLang);
  console.log(lang);
  const hyperTranslate = (text) => {
    if (lang === defaultLang) return text;
    else return translations[lang][text];
  };
  return (
    <LangContext.Provider value={{ setLang, hyperTranslate }}>
      {children}
    </LangContext.Provider>
  );
};

export const useSetLang = () => {
  const { setLang } = useContext(LangContext);
  return setLang;
};
export const useHyperTranslate = () => {
  const { hyperTranslate } = useContext(LangContext);
  return hyperTranslate;
};

export default LangContextProvicder;
