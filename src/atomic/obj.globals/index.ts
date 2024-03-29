import { createGlobalStyle } from 'styled-components';
import { FontFamily, FontSize } from '../obj.constants';

export const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Muli');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${FontSize.Base};
  }

  body {
    font-family: ${FontFamily.Primary};

    margin: 0;
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0.05);
  }
`;
