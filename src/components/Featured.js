import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import { srConfig } from '../meta';
import { IconGithub, IconExternal } from '../images';
import styled from 'styled-components';
import { Globals, Images, Section, Heading } from '../styles';
const { colors, fontSizes, fonts } = Globals;

const FeaturedContainer = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const FeaturedGrid = styled.div`
  position: relative;
`;
const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  ${Images.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
  `};
  ${Images.phablet`padding: 30px 25px 20px;`};
`;
const FeaturedLabel = styled.h4`
  font-size: ${fontSizes.smallish};
  font-weight: 300;
  color: ${colors.blue};
  font-family: ${fonts.Raleway};
  margin-top: 10px;
  padding-top: 0;
`;
const ProjectName = styled.h5`
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${colors.blue};
  ${Images.tablet`font-size: 24px;`};
`;
const ProjectDescription = styled.div`
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 20px;
  border-radius: ${Globals.borderRadius};
  font-size: 17px;
  line-height: 1.3;
  p {
    margin: 0;
  }
`;
const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0 10px;
  li {
    font-family: ${fonts.Raleway};
    font-size: ${fontSizes.smallish};
    color: ${colors.blue};
    margin-right: ${Globals.margin};
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    ${Images.thone`
      color: ${colors.blue};
      margin-right: 10px;
    `};
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
const FeaturedImg = styled.img`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: ${Globals.borderRadius};
  position: relative;
  mix-blend-mode: multiply;
  ${Images.tablet`
    object-fit: cover;
    width: auto;
    height: 300px;
  `};
  ${Images.thone`
    display: none;
  `}
`;
const ImgContainer = styled.div`
  position: relative;
  z-index: 1;
  border-radius: ${Globals.borderRadius};
  border-radius: 2px;
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  transition: ${Globals.transition};
  ${Images.tablet`height: 100%;`};
  ${Images.thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `};
  ${FeaturedImg}{
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
  }
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${FeaturedImg} {
      background: transparent;
      -webkit-filter: grayscale(0);
      filter: grayscale(0);
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: ${Globals.transition};
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
`;
const Project = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  ${Images.thone`margin-bottom: 70px;`};
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${ContentContainer} {
      grid-column: 7 / -1;
      text-align: right;
      ${Images.thone`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `};
      ${Images.phablet`padding: 30px 25px 20px;`};
    }
    ${TechList} {
      justify-content: flex-end;
      li {
        margin-left: ${Globals.margin};
        margin-right: 0;
      }
    }
    ${Links} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${ImgContainer} {
      grid-column: 1 / 8;
      ${Images.tablet`height: 100%;`};
      ${Images.thone`
        grid-column: 1 / -1;
        opacity: 0.5;
      `};
    }
  }
`;

class Featured extends Component {
  constructor(props) {
    super(props);
    this.revealRefs = [];
  }

  componentDidMount() {
    ScrollReveal().reveal(this.featured, srConfig());
    this.revealRefs.forEach(ref => ScrollReveal().reveal(ref, srConfig()));
  }

  render() {
    const { data } = this.props;

    return (
      <FeaturedContainer id="projects">
        <Heading ref={e => (this.featured = e)}>Projects Picked For You</Heading>
        <FeaturedGrid>
          {data &&
            data.map((project, i) => {
              const { site, title, tech, github, description, type,image } = project;
              return (
                <Project key={i} ref={el => (this.revealRefs[i] = el)}>
                  <ContentContainer>
                    <FeaturedLabel><strong>Featured:</strong> {type}</FeaturedLabel>
                    <ProjectName>
                      {site ? (
                        <a
                          href={site}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link"
                        >
                          {title}
                        </a>
                      ) : (
                        title
                      )}
                    </ProjectName>
                    <ProjectDescription>
                      <p>{description}</p>
                    </ProjectDescription>
                    {tech && (
                      <TechList>
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </TechList>
                    )}
                    <Links>
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="Github Link"
                        >
                          <IconGithub />
                        </a>
                      )}
                      {site && (
                        <a
                          href={site}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link"
                        >
                          <IconExternal />
                        </a>
                      )}
                    </Links>
                  </ContentContainer>

                  <ImgContainer>
                    <FeaturedImg src={image} />
                  </ImgContainer>
                </Project>
              );
            })}
        </FeaturedGrid>
      </FeaturedContainer>
    );
  }
}

export default Featured;
