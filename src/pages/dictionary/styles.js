import styled, { css } from 'styled-components';

export const DictionaryContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  padding-bottom: 150px;
`;

export const TranslateBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  align-items: center;
`;

export const WarningBlock = styled.div`
  height: 20px;
`;

export const TranslateWarning = styled.p`
  color: #c8102e;
  text-align: center;
  font-weight: 700;
`;

export const SearchBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 6px;
  box-sizing: border-box;
  position: relative;
  width: 300px;
  @media (max-width: 425px) {
    width: 200px;
  }
  @media (max-width: 240px) {
    width: 200px;
  }
`;

export const InputWord = styled.input`
  background-color: #fff;
  color: var(--nav-bg);
  padding: 10px 15px;
  border-radius: 6px 0 0 6px;
  width: 260px;
  @media (max-width: 425px) {
    font-size: 1rem;
    width: 160px;
  }
  @media (max-width: 240px) {
    font-size: 1rem;
    width: 160px;
  }
`;

export const ResetButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 45px;
  transform: translateY(-50%);
  padding: 0;
  margin: 0;
`;

export const ResetIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ButtonSearch = styled.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: #c8102e;
  border-radius: 0 6px 6px 0;
  width: 40px;
  align-items: center;
`;

export const SearchImg = styled.img`
  width: 24px;
`;

export const SettingsBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #012169;
  border-radius: 6px 9px 9px 6px;
  color: #fff;
  box-sizing: border-box;
  padding-left: 15px;
  width: 300px;
  @media (max-width: 425px) {
    font-size: 1rem;
    width: 200px;
  }
  @media (max-width: 240px) {
    font-size: 1rem;
    width: 200px;
  }
`;

export const SettingsText = styled.div``;

export const SettingsButton = styled.button`
  background-color: #aaa;
  padding: 2px;
  border-radius: 0 6px 6px 0;
  width: 40px;
  &:hover {
    background-color: #c8102e;
  }
`;

export const SettingsIcon = styled.img``;

export const TranslationBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 600px;
  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 290px;
  }
  @media (max-width: 320px) {
    width: 260px;
  }
  @media (max-width: 280px) {
    width: 200px;
  }
`;

export const Translation = styled.div`
  border: none;
  border-radius: 6px;
  padding: 15px;
  border: 1px solid #eee;
  color: var(--text-color);
  justify-content: flex-start;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const TranslateHeading = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 1.2rem;
  display: grid;
  align-items: center;
  grid-template-columns: ${(props) =>
    props.$isLatin ? '2fr 2fr 1fr' : '1fr 1fr'};
  row-gap: 8px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: start;
  }
`;

export const TranslateHeadingWord = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  color: #c8102e;
  font-weight: 700;
  font-size: 1.3rem;
`;

export const WordPos = styled.p`
  font-style: italic;
  word-break: break-word;
  color: var(--text-color);
  font-weight: normal;
  ${({ $isLatin }) =>
    $isLatin &&
    css`
      display: flex;
      justify-content: flex-end;
}
    `}
  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

export const ListenButton = styled.button`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;

export const Play = styled.img`
  width: 24px;
  display: inline-block;
  top: -3px;
  position: relative;
`;

export const OpenBlock = styled.div`
  border: 3px dotted transparent;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      border: 3px dotted var(--text-color);
      border-radius: 6px;
    `}
`;

export const TranslateWordMeanItem = styled.li`
  font-weight: normal;
  font-size: 1.2rem;
  padding: 5px 10px;
  list-style: none;
  display: grid;
  border-radius: 6px;
  grid-template-columns: ${(props) =>
    props.$isLatin ? '4fr 4fr 1.5fr 2.5fr' : '2fr 1fr'};
  word-break: break-word;
  align-items: center;
  color: var(--text-color);
  background-color: var(--page-bg-item-2);
  min-height: 40px;
  gap: 8px;
  align-content: center;
  ${({ $isEven }) =>
    $isEven &&
    css`
      background-color: var(--page-bg-item);
    `}

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    justify-items: start;
  }
`;

export const TranslateWordHeadingTranscription = styled.div`
  display: inline-block;
  font-weight: normal;
  color: var(--text-color);
  padding-right: 5px;
  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

export const ReadMore = styled.button`
  background-color: var(--page-bg-button);
  border-radius: 6px;
  padding: 8px 5px;
  color: #ccc;
  font-size: 1rem;
  margin-left: auto;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: var(--page-bg-button-2);
    color: #eee;
  }

  @media (max-width: 768px) {
    &:hover {
      background-color: var(--page-bg-button);
      color: #ccc;
    }

    &:active {
      background-color: var(--page-bg-button);
      color: #ccc;
    }
  }
`;

export const CardSyn = styled.div`
  background-color: var(--page-bg-item);
  padding: 10px;
  margin-top: 10px;
  border-radius: 6px;
  color: var(--text-color);
  font-size: 1.2rem;
`;

export const CardSynBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 0;
  gap: 10px;
`;

export const CardSynText = styled.div`
  padding: 10px;
  color: #c8102e;
  border-radius: 6px;
  background-color: var(--page-bg);
  flex: 1.2rem;
  min-width: 150px;
`;

export const SynMark = styled.p`
  font-style: italic;
`;

export const SynBlockText = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const SynBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SynMother = styled.div`
  color: var(--text-color);
  font-weight: normal;
`;

export const SynForeign = styled(SynMother)``;

export const SaveButton = styled.button`
  width: 150px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
  background-color: #c8102e;
  padding: 10px 15px;
  border-radius: 6px;
  color: #eee;
  &:hover {
    background-color: #555;
  }
`;

export const TranslateHistory = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 600px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 290px;
  }
  @media (max-width: 320px) {
    width: 260px;
  }
  @media (max-width: 280px) {
    width: 200px;
  }
`;

export const ApiLinkBlock = styled.p`
  padding: 15px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const ApiLink = styled.a`
  color: var(--title-1);
  opacity: 0.3;
`;
