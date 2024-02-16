import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: rgba(50, 50, 50, 0.85);
    padding: 20px;
    border-radius: 8px;
    backdrop-filter: blur(10px);
    text-align: center;
    width: 50%;
    height: 50%;
    color: white;
    font-family: "Baloo 2", sans-serif;
    position: relative;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
`;

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <ModalWrapper>
            <ModalContent>
                <CloseButton onClick={onClose}><CloseIcon /></CloseButton>
                {children}
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
