import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AluraCommons'

const GlobalStyle = createGlobalStyle`
 *{
   margin : 0;
   padding : 0;
   box-sizing : 0;
 }
  body {
  
    box-sizing: border-box;
    background-color : #D9E6F6
  }

  #__next { 
    display : flex;
    min-height : 100vh;
    flex-direction : column;
  }

  img {
    max-width : 100%;
    height : auto;
    display : block
  }

  
  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
