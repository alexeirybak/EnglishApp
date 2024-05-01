import iconToTop from './top.png';
import * as S from './styles';

export const ToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return <S.ToTop onClick={handleScrollToTop}><S.ToTopIcon src={iconToTop} alt="Наверх"/></S.ToTop>;
};
