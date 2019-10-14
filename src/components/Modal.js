import React from 'react';
import PropTypes from 'prop-types';
import {ModalWrapper,ModalBoxSetup,ModalBg} from "./styled/StyledModal"

const Modal = ({show,reject,content,client}) => {
  return (
    <>
      {show && (
      <ModalWrapper>
        <ModalBoxSetup width={client}>
          {content}
        </ModalBoxSetup>
        <ModalBg onClick={reject} />
      </ModalWrapper>
      )}
    </>
  );
};


Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  reject: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired,
};


export default Modal;
