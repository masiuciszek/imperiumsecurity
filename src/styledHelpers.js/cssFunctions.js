import {keyframes} from 'styled-components';
/* eslint-disable import/prefer-default-export */
export const transition = (
  amount = 'all',
  time = '300',
  type = 'ease-in-out'
) => `transition: ${amount} ${time}ms ${type}`;


export const fade = keyframes`
   from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`