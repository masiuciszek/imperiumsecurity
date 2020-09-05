/* eslint-disable no-unused-vars */
import * as React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { mainTheme } from "../../utils/theme";
import Nav from "./Nav";
import Footer from "./Footer";

interface LayoutProps {}

const Main = styled.main`
  margin: 0 auto;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Nav />
      <Main>{children}</Main>
      <Footer className="main-footer" />
    </ThemeProvider>
  );
};

const GlobalStyles = createGlobalStyle`

  *,
  *:before,
  *:after {
      box-sizing: inherit;
    }
  html {
    box-sizing: border-box;
    font-size: ${(props) => props.theme.appSize}; /**16px */
  }

body {
  background-color: ${(props) => props.theme.colors.background};
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 1.65;
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.colors.text};
}

p {margin-bottom: 1.15rem;}

h1, h2, h3, h4, h5 {
  margin: 2.75rem 0 1.05rem;
  font-family: 'Proza Libre', sans-serif;
  font-weight: 400;
  line-height: 1.15;
}
h1{
    font-size: ${({ theme }) => theme.size.h1};
  }

  h2{
    font-size: ${({ theme }) => theme.size.h2};
  }

  h3{
    font-size: ${({ theme }) => theme.size.h3};
  }

  h4{
    font-size: ${({ theme }) => theme.size.h4};
  }

  h5{
    font-size: ${({ theme }) => theme.size.h5};
  }

  small {
      font-size: 0.8em;
      }
  p{
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.size.p};
  }

  a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.size.a};;
    }

ul,li
{
	list-style: none;
}

`;

export default Layout;
