import React, { useState } from "react";
import styled from "styled-components";
import { Container, GlassCard, Title, Subtitle } from "../Styles/MainDesign";

const Sidebar = styled.div`
    width: 250px;
    position: fixed; /* Fix the sidebar to the left */
    top: 50;
    left: 0;
    background: rgba(60, 60, 60, 0.8);
    color: #fff;
    padding: 20px;
    border-radius: 0 8px 8px 0; /* Round only the right corners */

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 10px 0;
    }
`;

const SidebarButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  text-align: left;
  width: 100%;
  padding: 5px 0;
  text-decoration: none;
  font-family: inherit;

  &:hover {
    color: #3498db;
  }
`;

const WikiPage = () => {
  const [selectedSection, setSelectedSection] = useState("introduction");

  const renderContent = () => {
    switch (selectedSection) {
      case "introduction":
        return (
          <>
            <Title>Introduction</Title>
            <Subtitle>This is our new 'Wiki' thingy on our website OMG</Subtitle>
          </>
        );
      case "mcprisonstat-close":
        return (
          <>
            <Title>McPrison Statistikos Uždarymas</Title>
            <Subtitle>Taip, po labai ilgo laiko (3 metų beveik) mes uždarėme mūsų kurta projektą mcprisonstat.lt</Subtitle>
            <Subtitle>Daugiau informacijos galite rasti <a href="https://docs.mcprisonstat.lt/docs">čia</a></Subtitle>
          </>
        );
      default:
        return (
          <>
            <Title>Įvyko nežinoma klaida</Title>
            <Subtitle>Kažkaip ne taip atsitiko čia pas mus</Subtitle>
          </>
        );
    }
  };

  return (
    <Container>
      <Sidebar>
        <h2>Puslapiai</h2>
        <ul>
          <li>
            <SidebarButton onClick={() => setSelectedSection("introduction")}>
              Introdukcija
            </SidebarButton>
          </li>
          <li>
            <SidebarButton onClick={() => setSelectedSection("mcprisonstat-close")}>
              McPrison Statistikos uždarymas
            </SidebarButton>
          </li>
        </ul>
      </Sidebar>
      <GlassCard>{renderContent()}</GlassCard>
    </Container>
  );
};

export default WikiPage;
