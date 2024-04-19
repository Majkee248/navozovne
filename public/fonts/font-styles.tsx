import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    src: url('./Helvetica.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Helvetica-Light';
    font-style: normal;
    font-weight: 300;
    src: url('./helvetica-light-587ebe5a59211.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Helvetica-BoldOblique';
    font-style: oblique;
    font-weight: 700;
    src: url('./Helvetica-BoldOblique.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Helvetica-Bold';
    font-style: normal;
    font-weight: 700;
    src: url('./Helvetica-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Helvetica-Rounded-Bold';
    font-style: normal;
    font-weight: 700;
    src: url('./helvetica-rounded-bold-5871d05ead8de.otf') format('opentype');
  }

  @font-face {
    font-family: 'Helvetica-Compressed';
    font-style: normal;
    font-weight: 400;
    src: url('./helvetica-compressed-5871d14b6903a.otf') format('opentype');
  }

  @font-face {
    font-family: 'Helvetica-Oblique';
    font-style: oblique;
    font-weight: 400;
    src: url('./Helvetica-Oblique.ttf') format('truetype');
  }

  @font-face {
    font-family: 'PlayfairDisplay-Black';
    font-style: normal;
    font-weight: 900;
    src: url('./PlayfairDisplay-Black.otf') format('opentype');
  }

  @font-face {
    font-family: 'PlayfairDisplay-BlackItalic';
    font-style: italic;
    font-weight: 900;
    src: url('./PlayfairDisplay-BlackItalic.otf') format('opentype');
  }

  @font-face {
    font-family: 'PlayfairDisplay-Bold';
    font-style: normal;
    font-weight: 700;
    src: url('./PlayfairDisplay-Bold.otf') format('opentype');
  }

  @font-face {
    font-family: 'PlayfairDisplay-BoldItalic';
    font-style: italic;
    font-weight: 700;
    src: url('./PlayfairDisplay-BoldItalic.otf') format('opentype');
  }

  @font-face {
    font-family: 'PlayfairDisplay-Italic';
    font-style: italic;
    font-weight: 400;
    src: url('./PlayfairDisplay-Italic.otf') format('opentype');
  }

  @font-face {
    font-family: 'PlayfairDisplay-Regular';
    font-style: normal;
    font-weight: 400;
    src: url('./PlayfairDisplay-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'PlayfairDisplaySC-Black';
    font-style: normal;
    font-weight: 900;
    src: url('./PlayfairDisplaySC-Black.otf') format('opentype');
  }

  @font-face {
    font-family: 'PlayfairDisplaySC-BlackItalic';
    font-style: italic;
    font-weight: 900;
    src: url('./PlayfairDisplaySC-BlackItalic.otf') format('opentype');
  }

  @font-face {
    font-family: 'PlayfairDisplaySC-Bold';
    font-style: normal;
    font-weight: 700;
    src: url('./PlayfairDisplaySC-Bold.otf') format('opentype');
  }

  @font-face {
    font-family: 'PlayfairDisplaySC-BoldItalic';
    font-style: italic;
    font-weight: 700;
    src: url('./PlayfairDisplaySC-BoldItalic.otf') format('opentype');
  }

  @font-face {
    font-family: 'PlayfairDisplaySC-Italic';
    font-style: italic;
    font-weight: 400;
    src: url('./PlayfairDisplaySC-Italic.otf') format('opentype');
  }

  @font-face {
    font-family: 'PlayfairDisplaySC-Regular';
    font-style: normal;
    font-weight: 400;
    src: url('./PlayfairDisplaySC-Regular.otf') format('opentype');
  }


  @font-face {
    font-family: 'Poppins_thin';
    font-style: normal;
    font-weight: 100;
    src: local('Poppins Thin'), local('Poppins-Thin'),
    url('./Poppins-Thin.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_thin_italic';
    font-style: italic;
    font-weight: 100;
    src: local('Poppins Thin Italic'), local('Poppins-ThinItalic'),
    url('./Poppins-ThinItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_extralight';
    font-style: normal;
    font-weight: 200;
    src: local('Poppins ExtraLight'), local('Poppins-ExtraLight'),
    url('./Poppins-ExtraLight.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_extralight_italic';
    font-style: italic;
    font-weight: 200;
    src: local('Poppins ExtraLight Italic'), local('Poppins-ExtraLightItalic'),
    url('./Poppins-ExtraLightItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_light';
    font-style: normal;
    font-weight: 300;
    src: local('Poppins Light'), local('Poppins-Light'),
    url('./Poppins-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_light_italic';
    font-style: italic;
    font-weight: 300;
    src: local('Poppins Light Italic'), local('Poppins-LightItalic'),
    url('./Poppins-LightItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_regular';
    font-style: normal;
    font-weight: 400;
    src: local('Poppins Regular'), local('Poppins-Regular'),
    url('./Poppins-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_regular_italic';
    font-style: italic;
    font-weight: 400;
    src: local('Poppins Regular Italic'), local('Poppins-Italic'),
    url('./Poppins-Italic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_medium';
    font-style: normal;
    font-weight: 500;
    src: local('Poppins Medium'), local('Poppins-Medium'),
    url('./Poppins-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_medium_italic';
    font-style: italic;
    font-weight: 500;
    src: local('Poppins Medium Italic'), local('Poppins-MediumItalic'),
    url('./Poppins-MediumItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_semibold';
    font-style: normal;
    font-weight: 600;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
    url('./Poppins-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_semibold_italic';
    font-style: italic;
    font-weight: 600;
    src: local('Poppins SemiBold Italic'), local('Poppins-SemiBoldItalic'),
    url('./Poppins-SemiBoldItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_bold';
    font-style: normal;
    font-weight: 700;
    src: local('Poppins Bold'), local('Poppins-Bold'),
    url('./Poppins-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_bold_italic';
    font-style: italic;
    font-weight: 700;
    src: local('Poppins Bold Italic'), local('Poppins-BoldItalic'),
    url('./Poppins-BoldItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_extrabold';
    font-style: normal;
    font-weight: 800;
    src: local('Poppins ExtraBold'), local('Poppins-ExtraBold'),
    url('./Poppins-ExtraBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_extrabold_italic';
    font-style: italic;
    font-weight: 800;
    src: local('Poppins ExtraBold Italic'), local('Poppins-ExtraBoldItalic'),
    url('./Poppins-ExtraBoldItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_black';
    font-style: normal;
    font-weight: 900;
    src: local('Poppins Black'), local('Poppins-Black'),
    url('./Poppins-Black.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins_black_italic';
    font-style: italic;
    font-weight: 900;
    src: local('Poppins Black Italic'), local('Poppins-BlackItalic'),
    url('./Poppins-BlackItalic.ttf') format('truetype');
  }

`;

export default FontStyles;
