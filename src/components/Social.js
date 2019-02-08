import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { socialMedia } from '../meta';
import { IconGithub, IconLinkedin } from '../images';
import styled from 'styled-components';
import { Globals, Images } from '../styles';
const { colors } = Globals;

const SocialContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;
  color: ${colors.blue};
  ${Images.desktop`right: 25px;`};
  ${Images.tablet`display: none;`};
  div {
    width: 100%;
    margin: 0 auto;
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.blue};
  }
`;
const Item = styled.li`
  &:last-of-type {
    margin-bottom: 15px;
  }
`;
const URL = styled.a`
  padding: 10px;
  svg {
    width: 18px;
    height: 18px;
  }
  &:hover,
  &:focus {
    transform: scale(1.5, 1.5);
    transition: transform 0.5s ease;
  }
`;

class SocialLinks extends Component {
  state = {
    isMounted: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 1500);
  }

  render() {
    const { isMounted } = this.state;

    return (
      <SocialContainer>
        <TransitionGroup>
          {isMounted && (
            <CSSTransition timeout={2000} classNames="fade">
              <List>
                {socialMedia &&
                  socialMedia.map(({ url, name }, i) => (
                    <Item key={i}>
                      <URL href={url} target="_blank" aria-label={name}>
                        {name === 'Github' ? (
                          <IconGithub />
                        ) : name === 'Linkedin' ? (
                          <IconLinkedin />
                        ) : (
                          <IconGithub />
                        )}
                      </URL>
                    </Item>
                  ))}
              </List>
            </CSSTransition>
          )}
        </TransitionGroup>
      </SocialContainer>
    );
  }
}

export default SocialLinks;
