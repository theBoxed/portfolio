import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import { srConfig, email } from '../meta';
import styled from 'styled-components';
import { Images, Section, Globals } from '../styles';
const {fontSizes, colors, fonts} = Globals;


const ContactContainer = styled(Section)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 100px;
`;

const Title = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  ${Images.desktop`font-size: 60px;`};
  ${Images.tablet`font-size: 50px;`};
`;

const EmailLink = styled.a`
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

class Contact extends Component {
  componentDidMount() {
    ScrollReveal().reveal(this.contact, srConfig());
  }

  render() {
    const html =
      "Have any questions? Want to bounce some ideas around? Shoot me a note! I'd love to find time to connect virtually or over a beverage of your choosing.";

    return (
      <ContactContainer id="contact">

        <Title>Let's Chat</Title>

        <p> {html} </p>

        <EmailLink
          href={`mailto:${email}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Say Howdy
        </EmailLink>
      </ContactContainer>
    );
  }
}

export default Contact;
