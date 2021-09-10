import { createGlobalStyle } from 'styled-components';
import { OutlineButton, Container } from '@mfe/shared/dist/bundle';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
  }
}
  
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
    font-size: 62.5%;
    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
}`;

export default GlobalStyles;

export const lightTheme = {
  body: '#F9F9F9',
  text: '#333',
};
export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1',
};

export type IStyledOutlineButtonProps = {
  bigRadius?: boolean;
  big?: boolean;
  fontBig?: boolean;
  bigFont?: boolean;
};

export { OutlineButton, Container };
