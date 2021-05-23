import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  max-width: 480px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const updown = keyframes`
  0% {
    transform: translateY(10%);
  }

  50% {
    transform: translateY(0%);
  }
  
  100% {
    transform: translateY(10%);
  }
`;

export const Title = styled.h1`
  color: white;
  text-shadow: 2px 2px #000000;
`;

export const ResultText = styled.p`
  height: 1rem;
  font-size: 1rem;
  top: 0;
  letter-spacing: 5px;

  animation: ${updown} 1s ease-in-out infinite;
`;

export const Score = styled.p`
  height: 1rem;
  font-size: 1rem;
  top: 0;
  letter-spacing: 5px;
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Computer = styled.div`
  transform: rotate(180deg);
  padding-top: 1rem;
  border-top: 5px double white;
  color: red;
  display: flex;
  padding: 1rem;
  justify-content: center;

  ::before {
    content: 'computer';
    font-size: 1rem;
    position: absolute;
    right: 0;
    top: 3px;
    transform: rotate(180deg);
  }
`;
export const Player = styled.div`
  padding: 1rem;
  color: green;
  display: flex;
  justify-content: center;
  position: relative;

  ::before {
    content: 'user';
    font-size: 1rem;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const GameController = styled.div`
  width: 100%;
  padding: 1rem 0;

  display: flex;
  justify-content: space-around;
`;

export const ResetButton = styled.button`
  width: 100%;
  height: 8%;
  border-radius: 4rem;
  font-size: 1.5rem;
  border: none;
  outline: none;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;
