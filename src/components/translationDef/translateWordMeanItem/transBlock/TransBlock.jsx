import { playAudio } from '../../../../helpers/soundWord';
import iconPlay from '../../play.png';
import * as S from '../styles';

export const TransBlock = ({ trItem, trIndex, defIndex }) => {
  return (
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
            <S.ListenButton onClick={() => playAudio(meanItem.text)}>
              <S.Play src={iconPlay} alt='Прослушать' />
            </S.ListenButton>
          )}
        </S.SynBlock>
      ))}
    </S.SynBlockText>
  );
};
