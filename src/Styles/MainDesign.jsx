import styled from "styled-components";
import PropTypes from 'prop-types';
import React from 'react';

const StyledContainer = styled.div`
    background: url(${(props) => props.background}) center/cover no-repeat;
    min-height: 100vh;
    display: flex;
    flex-direction: row; /* Adjust to row to allow sidebar and content next to each other */
    align-items: center;
    justify-content: center;
    user-select: none;
    position: relative;
    overflow: hidden;
`;

const Container = ({ children }) => {
  return <StyledContainer background="files/images/background.webp">{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node,
};

const GlassCard = styled.div`
    background: rgba(25,25,25, 0.4); /* Transparent white color for the card */
    padding: 40px;
    border-radius: 12px;
    backdrop-filter: blur(10px); /* Apply blur for glass effect */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 600px;
    width: 80%;
    position: relative;

    @media (max-width: 768px) {
        max-width: 70%;
    }
`;

const ErrorGlassCard = styled.div`
    background: rgba(25,25,25, 0.4); /* Transparent white color for the card */
    padding: 40px;
    border-radius: 12px;
    border: 1px solid darkred;
    backdrop-filter: blur(10px); /* Apply blur for glass effect */
    box-shadow: 0 0px 10px red;
    text-align: center;
    max-width: 600px;
    width: 80%;
    position: relative;

    @media (max-width: 768px) {
        max-width: 70%;
    }
`;

const Title = styled.h1`
    font-size: 3rem;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Subtitle = styled.p`
    font-size: 1.5rem;
    color: #eee;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const Button = styled.button`
    padding: 12px 24px;
    font-size: 1.2rem;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #2980b9;
    }
`;

export { StyledContainer, Container, GlassCard, ErrorGlassCard, Title, Subtitle, Button };
