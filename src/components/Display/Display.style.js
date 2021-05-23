import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 480px;
  max-height: 600px;
  background-color: black;
  color: rgba(255, 255, 255, 0.9);
  font-size: 10rem;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  padding: 0.2rem;
  border-radius: 0.5rem;
  border: 4px double white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
