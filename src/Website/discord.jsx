import React from 'react';
import {toast} from "react-toastify";
import {Container, GlassCard, Subtitle, Title} from "../Styles/MainDesign";
import {TableData, DiscordTable, TableHeader, JoinButton} from "../Styles/Form";

const DiscordList = () => {
    const servers = [
        { name: 'Žaidimų Discord Serveris', id: '8KwWW645ck' },
        { name: 'MrEdgariux', id: 'QTgd4JkHDS' },
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
            </GlassCard>
        </Container>
    );
};

export default DiscordList;
