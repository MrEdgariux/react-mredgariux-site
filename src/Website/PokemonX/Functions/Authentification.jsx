import React, { createContext, useContext, useState } from 'react';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const nav = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user_token'));

    const login = async (user_token, username) => {
        // Check if token is valid via API call

        try {
            const formData = {
                vartotojo_vardas: username,
                auth_token: user_token
            }
            // WARNING ! IF YOU'RE GOING TO ABUSE THIS API, YOU MIGHT GET IN TROUBLE BECAUSE THIS API USES IP ADDRESS RETRIEVAL
            const response = await fetch('https://cdn.mredgariux.site/PokemonX/verifyLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(),
            });

            const data = await response.json();
            if (data.status === true && data.verified === true) {
                setIsLoggedIn(true);
                toast.info(`Sveiki sugrįžę, ${username}!`, {theme: "dark"});
                nav('/PokemonX');
            } else {
                toast.error("Patvirtinimas nepavyko!", {theme: "dark"});
                return
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Nepavyko patvirtinti prisijungimo!", {theme: "dark"});
            return
        }
    };

    const logout = () => {
        // Additional logout logic if needed
        localStorage.removeItem('user_token');
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };