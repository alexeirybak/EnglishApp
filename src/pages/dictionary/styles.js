import styled from 'styled-components';

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
    font-size: 0.9rem;
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
  border-radius: 6px;
  border: ${props => props.$borderVisible ? '1px solid #eee' : '1px solid transparent'};
  padding-bottom: 25px;
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
