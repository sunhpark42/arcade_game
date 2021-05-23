import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap');

  html, body, #root {
    width: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    background-color: grey;
  }

  * {
    font-family: 'DotGothic16', sans-serif;
    box-sizing: border-box;
    margin: 0;
  }

  a, button {
    -webkit-tap-highlight-color : transparent;
  }
`;

export default GlobalStyle;
