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
