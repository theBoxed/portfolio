import styled from 'styled-components';
import Globals from './Globals';
const { colors } = Globals;

const InlineLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${Globals.transition};
  cursor: pointer;
  color: ${colors.blue};
  &:hover,
  &:focus,
  &:active {
    color: ${colors.blue};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: ${colors.blue};
    transition: ${Globals.transition};
  }
`;

export default InlineLink;
