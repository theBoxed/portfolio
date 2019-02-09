import { css } from 'styled-components';

const Sizes = {
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
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

