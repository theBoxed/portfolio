import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import { srConfig } from '../meta';
import styled from 'styled-components';
import { Globals, Misc, Images, Section, Heading } from '../styles';
const { colors, fontSizes, fonts } = Globals;

const JobsContainer = styled(Section)`
  position: relative;
  max-width: 800px;
`;
const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  ${Images.thone`display: block;`};
`;
const Tabs = styled.div`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  ${Images.thone`
    display: flex;
    margin-bottom: 30px;
    width: 100%;
    overflow-x: scroll;
  `};
`;
const Tab = styled.button`
  ${Misc.link};
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: 42px;
  padding: 0 20px 2px;
  transition: ${Globals.transition};
  border-left: 2px solid ${colors.white};
  text-align: left;
  font-family: ${fonts.Raleway};
  font-size: ${fontSizes.smallish};
  color: ${props => (props.isActive ? colors.blue : colors.dark)};
  ${Images.tablet`padding: 0 15px 2px;`};
  ${Images.thone`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${colors.dark};
    min-width: 120px;
  `};
  &:hover,
  &:focus {
    background-color: ${colors.blue};
    color: ${colors.white};
  }
`;
const Highlighter = styled.span`
  display: block;
  background: ${colors.blue};
  width: 2px;
  height: 42px;
  border-radius: ${Globals.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  transition: ${Globals.transition};
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${props =>
      props.activeTabId > 0 ? props.activeTabId * 42 : 0}px
  );
  ${Images.thone`
    width: 100%;
    max-width: 120px;
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${props =>
        props.activeTabId > 0 ? props.activeTabId * 120 : 0}px
    );
  `};
`;
const ContentContainer = styled.div`
  position: relative;
  padding-top: 14px;
  padding-left: 30px;
  flex-grow: 1;
  ${Images.tablet`padding-left: 20px;`};
  ${Images.thone`padding-left: 0;`};
`;
const TabContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: ${props => (props.isActive ? 1 : 0)};
  z-index: ${props => (props.isActive ? 2 : -1)};
  position: ${props => (props.isActive ? 'relative' : 'absolute')};
  visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
  transition: ${Globals.transition};
  transition-duration: ${props => (props.isActive ? '0.5s' : '0s')};
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${fontSizes.large};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 5px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${colors.blue};
        line-height: ${fontSizes.xlarge};
      }
    }
  }
  a {
    ${Misc.inlineLink};
  }
`;
const JobTitle = styled.h4`
  color: ${colors.blue};
  font-size: ${fontSizes.xxlarge};
  font-weight: 500;
  margin-bottom: 5px;
`;
const Company = styled.span`
  color: ${colors.blue};
`;
const JobDetails = styled.h5`
  font-family: ${fonts.Raleway};
  font-size: ${fontSizes.smallish};
  font-weight: normal;
  letter-spacing: 0.7px;
  color: ${colors.dark};
  margin-bottom: 30px;
`;


const DutyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0 10px;
  li {
    font-family: ${fonts.Raleway};
    font-size: ${fontSizes.medium};
    color: ${colors.dark};
    margin-right: ${Globals.margin};
    ${Images.thone`
      color: ${colors.dark};
      margin-right: 10px;
      margin-top: 5px;
      font-size: ${fontSizes.small}
    `};
  }
`;

class Jobs extends Component {
  state = {
    activeTabId: 0
  };

  componentDidMount() {
    ScrollReveal().reveal(this.jobs, srConfig());
  }

  isActive = id => this.state.activeTabId === id;

  setActiveTab = activeTabId => this.setState({ activeTabId });

  render() {
    const { activeTabId } = this.state;
    const { data } = this.props;

    return (
      <JobsContainer id="jobs" ref={e => (this.jobs = e)}>
        <Heading>Where I've Worked</Heading>
        <TabsContainer>
          <Tabs role="tablist">
            {data &&
              data.map((job, i) => {
                const { company } = job;
                return (
                  <Tab
                    key={i}
                    isActive={this.isActive(i)}
                    onClick={e => this.setActiveTab(i, e)}
                    role="tab"
                    aria-selected={this.isActive(i) ? 'true' : 'false'}
                    aria-controls={`tab${i}`}
                    id={`tab${i}`}
                    tabIndex={this.isActive(i) ? '0' : '-1'}
                  >
                    <span>{company}</span>
                  </Tab>
                );
              })}
            <Highlighter activeTabId={activeTabId} />
          </Tabs>
          <ContentContainer>
            {data &&
              data.map((job, i) => {
                const { title, url, company, range, duties } = job;
                return (
                  <TabContent
                    key={i}
                    isActive={this.isActive(i)}
                    id={`job${i}`}
                    role="tabpanel"
                    tabIndex="0"
                    aria-labelledby={`job${i}`}
                    aria-hidden={!this.isActive(i)}
                  >
                    <JobTitle>
                      <span>{title}</span>
                      <Company>
                        &nbsp;@&nbsp;
                        <a
                          href={url}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          {company}
                        </a>
                      </Company>
                    </JobTitle>
                    <JobDetails>
                      <span>{range}</span>
                    </JobDetails>
                    <ul>
                      {duties && (
                        <DutyList>
                        {duties.map((duty, i) => (
                          <li key={i}>{duty}</li>
                        ))}
                        </DutyList>
                      )}
                    </ul>
                  </TabContent>
                );
              })}
          </ContentContainer>
        </TabsContainer>
      </JobsContainer>
    );
  }
}

export default Jobs;
