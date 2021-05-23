import styled from 'styled-components';

export const Container = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${({ buttonColor }) => buttonColor || '#e5e5e5'};
  box-shadow: inset -3px -3px 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ButtonShadow = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  background-color: transparent;
  box-shadow: inset 3px 3px 5px 0 rgba(255, 255, 255, 0.2);
`;

export const Button = styled.button`
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background-color: inherit;
  outline: none;
  border: 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 20;

  &:active {
    box-shadow: inset 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
    transform: scale(0.98);
  }

  svg {
    width: 70%;
    height: 70%;
    color: rgba(0, 0, 0, 0.85);
  }
`;
