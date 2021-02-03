import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0 !important;
  }

  html,
  body,
  #app {
    height: 100vh;
  }

  body {
    background: #f2f2f2;
  }

  button:hover,
  button:focus,
  button:active,
  button:active:focus:not(:disabled):not(.disabled),
  button:focus,
  button:active,
  button:hover {
    box-shadow: none !important;
    outline: 0 !important;
  }

  .form-control {
    border-color: #00C0FF;
  }

  .form-control:focus {
    border-color: #00C0FF;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .btn:hover,
  .btn:focus,
  .btn:active,
  .btn:active:focus:not(:disabled):not(.disabled),
  .btn:focus,
  .btn:active,
  .btn:hover {
    box-shadow: none !important;
    outline: 0 !important;
  }

  ::-webkit-scrollbar-track {
    background-color: #FFFFFF;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background: #FFFFFF;
  }

  ::-webkit-scrollbar-thumb {
    background: #9466FF;
  }
`;
