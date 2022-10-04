import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Noto+Sans+KR:wght@300;400;500&display=swap');

  html, body, div, ul, ol, dl, li, dt, dd, p, h1, h2, h3, h4, h5, h6, table, th, td, caption, address, article, aside,
  canvas, details, figure, figcaption, footer, header, menu, nav, section,
  button, select, textarea, input, fieldset, legend, a, span, strong, em, address, dfn, small, i, b {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    font-size: 100%;
    font-weight: inherit;
    font-family: 'Noto Sans KR', sans-serif;
    line-height: inherit;
    word-break: inherit;
    word-wrap: inherit;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
  }

  :before, :after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
  }

  article, aside, canvas, details, figure, figcaption, footer, header, menu, nav, section {
    display: block;
  }


  body {
    word-break: keep-all;
    word-wrap: break-word;
    box-sizing: border-box;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }

  [hidden], hr {
    display: none;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
    height: auto;
  }

  button {
    background-color: transparent;
    cursor: pointer;
  }

  b, strong {
    font-weight: bold;
  }

  fieldset, iframe {
    width: 100%;
  }

  img, a, frame, iframe, fieldset {
    border: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }

  caption {
    display: block;
    position: absolute;
    left: -9999px;
  }

  legend {
    position: absolute;
    left: -9999em;
    top: -9999em;
  }

  input {
    border: 0px;
    vertical-align: middle;
    box-sizing: border-box;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition: background-color 5000s;
    transition: background-color 5000s;
    -webkit-text-fill-color: #fff !important;
  }

  textarea {
    width: 100%;
    vertical-align: middle;
    resize: none;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  button {
    overflow: hidden;
    background-color: transparent;
    cursor: pointer;
  }

  button::-moz-focus-inner {
    border: 0px;
    padding: 0px;
  }

  .lang_en {
    font-family: 'Inter', sans-serif;
  }
`;
