import styled from 'styled-components';
import { fade } from '../../styledHelpers.js/cssFunctions';


export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1050;
  display: flex;
  transition: all 300ms ease-in-out;
  align-items: baseline;
  animation: ${fade} 300ms ease-in-out;
`;


export const ModalBoxSetup = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  /* width: ${props => props.witdh || '32%'}; */
  width: ${props => props.witdh || '52%'};
  overflow: hidden;
  padding: 16px;
  margin: 50px auto;
  box-sizing: border-box;
  z-index: 1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  background: #fff;
  /* border: 0.5px solid #e8e8e8; */
  border: 2px solid #333;
  height: ${props => props.height || '45rem'};
`;

export const ModalBg = styled.div`
  width: 100vw;
  min-height: 100vh;
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
`;

