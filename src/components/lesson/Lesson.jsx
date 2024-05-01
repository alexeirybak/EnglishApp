import { NavLink } from 'react-router-dom';
import * as S from './styles';

export const Lesson = ({ title, index }) => {
  return (
    <NavLink to={`/lesson/${index}`}>
      <S.LessonCard>
        <S.LessonTitle>{title}</S.LessonTitle>
      </S.LessonCard>
    </NavLink>
  );
};

