import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';


const Title = ({title}) => {
  return (
    <StyledTitle>
      <h1>{title}</h1>
    </StyledTitle>
  );
};


Title.propTypes = {
  title: PropTypes.string.isRequired,
};


const StyledTitle = styled.section`
  padding: 1rem 0;
`;

export default Title;
