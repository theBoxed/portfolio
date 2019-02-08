import styled from 'styled-components';
import Globals from './Globals';
const { colors, fontSizes, fonts } = Globals;

const Button = styled.button`
  color: ${colors.blue};
  background-color: transparent;
  border: 1px solid ${colors.blue};
  border-radius: ${Globals.borderRadius};
  font-size: ${fontSizes.small};
  font-family: ${fonts.Raleway};
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${Globals.transition};
  padding: 18px 23px;
  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.blue};
    color: ${colors.white};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
