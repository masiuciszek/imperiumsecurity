import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { cl } from '../styled/GlobalStyles';


const Navbar = () => {
  let a;
  return (
    <>
      <StyledNav>
        <div className="title">
          <AniLink fade to="/">
            <h3>Marcell Ciszek</h3>
          </AniLink>
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
    a{
      color:
    }
    h3 {
      letter-spacing: 0.2rem;
      border-bottom: 2px solid ${cl.pink};
      width: 20%;
    }
  }
`;
export default Navbar;
