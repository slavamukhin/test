import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html, #root, body {
    height: 100%;
    box-sizing: border-box;
    color: #22242a;
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
