import React from 'react';
import styled from 'styled-components';
import {Container, GlassCard, Subtitle, Title} from "../Styles/MainDesign";

const ChangelogList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  text-align: center;
`;

const ChangelogItem = styled.li`
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: #fff;
    font-family: monospace;
`;

const Versionas = styled.span`
    color: lime;
    font-family: monospace;
`;

const Changelogs = () => {
    return (
        <Container  background="/files/images/changelog.jpg">
            <GlassCard>
                <Title>MrEdgariux - Pakeitimai</Title>
                <Subtitle>Štai mūsų visos svetainės pakeitimų sąrašas</Subtitle>
                <Subtitle>Dabartinė svetainės versija: <Versionas>1.3</Versionas></Subtitle>
                <ChangelogList>
                    <ChangelogItem>Version 1.0 - Svetainės išleidimas</ChangelogItem>
                    <ChangelogItem>Version 1.1 - Puslapių pridėjimas</ChangelogItem>
                    <ChangelogItem>Version 1.2 - Apsaugų implementacija</ChangelogItem>
                    <ChangelogItem>Version 1.3 - Discord serverių sąrašas</ChangelogItem>
                    {/* Add more changelog items as needed */}
                </ChangelogList>
            </GlassCard>
        </Container>
    );
};

export default Changelogs;
