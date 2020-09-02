import * as React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { mainTheme } from "../../utils/theme";

interface LayoutProps {}

const Main = styled.main`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.size.maxWidth};
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Proza+Libre:400|Open+Sans:400');

html {font-size: 100%;} /*16px*/

body {
  background-color: ${(props) => props.theme.colors.background};
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 1.65;
  color: ${(props) => props.theme.colors.text};
}

p {margin-bottom: 1.15rem;}

h1, h2, h3, h4, h5 {
  margin: 2.75rem 0 1.05rem;
  font-family: 'Proza Libre', sans-serif;
  font-weight: 400;
  line-height: 1.15;
}

h1 {
  margin-top: 0;
  font-size: 3.052em;
}

h2 {font-size: 2.441em;}

h3 {font-size: 1.953em;}

h4 {font-size: 1.563em;}

h5 {font-size: 1.25em;}

small, .text_small {font-size: 0.8em;}

a{
	text-decoration: none;
}
ul,li{
	list-style: none;
}
`;

export default Layout;
