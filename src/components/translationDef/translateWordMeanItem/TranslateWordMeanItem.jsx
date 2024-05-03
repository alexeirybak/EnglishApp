import { SynBlock } from './synBlock/SynBlock';
import { TransBlock } from './transBlock/TransBlock';
import { playAudio } from '../../../helpers/soundWord';
import iconPlay from '../play.png';
import * as S from './styles';

const TranslateWordMeanItem = ({
  def,
  index,
  defIndex,
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
    <>
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
                      <SynBlock trItem={trItem} trIndex={trIndex} defIndex={defIndex}/>
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
                      <TransBlock trItem={trItem} trIndex={trIndex} defIndex={defIndex}/>
                    </S.CardSynText>
                  )}
                </S.CardSynBlock>
              </S.CardSyn>
            )}
          </S.OpenBlock>
        );
      })}
    </>
  );
};

export default TranslateWordMeanItem;
