import React from 'react';
import { useState, useEffect } from 'react';
import { translatePartOfSpeech } from '../../helpers/translatePos';
import { playAudio } from '../../helpers/soundWord';
import iconDelete from './icon-delete.png';
import iconPlay from './play.png';
import * as S from './styles';

export const TranslationHistory = ({
  translationHistory,
  setTranslationHistory,
}) => {
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (cardId) => {
    setOpenCards((prevOpenCards) => ({
      ...prevOpenCards,
      [cardId]: !prevOpenCards[cardId],
    }));
  };

  const loadTranslationHistory = () => {
    const history =
      JSON.parse(localStorage.getItem('translationHistory')) || [];
    setTranslationHistory(history);
    setOpenCards(history.map(() => false));
  };

  useEffect(() => {
    loadTranslationHistory();
  }, []);

  const clearTranslationHistory = () => {
    setTranslationHistory([]);
    localStorage.removeItem('translationHistory');
  };

  const removeWordFromHistory = (wordToRemove) => {
    setTranslationHistory((prevHistory) => {
      const newHistory = prevHistory.filter((historyItem) => {
        if (historyItem.def && historyItem.def.length > 0) {
          return historyItem.def[0].text !== wordToRemove;
        }
        return true;
      });
      localStorage.setItem('translationHistory', JSON.stringify(newHistory));
      return newHistory;
    });
  };

  if (translationHistory.length === 0) return null;

  return (
    <S.TranslateHistory>
      <S.TranslateHistoryBlock>
        <S.HistoryHeader>История переводов</S.HistoryHeader>
        {translationHistory.map(
          (historyItem, index) =>
            historyItem.def &&
            historyItem.def.length > 0 && (
              <S.TranslateItemHistory key={index}>
                <S.RemoveWordButton
                  onClick={() => removeWordFromHistory(historyItem.def[0].text)}
                >
                  <S.DeleteWord src={iconDelete} alt='Удалить слово' />
                </S.RemoveWordButton>

                {historyItem.def.map((def, defIndex) => (
                  <S.TranslateWord key={`${index}-def-${defIndex}`}>
                    <S.TranslateWordTop>
                      <S.TranslateWordCardMean>
                        <S.TranslateHeading
                          $isLatin={/^[a-zA-Z\s-]*$/.test(def.text)}
                        >
                          <S.TranslateHeadingWord>
                            {def.text}
                            {def.ts && (
                              <S.TranslateWordHeadingTranscription>
                                [{def.ts}]
                              </S.TranslateWordHeadingTranscription>
                            )}
                          </S.TranslateHeadingWord>
                          <S.WordPos
                            $isLatin={!/^[a-zA-Z\s-]*$/.test(def.text)}
                          >
                            {translatePartOfSpeech(def.pos)}{' '}
                          </S.WordPos>{' '}
                          {/^[a-zA-Z\s-]*$/.test(def.text) && (
                            <S.ListenButton onClick={() => playAudio(def.text)}>
                              <S.Play src={iconPlay} alt='Прослушать' />
                            </S.ListenButton>
                          )}
                        </S.TranslateHeading>

                        {def.tr.map((trItem, trIndex) => {
                          const cardId = `${index}-def-${defIndex}-tr-${trIndex}`;
                          return (
                            <S.OpenBlock
                              key={cardId}
                              $isOpen={openCards[cardId]}
                            >
                              <S.TranslateWordMeanItem
                                $isLatin={/^[a-zA-Z\s-]*$/.test(trItem.text)}
                                $isEven={trIndex % 2 === 0}
                              >
                                {trItem.text}{' '}
                                {trItem.ts && (
                                  <S.TranslateWordHeadingTranscription>
                                    [{trItem.ts}]
                                  </S.TranslateWordHeadingTranscription>
                                )}
                                {/^[a-zA-Z\s-]*$/.test(trItem.text) && (
                                  <S.ListenButton
                                    onClick={() => playAudio(trItem.text)}
                                  >
                                    <S.Play src={iconPlay} alt='Прослушать' />
                                  </S.ListenButton>
                                )}
                                {(trItem.mean || trItem.syn) && (
                                  <S.ReadMore
                                    onClick={() => toggleCard(cardId)}
                                  >
                                    {openCards[cardId]
                                      ? 'Свернуть'
                                      : 'Подробнее'}
                                  </S.ReadMore>
                                )}
                              </S.TranslateWordMeanItem>
                              {openCards[cardId] && (
                                <S.CardSyn>
                                  {trItem.mean && (
                                    <p>Другие значения</p>
                                  )}
                                  <S.CardSynBlock>
                                    {trItem.syn && (
                                      <S.CardSynText>
                                        <S.SynMark>
                                          {trItem.syn.some((synItem) =>
                                            /^[а-яА-Я\s-]*$/.test(synItem.text),
                                          )
                                            ? 'на русском:'
                                            : 'на английском:'}
                                        </S.SynMark>
                                        <S.SynBlockText>
                                          {trItem.syn.map(
                                            (synItem, synIndex) => (
                                              <S.SynBlock
                                                key={`${index}-def-${defIndex}-tr-${trIndex}-syn-${synIndex}`}
                                              >
                                                <S.SynItem>
                                                  {synItem.text}
                                                </S.SynItem>
                                                {synItem.ts && (
                                                  <S.TranslateWordHeadingTranscription>
                                                    [{trItem.ts}]
                                                  </S.TranslateWordHeadingTranscription>
                                                )}
                                                {/^[a-zA-Z\s-]*$/.test(
                                                  synItem.text,
                                                ) && (
                                                  <S.ListenButton
                                                    onClick={() =>
                                                      playAudio(synItem.text)
                                                    }
                                                  >
                                                    <S.Play
                                                      src={iconPlay}
                                                      alt='Прослушать'
                                                    />
                                                  </S.ListenButton>
                                                )}
                                              </S.SynBlock>
                                            ),
                                          )}
                                        </S.SynBlockText>
                                      </S.CardSynText>
                                    )}
                                    {trItem.mean && (
                                      <S.CardSynText>
                                        {trItem.mean.some((meanItem) =>
                                          /^[а-яА-Я\s-]*$/.test(meanItem.text),
                                        ) ? (
                                          <S.SynMark>на русском</S.SynMark>
                                        ) : (
                                          <S.SynMark>на английском</S.SynMark>
                                        )}
                                        <S.SynBlockText>
                                          {trItem.mean.map(
                                            (meanItem, meanIndex) => (
                                              <S.SynBlock
                                                key={`${index}-def-${defIndex}-tr-${trIndex}-mean-${meanIndex}`}
                                              >
                                                <S.SynItem>
                                                  {meanItem.text}
                                                </S.SynItem>
                                                {meanItem.ts && (
                                                  <S.TranslateWordHeadingTranscription>
                                                    [{meanItem.ts}]
                                                  </S.TranslateWordHeadingTranscription>
                                                )}
                                                {/^[a-zA-Z\s-]*$/.test(
                                                  meanItem.text,
                                                ) && (
                                                  <S.ListenButton
                                                    onClick={() =>
                                                      playAudio(meanItem.text)
                                                    }
                                                  >
                                                    <S.Play
                                                      src={iconPlay}
                                                      alt='Прослушать'
                                                    />
                                                  </S.ListenButton>
                                                )}
                                              </S.SynBlock>
                                            ),
                                          )}
                                        </S.SynBlockText>
                                      </S.CardSynText>
                                    )}
                                  </S.CardSynBlock>
                                </S.CardSyn>
                              )}
                            </S.OpenBlock>
                          );
                        })}
                      </S.TranslateWordCardMean>
                    </S.TranslateWordTop>
                  </S.TranslateWord>
                ))}
              </S.TranslateItemHistory>
            ),
        )}
      </S.TranslateHistoryBlock>
      <S.ClearHistoryButton onClick={clearTranslationHistory}>
        <img src={iconDelete} alt='Удалить всю историю переводов' />
      </S.ClearHistoryButton>
    </S.TranslateHistory>
  );
};
