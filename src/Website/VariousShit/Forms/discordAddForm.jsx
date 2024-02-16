import React, {useState} from 'react';
import {Button, Container, GlassCard, Subtitle, Title} from "../../../Styles/MainDesign";
import {Form, FormGroup, Input} from "../../../Styles/Form";
import {toast} from "react-toastify";


const FormsDiscordAddServer = () => {
    // State to manage form input
    const [formData, setFormData] = useState({
        username: '',
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData === undefined) {
            toast.error("Nesekmingai baigta operacija.", {theme: "dark"});
            return;
        }
        toast.success(`Jūs sekmingai pridavėte savo "${formData.discord_name}" serverį`)
        // Add logic to handle form submission (e.g., sending data to a server)
        console.log(formData);
    };
    return (
        <Container background="/files/images/main.jpg">
            <GlassCard>
                <Title>Discord - Pridėti serverį</Title>
                <Subtitle>Jūs žadate užpildyti prašymą pridėti jūsų discord serverį į sąrašą!</Subtitle>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        Vartotojo vardas:
                        <Input type="text" name="username" value={formData.username} onChange={handleInputChange} required={true}/>
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
