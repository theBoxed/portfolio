import styled from 'styled-components';
import Images from './Images';

const Page = styled.main`
  padding: 0 150px;
  ${Images.desktop`padding: 0 100px;`};
  ${Images.tablet`padding: 0 50px;`};
  ${Images.phablet`padding: 0 25px;`};
  margin: 0 auto;
  width: 100%;
`;

export default Page;
