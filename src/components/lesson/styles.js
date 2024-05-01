import styled from 'styled-components';

export const LessonCard = styled.div`
  width: 370px;
  height: 120px;
  background-color: var(--project-bg-tab);
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 270px;
    min-height: 70px;
  }
  @media (max-width: 375px) {
    width: 220px;
  }
`;

export const LessonTitle = styled.h3`
  padding: 15px 20px;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.3;
  color: var(--project-card-text);
`;
