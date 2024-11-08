import React from 'react';
import {toast} from "react-toastify";
import {Container, ErrorGlassCard, Subtitle, Title, Button} from "../Styles/MainDesign";
const E404 = () => {
    const show_msg = () => {
        toast.error("Operacija nepavyko", {theme: "dark"})
    }
    return (
        <Container>
            <ErrorGlassCard>
                <Title>Puslapis nerastas</Title>
                <Subtitle>Dėja, šis puslapis nebuvo rastas.</Subtitle>
                <Button onClick={show_msg}>Grįžti atgal</Button>
            </ErrorGlassCard>
        </Container>
    );
};

export default E404;