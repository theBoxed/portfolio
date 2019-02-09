import styled from 'styled-components';
import Globals from './Globals';
import Images from './Images';
const { fontSizes } = Globals;

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 60px;
  width: 100%;
  font-size: ${fontSizes.h3};
  ${Images.tablet`font-size: 50px;`};
`;

export default Heading;
