import { css } from 'styled-components';

const Sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330
};

// iterate through the sizes and create a images template
export const Images = Object.keys(Sizes).reduce((accumulator, label) => {
  const emSize = Sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default Images;

// import React, { Component } from 'react';

// import ScrollReveal from 'scrollreveal';
// import { srConfig } from '../meta';
// import styled from 'styled-components';
// import { Globals, Misc, Images, Section, Heading } from '../styles';
// import '../styles/styles/about.css';
// import image from '../content/about/me.jpg';
// // const { colors, fontSizes, fonts } = Globals;

// class About extends Component {
//   componentDidMount() {
//     ScrollReveal().reveal(this.about, srConfig());
//   }

//   render() {
//     const { data } = this.props;
//     // const { frontmatter, html } = data[0].node;
//     // const { title, skills, avatar } = frontmatter;

//     return (
//       <section
//         className="about-container"
//         id="about"
//         ref={e => (this.about = e)}
//       >
//         <Heading>{data.title}</Heading>
//         <div className="flex-container">
//           <div className="content-container">
//             <p>{data.overview}</p>
//             <ul className="skills-container">
//               {data.skills &&
//                 data.skills.map((skill, i) => <li key={i}>{skill}</li>)}
//             </ul>
//           </div>
//           <div className="picture-container">
//             <div className="avatar-container">
//               <div className="avatar">
//                 <img src={image} alt="me" className="avatar" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default About;
