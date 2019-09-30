import { createGlobalStyle} from 'styled-components';

export const cl = {
  pink: '#D16BA5',
  dark: '#1A1C1E',
  darkBrighter: '#1E2C2C',
  green: '#0c7574',
  greenLighter: '#3ca581',
  greenLighterLightest: '#90d37a',
  yellow: '#f9f871',
  white: '#fff',
};

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300i,400,400i,500,500i&display=swap');
*::before,*::after,*{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html{
font-size: 10px;
}

body{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${cl.white};
  font-family: 'Montserrat', sans-serif;
  background-image: linear-gradient(to left top, #d16ba5, #a25f96, #775181, #514267, #333249, #30384f, #2e3e53, #2c4457, #2e6981, #2591a8, #1ebcc6, #3ce7dc);
}


.main-app{
  flex-grow: 1 auto;
}



h1,h2,h3,h4,h5,h6{
  margin: .5rem
}

h1{
  font-size: 3.4rem;
}
h2{
  font-size: 3rem;
}
h3{
  font-size: 2.7rem;
}
h4{
  font-size: 2.2rem;
}
h5{
  font-size: 2rem;
}
p{
  font-size: 1.8rem;
}

ul,li{
  list-style: none;

}
a{
  text-decoration: none;
}

`;
