import { createGlobalStyle } from 'styled-components';
import Globals from './Globals';
import Images from './Images';
const { colors, fontSizes, fonts } = Globals;

const MainStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.white};
    color: ${colors.dark};
    line-height: 1.25;
    font-family: ${fonts.Raleway};
    font-size: ${fontSizes.xlarge};
    ${Images.phablet`font-size: ${fontSizes.large};`}
    &.hidden {
      overflow: hidden;
    }
  }
  ::selection {
    background-color: ${colors.highlight};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: ${colors.blue};
    margin: 0 0 10px 0;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${Globals.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.blue};
      outline: 0;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
    &:active {
      outline-color: ${colors.blue};
    }
  }


  p {
    margin: 0 0 10px 0;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }


  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ${Globals.easing}, transform 300ms ${
  Globals.easing
};
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${Globals.easing}, transform 300ms ${
  Globals.easing
};
  }

  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms ${Globals.easing}, transform 300ms ${
  Globals.easing
};
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${Globals.easing}, transform 300ms ${
  Globals.easing
};
  }

  .fade-enter {
    opacity: 0.01;
    transition: opacity 1000ms ${Globals.easing};
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${Globals.easing};
  }

`;

export default MainStyles;

