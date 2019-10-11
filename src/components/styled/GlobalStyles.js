import { createGlobalStyle} from 'styled-components';
import { transition } from '../../styledHelpers.js/cssFunctions';

export const cl = {
  pink: '#D16BA5',
  dark: '#1A1C1E',
  dark2: '#263238',
  darkBrighter: '#1E2C2C',
  green: '#0c7574',
  greenLighter: '#3ca581',
  greenLighterLightest: '#90d37a',
  yellow: '#f9f871',
  white: '#fff',
  bgWhite: '#fff',
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
  font-family: 'Montserrat', sans-serif;
  background: ${props => props.theme.mode === 'dark' ? `${cl.dark2}` : `${cl.bgWhite}` };
  color: ${props => props.theme.mode === 'dark' ? `${cl.bgWhite}` : `${cl.dark2}` };
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
  color: ${props => props.theme.mode === 'dark' ? `${cl.white} ` :  `${cl.dark} ` };
}

.toggle-box{
  position: absolute;
  right: 4rem;
  top: 2rem;

  label{
    position: relative;
    display: inline-block;
    width: 7rem;
    height: 2.9rem;
    input {
      opacity: 0;
      width: 0;
      height: 0;
      &:checked + .slider {
        background: ${cl.bgWhite};
      }
      &:focus + .slider{
        box-shadow: 0 0 1px ${cl.dark2};
      }
      &:checked + .slider::before{
        content: "🌑";
        -webkit-transform: translateX(37px);
        -ms-transform: translateX(37px);
        transform: translateX(37px);
      }
    }
    .slider{
      position:absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${cl.dark2};
      border-radius: 12rem;
      ${transition()};
      &::before{
        position: absolute;
        content: "🌞";
        font-size: 2rem;
        height: 2rem;
        width: 2rem;
        left: .4rem;
        bottom: .6rem;
        border-radius: 50%;
        background-color: ${cl.white};
        border-radius: 3px solid ${cl.pink};
        ${transition()};
      }
      &::after{

      }
    }
  }
}
`;
