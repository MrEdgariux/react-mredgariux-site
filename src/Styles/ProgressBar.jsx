import React from 'react';
import { Line } from 'rc-progress';
import { GlassCard, Subtitle, Container} from "./MainDesign";

const ProgressBaras = ({ percent, text, hidePBar }) => {
    return (
        <Container background="/files/images/palworld.jpg">
            <GlassCard>
                <Subtitle>{text}</Subtitle>
                {!hidePBar && <Line percent={percent} strokeWidth="2" strokeColor="#3498db" />}
            </GlassCard>
        </Container>
    );
};

export {ProgressBaras};