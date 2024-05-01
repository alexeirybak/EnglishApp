import styled, { css } from 'styled-components';

export const TranslateHistory = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 600px;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 400px;
  }
  @media (max-width: 425px) {
    font-size: 1rem;
    width: 290px;
  }
  @media (max-width: 320px) {
    font-size: 1rem;
    width: 260px;
  }
  @media (max-width: 280px) {
    font-size: 1rem;
    width: 200px;
  }
`;

export const TranslateHistoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  @media (max-width: 425px) {
    font-size: 1rem;
  }
  @media (max-width: 240px) {
    font-size: 1rem;
  }
`;

export const HistoryHeader = styled.h3`
  text-align: center;
`;

export const TranslateItemHistory = styled.div`
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 6px;
`;

export const RemoveWordButton = styled.button`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const DeleteWord = styled.img`
  height: 24px;
  max-width: 24px;
  display: block;
`;

export const TranslateWord = styled.div`
  padding-bottom: 18px;
`;

export const TranslateWordTop = styled.div`
  padding-bottom: 12px;
  word-break: break-word;
`;

export const TranslateWordCardMean = styled.div`
  color: #c8102e;
  font-weight: 700;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
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
    justify-content: flex-start;
    justify-items: start;
  }
`;

export const TranslateHeadingWord = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
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
`;

export const Play = styled.img`
  width: 24px;
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
  min-height: 40px;
  gap: 8px;
  grid-template-columns: ${(props) =>
    props.$isLatin ? '4fr 4fr 1.5fr 2.5fr' : '1fr 1fr'};
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
  flex: 1;
  min-width: 150px;
`;

export const SynMark = styled.p`
  font-style: italic;
  padding-bottom: 8px;
`;

export const SynBlockText = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const SynBlock = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const SynItem = styled.div`
  color: var(--text-color);
  font-weight: normal;
`;

export const ClearHistoryButton = styled.button`
  border-radius: 6px;
  padding: 10px;
  width: 100px;
  color: #fff;
  margin: 0 auto;
  &:hover {
    background-color: #aaa;
    color: #14203d;
  }
`;
