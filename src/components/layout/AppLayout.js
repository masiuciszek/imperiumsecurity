import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../styled/GlobalStyles';
import Navbar from './Navbar';
import{ThemeProvider} from 'styled-components'
import { Container } from '../styled/Grid';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : {mode: light}
}

const AppLayout = ({ children }) => {
  const [theme , setTheme] = useState({mode: 'light'});
  useEffect(() => {
    //
  })
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="toggle-box">
        <label htmlFor="toggle">
          <input type="checkbox" name="toggle" id="toggle" onClick={e => setTheme(theme.mode === 'dark' ? {mode:'light'} : {mode:'dark'})}/>
        </label>
      </div>
      <Navbar/>
      <Container>
        <main className="main-app">{children}</main>
      </Container>
    </ThemeProvider>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AppLayout;
