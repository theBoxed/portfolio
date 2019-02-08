import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '../meta';
import styled from 'styled-components';
import { Globals, Images, Section } from '../styles';
const { colors, fontSizes, fonts } = Globals;

const HeroContainer = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${Images.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const Howdy = styled.h1`
  color: ${colors.blue};
  margin: 0 0 10px 3px;
  font-size: ${fontSizes.xxlarge};
  font-family: ${fonts.Raleway};
  font-weight: normal;
  ${Images.desktop`font-size: ${fontSizes.xlarge};`};
  ${Images.tablet`font-size: ${fontSizes.small};`};
`;

const Name = styled.h2`
  font-size: 75px;
  line-height: 1.1;
  margin: 0;
  ${Images.desktop`font-size: 75px;`};
  ${Images.tablet`font-size: 60px;`};
  ${Images.phablet`font-size: 50px;`};
  ${Images.phone`font-size: 40px;`};
`;
const Sub = styled.h3`
  font-size: 58px;
  line-height: 1.1;
  color: ${colors.dark};
  padding-top: 10px;
  ${Images.desktop`font-size: 58px;`};
  ${Images.tablet`font-size: 52px;`};
  ${Images.phablet`font-size: 40px;`};
  ${Images.phone`font-size: 32px;`};
`;

const HeroButton = styled.a`
  margin-top: 50px;
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


class Hero extends Component {
  state = {
    isMounted: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 1000);
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  render() {
    const { data } = this.props;
    const { isMounted } = this.state;

    const intro = () => (
      <Howdy style={{ transitionDelay: '20ms' }}>{data.title}</Howdy>
    );
    const fullName = () => (
      <Name style={{ transitionDelay: '50ms' }}>{data.name}.</Name>
    );
    const subTitle = () => (
      <Sub style={{ transitionDelay: '100ms' }}>{data.subtitle}<br></br>{data.subtitleTwo} </Sub>
    );
    const button = () => (
      <div style={{ transitionDelay: '200ms' }}>
        <HeroButton href={`mailto:${email}`}>Say Howdy</HeroButton>
      </div>
    );

    const items = [intro, fullName, subTitle, button];

    return (
      <HeroContainer>
        <TransitionGroup>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={2000}>
                {item}
              </CSSTransition>
            ))}
        </TransitionGroup>
      </HeroContainer>
    );
  }
}

export default Hero;
