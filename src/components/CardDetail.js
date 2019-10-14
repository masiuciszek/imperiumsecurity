import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { cl } from './styled/GlobalStyles';

const CardDetail = () => {
  return (
    <StyledDetail>
      <h3>I am the card detail</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sint corrupti reprehenderit obcaecati incidunt, a saepe voluptatem autem est cupiditate suscipit?
      </p>
    </StyledDetail>
  );
};


CardDetail.propTypes = {

};

const StyledDetail = styled.div`
  padding: 1rem;
  color: ${props => props.theme.mode === 'dark' ? `${cl.dark}` : `${cl.dark2}`};
`;

export default CardDetail;
