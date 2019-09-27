import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../styled/GlobalStyles';
import Navbar from './Navbar';
import { Container } from '../styled/Grid';

const AppLayout = ({ children }) => {
  let a;
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Container>
        <main className="main-app">{children}</main>
      </Container>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AppLayout;
