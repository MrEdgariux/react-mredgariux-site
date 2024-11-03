import React from 'react';
import styled from 'styled-components';
import {Container, GlassCard, Subtitle, Title} from "../Styles/MainDesign";
import {toast} from "react-toastify";

const JoinButton = styled.button`
    color: #fff;
    background: rgba(60, 60, 60, 0.4);
    backdrop-filter: blur(10px);
    text-decoration: none;
    padding: 10px 20px;
    font-size: 1.2rem;
    border: 2px solid #fff;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    &:hover {
        background-color: #3498db;
        border-color: #2980b9;
        color: #fff;
    }

    ${(props) => props.disabled && `
        background-color: #7f8c8d;
        cursor: not-allowed;
        &:hover {
            background-color: #7f8c8d;
        }
    `}
`;


const Projects = () => {
    const handleRedirect = (url) => {
        if (url === '') {
            toast.error("Negalėjome atlikti šio veiksmo", {theme:"dark"});
            return
        }
        // Simulate joining a Discord server if canJoin is undefined or true
        toast.success("Buvote perkeltas į pasirinkta projektą", {theme:"dark"});
        window.open(`${url}`, '_blank');
    };
    return (
        <Container>
            <GlassCard>
                <Title>Mūsų projektai</Title>
                <Subtitle>Šiuo metu aš neturiu jokių projektų, tačiau yra dirbama prie vieno didelio projekto!</Subtitle>
                <Subtitle>Sistema - Tai vienas didžiausių projektų prie kurių aš dirbu</Subtitle>
                <JoinButton onClick={() => handleRedirect('')}>
                    Perkelti
                </JoinButton>
            </GlassCard>
        </Container>
    );
};

export default Projects;
