import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Container = styled.div`
    background: url('/files/images/main.jpg') center/cover no-repeat;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
`;

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
    position: relative;
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

    &:disabled {
        background-color: #bdc3c7;
        cursor: not-allowed;
    }
`;

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const verificationMethod = () => {
        setIsLoading(true);

        toast.success("Dėkojame, kad patvirtinote, kad neesate robotas!", { theme: "dark", autoClose: 2000 });
        setTimeout(() => {
            setIsLoading(false);
            navigate("/home");
        }, 500);
    };

    return (
        <Container>
            <GlassCard>
                <Title>MrEdgariux Apsaugos</Title>
                <Subtitle>Sveikas atvykęs!</Subtitle>
                <Button onClick={verificationMethod} disabled={isLoading}>
                    Įeiti
                </Button>
            </GlassCard>
        </Container>
    );
};

export default Home;
