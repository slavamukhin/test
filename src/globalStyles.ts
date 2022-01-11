import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    font-size: 30%;
  }
  body {
    font-size: 3.5rem;
  }
  html, #root, body {
    height: 100%;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    font-weight: 300;
    color: inherit;
  }
  a:visited {
    color: inherit;
  }
  .active {
    background-color: #edf6ff;
  }
`

export default GlobalStyle
