import styled from 'styled-components';
import { transition } from '../../styledHelpers.js/cssFunctions';
import { cl } from './GlobalStyles';
import mediaQueries from './mediaQueries';

export const BtnPrimary = styled.button`
  padding: 0.7rem 1rem;
  border: none;
  background-image: linear-gradient(to right, #25b0a9 50%, #fee603 50%);
  background-position: 0;
  background-size: 200%;
  ${transition()};
  &:hover {
    background-position: -100%;
  }
`;

export const StyledLink = styled.span`
  padding: 0.7rem 1rem;
  border: none;
  background-image: linear-gradient(to right, ${cl.pink} 50%, #fee603 50%);
  background-position: 0;
  background-size: 200%;
  ${transition()};
  cursor: pointer;
  font-size: 1.4rem;
  margin: 1rem 0.5rem;
  /* margin-right: auto; */
  display: block;
  width: 10%;

  &:hover {
    background-position: -100%;
    color: ${cl.dark};
  }

  ${mediaQueries.mobileXS`
      width: 12rem;
    `}
`;
