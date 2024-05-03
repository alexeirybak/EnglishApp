import { playAudio } from '../../../../helpers/soundWord';
import iconPlay from '../../play.png';
import * as S from '../styles';

export const SynBlock = ({ trItem, trIndex, defIndex }) => {
  return (
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
            <S.ListenButton onClick={() => playAudio(synItem.text)}>
              <S.Play src={iconPlay} alt='Прослушать' />
            </S.ListenButton>
          )}
        </S.SynBlock>
      ))}
    </S.SynBlockText>
  );
};
