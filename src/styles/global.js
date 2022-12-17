import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: #151515;
    color: #FFFFFF;
    font-family: "Unbounded", sans-serif;
    min-width: 320px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .container {
    margin: 0 auto;
    padding: 60px 0;
    width: 85%;
  }
`;
