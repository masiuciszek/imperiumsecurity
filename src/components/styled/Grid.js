import styled from 'styled-components';
import mediaQueries, { mediaMax } from './mediaQueries';

export const Container = styled.section`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
`;

export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Grid = styled.div`
  display: ${props => (props.grid ? 'grid' : 'flex')};
  /* grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); */
  grid-template-columns: ${props =>
    props.wider
      ? ` repeat(auto-fit, minmax(220px, 1fr));`
      : `repeat(auto-fit, minmax(180px, 1fr));`};
  grid-template-rows: auto;
  grid-gap: 15px;
  justify-items: center;
  ${mediaQueries.MobileM`
  grid-gap: 25px;

  `}
`;
