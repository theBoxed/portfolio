import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import { srConfig } from '../meta';
import styled from 'styled-components';
import { Globals, Misc, Images, Section, Heading } from '../styles';
const { colors, fontSizes, fonts } = Globals;

const AboutContainer = styled(Section)`
  position: relative;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Images.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 70%;
  max-width: 540px;
  font-size: ${fontSizes.medium};
  line-height: 1.5em;
  ${Images.tablet`width: 100%;`};
  a {
    ${Misc.inlineLink};
  }
`;

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(60px, 200px));
  line-height: 1em;
  overflow: hidden;
  margin-top: 30px;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.Raleway};
  font-size: ${fontSizes.smallish};
  color: ${colors.blue};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.dark};
    font-size: ${fontSizes.small};
    line-height: 12px;
  }
`;

class About extends Component {
  componentDidMount() {
    ScrollReveal().reveal(this.about, srConfig());
  }

  render() {
    const { data } = this.props;
    return (
      <AboutContainer id="about" ref={e => (this.about = e)}>
        <Heading>{data.title}</Heading>
        <FlexContainer>
          <ContentContainer>
            <p>{data.overview }</p> 
            <p><strong>Here are a few things I've dabbled with over time:</strong></p>
            <SkillsContainer>
              {data.skills &&
                data.skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
            </SkillsContainer>
          </ContentContainer>
        </FlexContainer>
      </AboutContainer>
    );
  }
}

export default About;
