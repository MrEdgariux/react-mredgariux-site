import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, GlassCard, Subtitle, Title } from "../Styles/MainDesign";
import PropTypes from "prop-types";
import Modal from "../Styles/modal";

const ChangelogList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
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

const List = styled.ul`
    list-style: none;
    text-align: center;
    padding: 10px;
`;

ChangelogItem.propTypes = {
    version: PropTypes.string,
};

const changelogData = [
    { version: "1.0", changes: ["Svetainės išleidimas"], change_date: "2024-02-14" },
    { version: "1.1", changes: ["Puslapių pridėjimas", "Dizaino patobulinimas", "Meniu pagerinimas"], change_date: "2024-02-14" },
    { version: "1.2", changes: ["Apsaugų implementacija", "Backgroundų pakeitimai", "Meniu pagerinimas", "Patvirtinimo puslapis"], change_date: "2024-02-15" },
    { version: "1.3", changes: ["Discord serverių sąrašas", "Dizaino perdarymas", "Menu tvarkymai", "Failų perkėlimas"], change_date: "2024-02-15" },
    { version: "1.4", changes: ["Pridėti discord serverį", "Formos", "Iššokantys langeliai", "Perėjimai"], change_date: "2024-02-16" },
    { version: "1.5", changes: ["Krovimosi langas", "Klaidų sutvarkymai"], change_date: "2024-02-17" },
    { version: "1.6", changes: ["Backend perdarymas", "Discord pridėjimo perdarymas"], change_date: "2024-02-18" },
    // Add more versions and changes as needed
];

const Changelogs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedChangelog, setSelectedChangelog] = useState({});

    const openModal = (changelog) => {
        setSelectedChangelog(changelog);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedChangelog({});
        setIsModalOpen(false);
    };

    return (
        <Container background="/files/images/changelog.jpg">
            <GlassCard>
                <Title>MrEdgariux - Pakeitimai</Title>
                <Subtitle>Štai mūsų visos svetainės pakeitimų sąrašas</Subtitle>
                <Subtitle>Dabartinė svetainės versija: <Versionas>1.5</Versionas></Subtitle>
                <ChangelogList>
                    {changelogData.map(({ version, changes, change_date }) => (
                        <ChangelogItem key={version} onClick={() => openModal({ version, changes, change_date })}>
                            Version {version} - {changes[0]}
                        </ChangelogItem>
                    ))}
                </ChangelogList>
            </GlassCard>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Pakeitimų sąrašas</h2>
                <p>Pakeitimo data: {selectedChangelog.change_date}</p>
                <hr />
                {selectedChangelog.changes && (
                    <List>
                        {selectedChangelog.changes.map((change, index) => (
                            <li key={index}>{change}</li>
                        ))}
                    </List>
                )}
            </Modal>
        </Container>
    );
};

export default Changelogs;
