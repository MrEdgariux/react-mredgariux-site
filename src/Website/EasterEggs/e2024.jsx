import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: url("/files/images/easter-egg-2024.png") center/cover no-repeat; /* Replace with your image URL */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
`;

const GlassCard = styled.div`
  background: rgba(25, 25, 25, 0.4); /* Transparent white color for the card */
  padding: 40px;
  border-radius: 12px;
  backdrop-filter: blur(10px); /* Apply blur for glass effect */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 600px;
  width: 80%;
  position: relative;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
`;

const Subtitle = styled.p`
    font-size: 1.5rem;
    color: #eee;
    font-family: monospace;
`;

const Easter1 = () => {
    return (
        <Container>
            <GlassCard>
                <Title>Easter Eggs - 2024</Title>
                <Subtitle>Jūs suradote easter egg, kuris buvo sukurtas 2024-02-15</Subtitle>
                <Subtitle>Taip, tai nieko įspudingo, bet tai tik pradžia HAHAHA :)</Subtitle>
                <Subtitle>YellowGreenRed</Subtitle>
            </GlassCard>
        </Container>
    );
};

export default Easter1;
