import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.main`
  background-color: var(--page-bg);
  color: var(--text-color);
  opacity: 0.93;
  min-height: 100vh;
  padding-bottom: 100px;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 120px;
  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const Title1 = styled.h1`
  margin-bottom: 60px;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--title-1);
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const ContentList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  text-align: center;
  justify-content: space-around;
  padding-bottom: 90px;
`;

export const ContentListItem = styled.li`
  font-size: 18px;
  line-height: 1.5;
  @media (max-width: 620px) {
    font-size: 16px;
  }
`;

export const Title2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
`;

export const Paragraph = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 15px;
`;

export const ParagraphMethod = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 45px;
`;

export const Contacts = styled.a`
  color: var(--text-color);
  &:hover {
    color: var(--accent);
  }
`;

export const Lessons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const LessonsBlock = styled.div`
  margin-bottom: 45px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
  border: 1px solid var(--text-color);
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    color: var(--accent);
  }
`;

export const Header = styled.header`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--header-text);
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 40px;
    }
  }
`;

export const HeaderWrapper = styled.div`
  padding: 0 15px;
  max-width: 660px;
`;

export const HeaderTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--text-color);

  strong {
    font-size: 60px;
    font-weight: 700;
  }

  em {
    font-style: normal;
    color: var(--accent);
  }

  @media (max-width: 620px) {
    font-size: 30px;
    strong {
      font-size: 40px;
    }
  }
`;

export const SearchBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 6px;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  padding-bottom: 30px;
  width: 370px;
  @media (max-width: 425px) {
    font-size: 1rem;
    width: 240px;
  }
  @media (max-width: 240px) {
    font-size: 1rem;
    width: 200px;
  }
`;

export const InputWord = styled.input`
  background-color: #fff;
  color: var(--nav-bg);
  padding: 10px 15px;
  border-radius: 6px 0 0 6px;
  width: 330px;
  @media (max-width: 425px) {
    font-size: 1rem;
    width: 200px;
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
  top: 18px;
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