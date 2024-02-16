import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {Container, GlassCard, Subtitle, Title, Button} from "../Styles/MainDesign";

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
        <Container background="/files/images/verify.png">
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
