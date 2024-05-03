import TranslateWordMeanItem from './translateWordMeanItem/TranslateWordMeanItem';
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
      <TranslateWordMeanItem
        def={def}
        index={index}
        defIndex={defIndex}
        openCards={openCards}
        setOpenCards={setOpenCards}
      />
    </S.Translation>
  );
};
