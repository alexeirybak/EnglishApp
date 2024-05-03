import { useState, useRef } from 'react';
import { TranslationHistory } from '../../components/translateHistory/TranslateHistory';
import { ToTop } from '../../components/toTop/toTop';
import {
  handleValidateWordEn,
  handleValidateWordRu,
} from '../../helpers/validateWord';
import { fetchTranslation } from '../../api/apiDictionary';
import { playAudio } from '../../helpers/soundWord';
import { TranslationDef } from '../../components/translationDef/TranslationDef';
import iconSearch from './icon-search.png';
import iconChange from './change.png';
import iconDelete from './icon-delete.png';
import * as S from '../styles';
import * as St from './styles';

export const Dictionary = () => {
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState(null);
  const [search, setSearch] = useState(false);
  const [language, setLanguage] = useState('en-ru');
  const [errorWord, setErrorWord] = useState(null);
  const [translationHistory, setTranslationHistory] = useState([]);
  const [saveTranslation, setSaveTranslation] = useState(false);
  const inputRef = useRef(null);
  const [openCards, setOpenCards] = useState({});

  const saveTranslationToHistory = (translation) => {
    setTranslationHistory((prevHistory) => {
      const newHistory = [translation, ...prevHistory].slice(0, 40);
      localStorage.setItem('translationHistory', JSON.stringify(newHistory));
      setSaveTranslation(false);
      return newHistory;
    });
  };

  const handleWordChange = (event) => {
    setWord(event.target.value);
    if (language === 'ru-en') {
      handleValidateWordEn(setWord, setErrorWord, event);
    } else {
      handleValidateWordRu(setWord, setErrorWord, event);
    }
  };

  const handleReset = () => {
    setWord('');
    setErrorWord(null);
  };

  const handleTranslate = async () => {
    inputRef.current.focus();
    try {
      const data = await fetchTranslation(word, language);
      setTranslation(data);
      setSearch(true);
      setErrorWord(null);
      setSaveTranslation(true);
    } catch (error) {
      console.error(error.message);
      setSearch(true);
      setErrorWord(error.message);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en-ru' ? 'ru-en' : 'en-ru');
    setErrorWord(null);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <S.Section>
      <S.Container>
        <S.Title1>Dictionary</S.Title1>
        <St.DictionaryContent>
          <St.TranslateBlock>
            <St.WarningBlock>
              {errorWord && (
                <St.TranslateWarning>{errorWord}</St.TranslateWarning>
              )}
            </St.WarningBlock>
            <St.SearchBlock>
              <St.InputWord
                type='text'
                value={word}
                placeholder={
                  language === 'en-ru'
                    ? 'Введите на латинице'
                    : 'Введите на кириллице'
                }
                onChange={handleWordChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleTranslate();
                  }
                }}
                ref={inputRef}
              />
              {word && (
                <St.ResetButton onClick={handleReset}>
                  <St.ResetIcon src={iconDelete} alt='Очистить поле ввода' />
                </St.ResetButton>
              )}
              <St.ButtonSearch onClick={handleTranslate} disabled={errorWord}>
                <St.SearchImg src={iconSearch} alt='Перевести' />
              </St.ButtonSearch>
            </St.SearchBlock>
            <St.SettingsBlock>
              <St.SettingsText>
                {language === 'ru-en' ? (
                  <p>Перейти на EN-RU</p>
                ) : (
                  <p>Перейти на RU-EN</p>
                )}
              </St.SettingsText>
              <St.SettingsButton onClick={toggleLanguage}>
                <St.SettingsIcon
                  src={iconChange}
                  alt='Изменить порядок перевода'
                />
              </St.SettingsButton>
            </St.SettingsBlock>
            <St.TranslationBlock $borderVisible={translation !== null && search}>
              {translation !== null && search ? (
                translation.def.length > 0 ? (
                  translation.def.map((def, defIndex) => (
                    <TranslationDef
                    key={`${defIndex}-def`}
                    index={defIndex}
                    def={def}
                    openCards={openCards}
                    setOpenCards={setOpenCards}
                    />
                  ))
                ) : (
                  <St.TranslateWarning>
                    Слово не найдено, проверьте правильность ввода
                  </St.TranslateWarning>
                )
              ) : (
                <></>
              )}
              {saveTranslation && (
                <St.SaveButton
                  onClick={() => saveTranslationToHistory(translation)}
                >
                  Сохранить перевод
                </St.SaveButton>
              )}
            </St.TranslationBlock>
          </St.TranslateBlock>

          <TranslationHistory
            translationHistory={translationHistory}
            setTranslationHistory={setTranslationHistory}
            playAudio={playAudio}
          />
          <St.ApiLinkBlock>
            <St.ApiLink href='https://tech.yandex.ru/dictionary'>
              «Реализовано с помощью сервиса «Яндекс.Словарь»
            </St.ApiLink>
          </St.ApiLinkBlock>
        </St.DictionaryContent>
        <ToTop onClick={handleScrollToTop} />
      </S.Container>
    </S.Section>
  );
};
