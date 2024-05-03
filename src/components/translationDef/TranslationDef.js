import { translatePartOfSpeech } from '../../helpers/translatePos';
import { playAudio } from '../../helpers/soundWord';
import iconPlay from './play.png';
import * as S from './styles';

export const TranslationDef = ({
  index,
  defIndex,
  def,
  openCards,
  setOpenCards,
}) => {
  const toggleCard = (cardId) => {
    setOpenCards((prevOpenCards) => ({
      ...prevOpenCards,
      [cardId]: !prevOpenCards[cardId],
    }));
  };
  return (
    <S.Translation key={`${index}-def-${defIndex}`}>
      <S.TranslateHeading $isLatin={/^[a-zA-Z\s-]*$/.test(def.text)}>
        <S.TranslateHeadingWord>
          {def.text}
          {def.ts && (
            <S.TranslateWordHeadingTranscription>
              [{def.ts}]
            </S.TranslateWordHeadingTranscription>
          )}
        </S.TranslateHeadingWord>
        <S.WordPos $isLatin={!/^[a-zA-Z\s-]*$/.test(def.text)}>
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
          <S.OpenBlock key={cardId} $isOpen={openCards[cardId]}>
            <S.TranslateWordMeanItem
              $isLatin={/^[a-zA-Z\s-]*$/.test(trItem.text)}
              $isEven={trIndex % 2 === 0}
              key={`${index}-def-${defIndex}-tr-${trIndex}`}
            >
              <S.TrItemText>{trItem.text}</S.TrItemText>
              {trItem.ts && (
                <S.TranslateWordHeadingTranscription>
                  [{trItem.ts}]
                </S.TranslateWordHeadingTranscription>
              )}
              {/^[a-zA-Z\s-]*$/.test(trItem.text) && (
                <S.ListenButton onClick={() => playAudio(trItem.text)}>
                  <S.Play src={iconPlay} alt='Прослушать' />
                </S.ListenButton>
              )}
              {(trItem.mean || trItem.syn) && (
                <S.ReadMore onClick={() => toggleCard(cardId)}>
                  {openCards[cardId] ? 'Свернуть' : 'Подробнее'}
                </S.ReadMore>
              )}
            </S.TranslateWordMeanItem>
            {openCards[cardId] && (
              <S.CardSyn>
                {trItem.mean.length > 0 && <p>Другие значения</p>}
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
                        {trItem.syn.map((synItem, synIndex) => (
                          <S.SynBlock
                            key={`${trIndex}-def-${defIndex}-tr-${trIndex}-syn-${synIndex}`}
                          >
                            <S.SynMother>{synItem.text}</S.SynMother>
                            {synItem.ts && (
                              <S.TranslateWordHeadingTranscription>
                                [{trItem.ts}]
                              </S.TranslateWordHeadingTranscription>
                            )}
                            {/^[a-zA-Z\s-]*$/.test(synItem.text) && (
                              <S.ListenButton
                                onClick={() => playAudio(synItem.text)}
                              >
                                <S.Play src={iconPlay} alt='Прослушать' />
                              </S.ListenButton>
                            )}
                          </S.SynBlock>
                        ))}
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
                        {trItem.mean.map((meanItem, meanIndex) => (
                          <S.SynBlock
                            key={`${trIndex}-def-${defIndex}-tr-${trIndex}-mean-${meanIndex}`}
                          >
                            <S.SynForeign>{meanItem.text}</S.SynForeign>
                            {meanItem.ts && (
                              <S.TranslateWordHeadingTranscription>
                                [{meanItem.ts}]
                              </S.TranslateWordHeadingTranscription>
                            )}
                            {/^[a-zA-Z\s-]*$/.test(meanItem.text) && (
                              <S.ListenButton
                                onClick={() => playAudio(meanItem.text)}
                              >
                                <S.Play src={iconPlay} alt='Прослушать' />
                              </S.ListenButton>
                            )}
                          </S.SynBlock>
                        ))}
                      </S.SynBlockText>
                    </S.CardSynText>
                  )}
                </S.CardSynBlock>
              </S.CardSyn>
            )}
          </S.OpenBlock>
        );
      })}
    </S.Translation>
  );
};
