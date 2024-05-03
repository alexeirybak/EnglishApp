import styled from 'styled-components';

export const Lesson = styled.div`
  background-color: var(--page-bg);
  color: var(--text-color);
  position: relative;
  min-height: 100vh;
  padding: 100px 20px 150px;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeaderLesson = styled.h1`
  margin-top: 180px;
  padding-top: 150px;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--text-color);
  text-align: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-top: 50px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const WordsAcc = styled.div`
  overflow: hidden;
  transition: max-height 1s ease-in-out;
  max-height: ${(props) => (props.$isWords ? '1000px' : '0')};
`;

export const TheoryAcc = styled.div`
  overflow: hidden;
  transition: max-height 1s ease-in-out;
  max-height: ${(props) => (props.$isTheory ? '3000px' : '0')};
`;

export const PhrasesAcc = styled.div`
  overflow: hidden;
  height: ${(props) => (props.$isPhrases ? 'auto' : '0')};
`;

export const PlayerAcc = styled.div`
  overflow: hidden;
  transition: max-height 1s ease-in-out;
  max-height: ${(props) => (props.$isPlayer ? '1000px' : '0')};
`;

export const BtnWords = styled.button`
  margin: 30px auto 10px auto;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.$isWords ? '#c8102e' : '#012169')};
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 6px;
  width: 300px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  &:active {
    background-color: #333;
  }

  @media (max-width: 425px) {
    width: 180px;
    font-size: 1rem;
  }
`;

export const BtnTheory = styled(BtnWords)`
  background-color: ${(props) => (props.$isTheory ? '#c8102e' : '#012169')};
`;

export const BtnPhrases = styled(BtnWords)`
  background-color: ${(props) => (props.$isPhrases ? '#c8102e' : '#012169')};
`;

export const BtnPlayer = styled(BtnWords)`
  background-color: ${(props) => (props.$isPlayer ? '#c8102e' : '#012169')};
`;

export const Vocabulary = styled.div`
  font-size: 1.2rem;
  margin-top: 25px;
  padding-bottom: 30px;
  color: var(--id-word);
  text-align: center;
`;

export const LessonTheory = styled.div``;

export const Theory = styled.h3`
  padding-top: 35px;
  padding-bottom: 25px;
  font-size: 1.8rem;
  text-align: center;
`;
