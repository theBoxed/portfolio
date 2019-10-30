import React from 'react';

import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import { aboutData } from './content/about';
import { heroData } from './content/hero';
import { jobData } from './content/jobs/Bluetext';
import Jobs from './components/Jobs';
import Featured from './components/Featured';
import { featuredData } from './content/featured';
import Projects from './components/Projects';
import { projectsData } from './content/projects';
import Contact from './components/Contact';
import styled from 'styled-components';


import { Images, Page } from './styles';

const MainContainer = styled(Page)`
  padding: 0 150px;
  ${Images.desktop`padding: 0 100px;`};
  ${Images.tablet`padding: 0 50px;`};
  ${Images.phablet`padding: 0 25px;`};
  counter-reset: section;
`;

const App = () => (
    <Layout>
      <MainContainer id="content">
        <Hero data={heroData} />
        <About data={aboutData} />
        <Jobs data={jobData} />
        <Featured data={featuredData} />
        <Projects data={projectsData} />
        <Contact />
      </MainContainer>
    </Layout>
);

export default App;
