import React from 'react';
import styled from 'styled-components';
import {toast} from "react-toastify";
import {Container, GlassCard, Subtitle, Title, Button} from "../Styles/MainDesign";
import {useNavigate} from "react-router-dom";


const DiscordTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`;

const TableHeader = styled.th`
    padding: 10px;
    font-size: 1.2rem;
    background-color: #3498db;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 8px;
`;

const TableData = styled.td`
    padding: 10px;
    font-size: 1rem;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 8px;
    text-align: center;
`;

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

const DiscordList = () => {
    const servers = [
        { name: 'Žaidimų Discord Serveris', id: '8KwWW645ck' },
        { name: 'MrEdgariux', id: 'QTgd4JkHDS' },
        { name: '<Emptyness in here>', id: 'not-found', canJoin: false },
        // Add more servers as needed
    ];

    const handleJoin = (serverId, canJoin) => {
        // Simulate joining a Discord server if canJoin is undefined or true
        if (canJoin === undefined || canJoin) {
            toast.success("Norėdami tęsti prisijungimą, žiūrėk discord'ą", {theme:"dark"});
            window.open(`https://discord.gg/${serverId}`, '_blank');
        } else {
            toast.error("Negali atlikti šio veiksmo!", {theme:"dark"});
            alert(`Cannot join Discord server: ${serverId}`);
        }
    };
    const navigator = useNavigate();
    const handleAdd = () => {
        navigator("/forms/discord/add");
    }

    return (
        <Container background="/files/images/discord.jpg">
            <GlassCard>
                <Title>MrEdgariux - Discord</Title>
                <Subtitle>Čia galite rasti visus mūsų Discord serverius, kuriuos mes turime!</Subtitle>
                <DiscordTable>
                    <thead>
                    <tr>
                        <TableHeader>Serveris</TableHeader>
                        <TableHeader>Veiksmai</TableHeader>
                    </tr>
                    </thead>
                    <tbody>
                    {servers.map((server) => (
                        <tr key={server.id}>
                            <TableData>{server.name}</TableData>
                            <TableData>
                                <JoinButton
                                    onClick={() => handleJoin(server.id, server.canJoin)}
                                    disabled={server.canJoin === false}
                                >
                                    Prisijungti
                                </JoinButton>
                            </TableData>
                        </tr>
                    ))}
                    </tbody>
                </DiscordTable>
                <Subtitle>Nori patekti į šį sąrašą?</Subtitle>
                <Button onClick={handleAdd}>Noriu!</Button>
            </GlassCard>
        </Container>
    );
};

export default DiscordList;
