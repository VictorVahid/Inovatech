import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    color: #263138;
    background-image: linear-gradient(to right, #e0f2fe, #b2e0f4, #87cefa);
    font-family: Arial, Helvetica, sans-serif;  
  }

`;