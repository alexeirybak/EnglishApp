import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: var(--footer-bg);
  color: var(--footer-text);
  border: 1px solid var(--nav-border);
  position: absolute;
  bottom: 0;
  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;
export const Social = styled.div`
  display: flex;
  column-gap: 30px;
  align-items: center;
`;

export const Copyright = styled.div`
  font-size: 1rem;
  & p + p {
    margin-top: 0.5em;
  }
  text-align: center;
`;

export const Infolink = styled.a`
  color: var(--footer-text);
`;
