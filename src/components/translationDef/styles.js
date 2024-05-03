import styled, { css } from 'styled-components';

export const Translation = styled.div`
  border: none;
  border-radius: 6px;
  padding: 15px;
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
  display: grid;
  row-gap: 8px;
  grid-template-columns: ${(props) =>
    props.$isLatin ? '2fr 2fr 1fr' : '1fr 1fr'};
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
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
  font-size: 1.3rem;
  color: var(--text-color);
  font-size: 1.2rem;
  font-weight: normal;
  ${({ $isLatin }) =>
    $isLatin &&
    css`
      display: flex;
      justify-content: flex-end;
}
    `}
`;

export const ListenButton = styled.button`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 320px) {
    margin: 0 auto;
  }
`;

export const Play = styled.img`
  min-width: 30px;
  max-width: 30px;
`;

export const OpenBlock = styled.div`
  border: 3px solid transparent;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      border: 3px solid var(--page-bg-button);
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
  min-height: 40px;
  gap: 8px;
  grid-template-columns: ${(props) =>
    props.$isLatin ? '4fr 4fr 1fr 3fr' : '1fr 1fr'};
  word-break: break-word;
  align-items: center;
  color: var(--text-color);
  background-color: var(--page-bg-item-2);
  ${({ $isEven }) =>
    $isEven &&
    css`
      background-color: var(--page-bg-item);
    `}
  @media (max-width: 768px) {
    justify-items: center;
    grid-template-columns: 1fr;
  }
`;

export const TrItemText = styled.p`
  @media (max-width: 320px) {
    margin: 0 auto;
  }
`;

export const TranslateWordHeadingTranscription = styled.div`
  display: inline-block;
  font-weight: normal;
  color: var(--text-color);
  padding-right: 5px;
  @media (max-width: 768px) {
    margin: auto;
  }
`;

export const ReadMore = styled.button`
  background-color: var(--page-bg-button);
  border-radius: 6px;
  padding: 8px 5px;
  color: #ccc;
  font-size: 1rem;
  margin-left: auto;
  width: 100px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: var(--page-bg-button-2);
    color: #eee;
  }

  @media (max-width: 768px) {
    &:hover {
      background-color: var(--page-bg-button-2);
      color: #ccc;
    }

    &:active {
      background-color: var(--page-bg-button);
      color: #ccc;
    }
  }
  @media (max-width: 768px) {
    margin: 0 auto;
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
