import styled from 'styled-components';

export const ToTop = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  z-index: 3;
  width: auto;
  background-color: #012169;
  color: #eee;
  font-size: 1.2rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c8102e;
  }

  @media (max-width: 768px) {
    &:hover {
      background-color: #012169;
    }
    &:active {
      background-color: #c8102e;
    }
  }
`;

export const ToTopIcon = styled.img`
  width: 24px;
`;
