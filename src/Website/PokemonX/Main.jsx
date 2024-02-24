import React, { useState } from 'react';
import {Container, GlassCard, Subtitle, Title} from "../../Styles/MainDesign";
import {AuthProvider} from "./Functions/Authentification";

const PokemonXHome = ({ isLoggedIn }) => {
    const [magicBtnColor, setMagicBtnColor] = useState('#ffffff'); // Initial color

    const handleMagicBtnClick = () => {
        const colors = ['#fbff00', '#ff00fb', '#00fbff', '#00fffb', '#fffb00', '#fb00ff', '#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#ffffff', '#000000'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setMagicBtnColor(randomColor);
    };

    return (
        <Container background="https://i.ibb.co/KjbVmkx/background.jpg">
            <AuthProvider>
                <GlassCard>
                    <Title>
                        Welcome to the <span id="magicBtn" className="xd" style={{ color: magicBtnColor }} onClick={handleMagicBtnClick}>PokemonX</span>
                    </Title>
                    <hr />
                    {isLoggedIn ? (
                        // Content to display when user is logged in
                        <>
                            <Subtitle>Welcome to PokemonX, the best place to catch 'em all!</Subtitle>
                            <Subtitle>Enjoy your stay!</Subtitle>
                        </>
                    ) : (
                        // Content to display when user is not logged in
                        <>
                            <Subtitle>This website was built by MrEdgariux, with the help of Artificial Intelligence.</Subtitle>
                            <Subtitle>Website might not be stable due to bugs and etc in our project.</Subtitle>
                            <Subtitle>We recommend using F11 (fullscreen view) to get the best from the website.</Subtitle>
                        </>
                    )}
                </GlassCard>
            </AuthProvider>
        </Container>
    );
};

export default PokemonXHome;
