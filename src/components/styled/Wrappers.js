/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import mediaQueries, { mediaMax } from './mediaQueries';

export const PageWrapper = styled.div`
  width: 100%;
  padding-right: 1.3rem;
  padding-left: 1.3rem;
  margin-right: auto;
  margin-left: auto;
  ${mediaMax.MobileM`
  padding-right: 2rem;
  padding-left: 2rem;
  `}

`;
