import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { cl } from '../styled/GlobalStyles';


const Navbar = () => {
  let a;
  return (
    <>
      <StyledNav>
        <div className="title">
          <h3>Marcell Ciszek</h3>

        </div>
      </StyledNav>
    </>
  );
};

Navbar.propTypes = {};
const StyledNav = styled.nav`
  padding: 1rem 0.6rem;
  background: transparent;
  .title {
    h3 {
      letter-spacing: 0.2rem;
      border-bottom: 2px solid ${cl.pink};
      width: 20%;
    }
  }
`;
export default Navbar;
