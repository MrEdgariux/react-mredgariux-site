import React, {useState} from 'react';
import {Button, Container, GlassCard, Subtitle, Title} from "../../../Styles/MainDesign";
import {Form, FormGroup, Input} from "../../../Styles/Form";
import {toast} from "react-toastify";


const FormsDiscordAddServer = () => {
    // State to manage form input
    const [formData, setFormData] = useState({
        vartotojo_vardas: '',
        discord_invite_link: '',
        discord_name: ''
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData === undefined) {
            toast.error("Nesekmingai baigta operacija.", {theme: "dark"});
            return;
        }
        if (!formData.discord_invite_link.startsWith("https://discord.gg/")) {
            toast.warn("Jūsų nurodyta nuoroda neleidžiama!", {theme: "dark"});
            return;
        }


        try {
            // WARNING ! IF YOU'RE GOING TO ABUSE THIS API, YOU MIGHT GET IN TROUBLE BECAUSE THIS API USES IP ADDRESS RETRIEVAL
            const response = await fetch('https://cdn.mredgariux.site/discord/add-server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(),
            });

            const data = await response.json();
            if (data.status === true) {
                toast.success(`Jūs sekmingai pridavėte savo "${formData.discord_name}" serverį`, {theme: "dark"})
            } else {
                toast.error("Ups! Kažkas nutiko, todėl negalėjome išsiųsti serverio!", {theme:"dark"});
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Nepavyko išsiųsti tavo serverio, pranešk tai mums!", {theme:"dark"});
            return
        }
        // Add logic to handle form submission (e.g., sending data to a server)
        console.log(formData);
    };
    return (
        <Container background="/files/images/ratchet6.jpg">
            <GlassCard>
                <Title>Discord - Pridėti serverį</Title>
                <Subtitle>Jūs prašote pridėti savo Discord serverį į sąrašą.</Subtitle>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        Vartotojo vardas:
                        <Input type="text" name="vartotojo_vardas" value={formData.vartotojo_vardas} onChange={handleInputChange} required={true}/>
                    </FormGroup>
                    <FormGroup>
                        Discord Priėmimo nuoroda:
                        <Input type="url" name="discord_invite_link" value={formData.discord_invite_link} onChange={handleInputChange} required={true}/>
                    </FormGroup>
                    <FormGroup>
                        Discord Serverio pavadinimas:
                        <Input type="text" name="discord_name" value={formData.discord_name} onChange={handleInputChange} required={true}/>
                    </FormGroup>
                    <Button type="submit">Priduoti</Button>
                </Form>
            </GlassCard>
        </Container>
    );
};

export default FormsDiscordAddServer;
