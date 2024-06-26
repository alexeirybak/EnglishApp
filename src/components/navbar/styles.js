import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav-bg);
  border-bottom: 1px solid var(--nav-border);
  color: var(--nav-text);
  letter-spacing: normal;
  z-index: 3;
  position: fixed;
  inset: 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
`;

export const NavRow = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
  row-gap: 20px;
  flex-direction: row;
  padding-left: 25px;
  padding-right: 25px;
  justify-content: space-between;
`;

export const Logo = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 12px;
  margin-right: auto;
  color: var(--nav-text);
  font-size: 1.6rem;
  font-family: Poppins, sans-serif;
  strong {
    font-weight: 700;
  }
  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const LogoImg = styled.img`
  height: 50px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  align-items: center;
  column-gap: 40px;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins, sans-serif;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavListMob = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    row-gap: 10px;
    align-items: center;
    column-gap: 40px;
    font-size: 16px;
    font-weight: 500;
    font-family: Poppins, sans-serif;
  }
`;

export const BurgerBlock = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

export const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ $menuVisible }) => ($menuVisible ? '100vh' : '0')};
  overflow: hidden;
  z-index: 10;
  transition: height 0.5s ease;
  position: absolute;
  top: 32px;
  left: 0;
  background-color: var(--page-bg);
  width: 100%;
  margin-top: 33px;
  align-items: center;
  color: var(--text-color);
`;

export const ButtonLink = styled.button``;

export const BurgerMenu = styled.div`
  width: 18px;
  height: 1px;
  background-color: var(--nav-text);
`;

export const MenuLink = styled(NavLink)`
  position: relative;
  color: var(--nav-text);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #5c62ec;
    transition:
      width 0.3s ease,
      left 0.3s ease;
  }
  &:hover::before,
  &:active::before,
  &.active::before {
    left: 0;
    width: 100%;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    color: var(--text-color);
  }
`;

export const ForBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  border-radius: 10px;
  height: 60px;
  width: 18rem;
  background-color: #012169;
  color: #fff;
  margin-top: 50px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 200px;
  }
`;

export const ButtonTranscription = styled.button`
  width: 18rem;
  color: #fff;
  margin-top: 40px;
  background-color: #012169;
  border-radius: 10px;
  color: #fff;
  height: 60px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  &:hover {
    background-color: #555;
    color: #eee;
  }

  @media (max-width: 768px) {
    width: 200px;
    font-size: 1rem;
    &:hover {
      background-color: #012169;
    }

    &:active {
      background-color: #555;
    }
  }
`;

export const SettingsButton = styled.button``;

export const Settings = styled.img`
  width: 24px;
  min-width: 12px;
  transition: transform 1s;
  &:hover {
    transform: rotate(180deg);
  }
`;

export const SettingsApp = styled.div``;

export const SettingsBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ $settingsVisible }) => ($settingsVisible ? '100vh' : '0')};
  overflow: hidden;
  z-index: 10;
  transition: height 0.5s ease;
  position: absolute;
  background-color: var(--page-bg);
  width: 100%;
  margin-top: 18px;
  align-items: center;
  left: 0;
  color: var(--text-color);
`;

export const ThemeText = styled.p``;

export const Closer = styled(ButtonTranscription)``;
