import React from 'react';
import { Container, ButtonShadow, Button } from './RoundButton.style';

const RoundButton = ({ buttonColor, children, ...props }) => {
  return (
    <Container buttonColor={buttonColor}>
      <ButtonShadow></ButtonShadow>
      <Button {...props}>{children}</Button>
    </Container>
  );
};

export default RoundButton;
