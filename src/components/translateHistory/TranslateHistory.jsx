import React from 'react';
import { useState, useEffect } from 'react';
import { TranslationDef } from '../translationDef/TranslationDef';
import iconDelete from './icon-delete.png';
import * as S from './styles';

export const TranslationHistory = ({
  translationHistory,
  setTranslationHistory,
}) => {
  const [openCards, setOpenCards] = useState({});

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
                  <TranslationDef
                    key={`${index}-def-${defIndex}`}
                    index={index}
                    defIndex={defIndex}
                    def={def}
                    openCards={openCards}
                    setOpenCards={setOpenCards}
                  />
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
