import { useState, useRef } from 'react';
import { TranslationHistory } from '../../components/translateHistory/TranslateHistory';
import { ToTop } from '../../components/toTop/toTop';
import { translatePartOfSpeech } from '../../helpers/translatePos';
import {
  handleValidateWordEn,
  handleValidateWordRu,
} from '../../helpers/validateWord';
import { fetchTranslation } from '../../api/apiDictionary';
import { playAudio } from '../../helpers/soundWord';
import iconSearch from './icon-search.png';
import iconChange from './change.png';
import iconDelete from './icon-delete.png';
import iconPlay from './play.png';
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
  const [openCards, setOpenCards] = useState({});
  const inputRef = useRef(null);

  const toggleCard = (cardId) => {
    setOpenCards((prevOpenCards) => ({
      ...prevOpenCards,
      [cardId]: !prevOpenCards[cardId],
    }));
  };

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
            <St.TranslationBlock>
              {translation !== null && search ? (
                translation.def.length > 0 ? (
                  translation.def.map((def, defIndex) => (
                    <St.Translation key={defIndex}>
                      <St.TranslateHeading
                        $isLatin={/^[a-zA-Z\s-]*$/.test(def.text)}
                      >
                        <St.TranslateHeadingWord>
                          {def.text}
                          {def.ts && (
                            <St.TranslateWordHeadingTranscription>
                              [{def.ts}]
                            </St.TranslateWordHeadingTranscription>
                          )}
                        </St.TranslateHeadingWord>
                        <St.WordPos $isLatin={!/^[a-zA-Z\s-]*$/.test(def.text)}>
                          {translatePartOfSpeech(def.pos)}{' '}
                        </St.WordPos>{' '}
                        {/^[a-zA-Z\s-]*$/.test(def.text) && (
                          <St.ListenButton onClick={() => playAudio(def.text)}>
                            <St.Play src={iconPlay} alt='Прослушать' />
                          </St.ListenButton>
                        )}
                      </St.TranslateHeading>

                      {def.tr.map((trItem, trIndex) => {
                        const cardId = `${trIndex}-def-${defIndex}-tr-${trIndex}`;
                        return (
                          <St.OpenBlock
                            key={cardId}
                            $isOpen={openCards[cardId]}
                          >
                            <St.TranslateWordMeanItem
                              $isLatin={/^[a-zA-Z\s-]*$/.test(trItem.text)}
                              $isEven={trIndex % 2 === 0}
                            >
                              <St.TrItemText>{trItem.text}</St.TrItemText>
                              {trItem.ts && (
                                <St.TranslateWordHeadingTranscription>
                                  [{trItem.ts}]
                                </St.TranslateWordHeadingTranscription>
                              )}
                              {/^[a-zA-Z\s-]*$/.test(trItem.text) && (
                                <St.ListenButton
                                  onClick={() => playAudio(trItem.text)}
                                >
                                  <St.Play src={iconPlay} alt='Прослушать' />
                                </St.ListenButton>
                              )}
                              {(trItem.mean || trItem.syn) && (
                                <St.ReadMore onClick={() => toggleCard(cardId)}>
                                  {openCards[cardId] ? 'Свернуть' : 'Подробнее'}
                                </St.ReadMore>
                              )}
                            </St.TranslateWordMeanItem>
                            {openCards[cardId] && (
                              <St.CardSyn>
                                {trItem.mean.length > 0 && (
                                  <p>Другие значения</p>
                                )}
                                <St.CardSynBlock>
                                  {trItem.syn && (
                                    <St.CardSynText>
                                      <St.SynMark>
                                        {trItem.syn.some((synItem) =>
                                          /^[а-яА-Я\s-]*$/.test(synItem.text),
                                        )
                                          ? 'на русском:'
                                          : 'на английском:'}
                                      </St.SynMark>
                                      <St.SynBlockText>
                                        {trItem.syn.map((synItem, synIndex) => (
                                          <St.SynBlock
                                            key={`${trIndex}-def-${defIndex}-tr-${trIndex}-syn-${synIndex}`}
                                          >
                                            <St.SynMother>
                                              {synItem.text}
                                            </St.SynMother>
                                            {synItem.ts && (
                                              <St.TranslateWordHeadingTranscription>
                                                [{trItem.ts}]
                                              </St.TranslateWordHeadingTranscription>
                                            )}
                                            {/^[a-zA-Z\s-]*$/.test(
                                              synItem.text,
                                            ) && (
                                              <St.ListenButton
                                                onClick={() =>
                                                  playAudio(synItem.text)
                                                }
                                              >
                                                <St.Play
                                                  src={iconPlay}
                                                  alt='Прослушать'
                                                />
                                              </St.ListenButton>
                                            )}
                                          </St.SynBlock>
                                        ))}
                                      </St.SynBlockText>
                                    </St.CardSynText>
                                  )}
                                  {trItem.mean && (
                                    <St.CardSynText>
                                      {trItem.mean.some((meanItem) =>
                                        /^[а-яА-Я\s-]*$/.test(meanItem.text),
                                      ) ? (
                                        <St.SynMark>на русском</St.SynMark>
                                      ) : (
                                        <St.SynMark>на английском</St.SynMark>
                                      )}
                                      <St.SynBlockText>
                                        {trItem.mean.map(
                                          (meanItem, meanIndex) => (
                                            <St.SynBlock
                                              key={`${trIndex}-def-${defIndex}-tr-${trIndex}-mean-${meanIndex}`}
                                            >
                                              <St.SynForeign>
                                                {meanItem.text}
                                              </St.SynForeign>
                                              {meanItem.ts && (
                                                <St.TranslateWordHeadingTranscription>
                                                  [{meanItem.ts}]
                                                </St.TranslateWordHeadingTranscription>
                                              )}
                                              {/^[a-zA-Z\s-]*$/.test(
                                                meanItem.text,
                                              ) && (
                                                <St.ListenButton
                                                  onClick={() =>
                                                    playAudio(meanItem.text)
                                                  }
                                                >
                                                  <St.Play
                                                    src={iconPlay}
                                                    alt='Прослушать'
                                                  />
                                                </St.ListenButton>
                                              )}
                                            </St.SynBlock>
                                          ),
                                        )}
                                      </St.SynBlockText>
                                    </St.CardSynText>
                                  )}
                                </St.CardSynBlock>
                              </St.CardSyn>
                            )}
                          </St.OpenBlock>
                        );
                      })}
                    </St.Translation>
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
