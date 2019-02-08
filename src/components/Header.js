import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Globals, Images, Navigation} from '../styles';
import { Logo } from '../images/icons';
const { colors, fontSizes, fonts } = Globals;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${colors.white};
  transition: ${Globals.transition};
  z-index: 11;
  width: 100%;
  pointer-events: auto !important;
  user-select: auto !important;
  height: ${Globals.headerHeight};
  ${Images.desktop`padding: 0 40px;`};
  ${Images.tablet`padding: 0 25px;`};
`;

const Navbar = styled(Navigation)`
  display: flex;
  justify-content: space-between;
  font-family: ${fonts.Raleway};
  color: ${colors.blue};
  align-items: center;
  z-index: 12;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;

const LogoImg = styled.img`
  height: 75px;
  width: 54px;
`;

const ResumeLink = styled.a`
  margin-left: 10px;
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

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Navbar>
            <TransitionGroup>
              {
                <CSSTransition classNames="fade" timeout={3000}>
                  <LogoContainer>
                    <LogoImg src={Logo} alt="Brady Fox, Brady C Fox Logo" />
                  </LogoContainer>
                </CSSTransition>
              }
            </TransitionGroup>
            <TransitionGroup>
              {
                <CSSTransition classNames="fadedown" timeout={3000}>
                    <ResumeLink
                      href='https://docs.google.com/document/d/1TwflEP5TNXQ1DLQMCA-b0wlXWPhGD2ukKAKxlvZ6hcc/edit?usp=sharing'
                      target="_blank"
                      rel="noreferrer"
                    >
                      My Resume
                    </ResumeLink>

                </CSSTransition>
              }
            </TransitionGroup>
        </Navbar>
      </HeaderContainer>
    );
  }
}

export default Header;
