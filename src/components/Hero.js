import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Hero = ({title,titleSecondary}) => {

  return (
    <StyledHero>
      <h3>{title}</h3>
      <h5>{titleSecondary}</h5>
    </StyledHero>
  );
};


Hero.propTypes = {

};



const StyledHero = styled.section`
  width: 100%;

  height: 60vh;
`;
export default Hero;
