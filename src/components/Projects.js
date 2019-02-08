import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ScrollReveal from 'scrollreveal';
import { srConfig } from '../meta';
import { IconGithub, IconExternal } from '../images/icons';
import styled from 'styled-components';
import { Globals, Misc, Images, Section, Button } from '../styles';
const { colors, fontSizes, fonts } = Globals;

const ProjectsContainer = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
`;
const ProjectsTitle = styled.h4`
  margin: 0 auto 50px;
  font-size: ${fontSizes.h3};
  ${Images.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;
const ProjectsGrid = styled.div`
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${Images.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;

const Label = styled.span`
  font-size: ${fontSizes.xsmall};
  color: ${colors.blue};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  line-height: 1.4em;
  font-weight: 700;
  transition: color 0.2s;
  display: block;
`;

const ProjectInner = styled.div`
  display: flex;
  border: 1px solid ${colors.blue};
  border-radius: ${Globals.borderRadius};
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 25px;
  height: 100%;
  transition: ${Globals.transition};
  background-color: ${colors.highlight};
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Project = styled.div`
  transition: ${Globals.transition};
  visibility: visible;
  opacity: 1;
  &:hover,
  &:focus {
    outline: 0;
    ${ProjectInner} {
      transform: translateY(-5px);
    }
  }
`;

const IconLink = styled.a`
  padding: 9px;
  svg {
    width: 17px;
    height: 17px;
  }
  &:hover,
  &:focus {
  transform: scale(1.5, 1.5);
  transition: transform 0.5s ease;
  }
  `;

const Links = styled.div`
  margin-right: -10px;
  color: ${colors.blue};

`;

const ProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxlarge};
  color: ${colors.blue};
`;
const ProjectDescription = styled.div`
  font-size: 15px;
  line-height: 1.25;
  a {
    ${Misc.inlineLink};
  }
`;
const TechList = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
  li {
    font-family: ${fonts.Raleway};
    font-size: ${fontSizes.xsmall};
    color: ${colors.blue};
    line-height: 2;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;


class Projects extends Component {
  constructor(props) {
    super(props);
    this.revealRefs = [];
    this.restRefs = [];
  }

  state = {
    showMore: false
  };

  componentDidMount() {
    ScrollReveal().reveal(this.projects, srConfig());
    this.revealRefs.forEach((ref, i) =>
      ScrollReveal().reveal(ref, srConfig(i * 100))
    );
  }

  showMoreToggle = () => this.setState({ showMore: !this.state.showMore });

  render() {
 
    const { data } = this.props;
    const projects = data.filter(project => project.show === 'true');

    return (
      <ProjectsContainer>
        <ProjectsTitle ref={e => (this.projects = e)}>
          All Projects
        </ProjectsTitle>
        <ProjectsGrid>
          <TransitionGroup className="projects">
            {projects &&
              projects.map((project, i) => {
                const { github, site, title, tech, description } = project;
                return (
                  <CSSTransition
                    key={i}
                    classNames="fadeup"
                    timeout={i >= projects.length ? (i - projects.length) * 300 : 300}
                    exit={false}
                  >
                    <Project
                      key={i}
                      ref={e => (this.revealRefs[i] = e)}
                      tabIndex="0"
                      style={{
                        transitionDelay: `${
                          i >= projects.length ? (i - projects.length) * 100 : 0
                        }ms`
                      }}
                    >
                      <ProjectInner>
                        <div>
                          <ProjectHeader>
                            <Label>{'Project'}</Label>
                            <Links>
                              {github && (
                                <IconLink
                                  href={github}
                                  target="_blank"
                                  aria-label="Github Link"
                                >
                                  <IconGithub />
                                </IconLink>
                              )}
                              {site && (
                                <IconLink
                                  href={site}
                                  target="_blank"
                                  aria-label="External Link"
                                >
                                  <IconExternal />
                                </IconLink>
                              )}
                            </Links>
                          </ProjectHeader>
                          <ProjectName>
                            {site ? (
                              <a
                                href={site}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="Visit Website"
                              >
                                {title}
                              </a>
                            ) : (
                              title
                            )}
                          </ProjectName>
                          <ProjectDescription>
                            <p>{description}</p>
                          </ ProjectDescription>
                        </div>
                        <div>
                          <TechList>
                            {tech.map((tech, i) => (
                              <li key={i}>{tech}</li>
                            ))}
                          </TechList>
                        </div>
                      </ProjectInner>
                    </Project>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </ProjectsGrid>
      </ProjectsContainer>
    );
  }
}

export default Projects;
