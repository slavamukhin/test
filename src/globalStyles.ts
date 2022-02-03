import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { } from '@inno/ui-kit'


const GlobalStyle = createGlobalStyle`
  ${normalize}
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
    background-color: #F4821F;
    &:hover {
      background-color: #F4821F;
    }
  }
`

export default GlobalStyle
