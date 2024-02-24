import React, { useState } from 'react';
import './StyleFiles/login.css';
import {Button, Container, GlassCard, Title} from "../../Styles/MainDesign";
import {Form, FormGroup, Input} from "../../Styles/Form";
import {toast} from "react-toastify";
import {AuthProvider, useAuth} from "./Functions/Authentification"; // Import your styles
import { useNavigate } from 'react-router-dom';

const PokemonXLogin = () => {
    const nav = useNavigate();
    const {isLoggedIn, login} = useAuth();
    const [formData, setFormData] = useState({
        vartotojo_vardas: '',
        slaptazodis: ''
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const {name, value} = e.target;
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


        try {
            // WARNING ! IF YOU'RE GOING TO ABUSE THIS API, YOU MIGHT GET IN TROUBLE BECAUSE THIS API USES IP ADDRESS RETRIEVAL
            const response = await fetch('https://cdn.mredgariux.site/PokemonX/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(),
            });

            const data = await response.json();
            if (data.status === true && data.authentificated === true) {
                const user_token = data.token;
                localStorage.setItem('user_token', user_token);
                login(user_token, formData.vartotojo_vardas);
            } else {
                toast.error("Ups! Kažkas nutiko, todėl negalėjome išsiųsti serverio!", {theme: "dark"});
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Nepavyko išsiųsti tavo serverio, pranešk tai mums!", {theme: "dark"});
            return
        }
        // Add logic to handle form submission (e.g., sending data to a server)
        console.log(formData);
    };

    return (
        <AuthProvider>
            {
            isLoggedIn ? (
                <>
                    {toast.success("Jūs jau esatę prisijungęs!", { theme: "dark" })}
                    {nav("/PokemonX")} {/* Note: Consider using React Router for navigation */}
                </>
            ) : (
                <Container background="https://i.ibb.co/KjbVmkx/background.jpg">
                    <GlassCard>
                        <Title>Prisijungimas</Title>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                Vartotojo vardas:
                                <Input type="text" name="vartotojo_vardas" value={formData.vartotojo_vardas}
                                       onChange={handleInputChange} required={true}/>
                            </FormGroup>
                            <FormGroup>
                                Slaptažodis:
                                <Input type="url" name="discord_invite_link" value={formData.discord_invite_link}
                                       onChange={handleInputChange} required={true}/>
                            </FormGroup>
                            <Button type="submit">Prisijungti</Button>
                        </Form>
                    </GlassCard>
                </Container>
            )
            }
        </AuthProvider>
    );
}

export default PokemonXLogin;
