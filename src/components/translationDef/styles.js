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

export const TranslateWordHeadingTranscription = styled.div`
  display: inline-block;
  font-weight: normal;
  color: var(--text-color);
  padding-right: 5px;
  @media (max-width: 768px) {
    margin: auto;
  }
`;




