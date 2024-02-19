import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Website/main';
import Changelogs from './Website/changelog';
import E404 from './Website/error';
import styled from 'styled-components';
import RealHome from './Website/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './Handlers/ErrorHandler';
import DiscordList from './Website/discord';
import Easter1 from './Website/EasterEggs/e2024';
import FormsDiscordAddServer from './Website/VariousShit/Forms/discordAddForm';
import { ProgressBaras } from './Styles/ProgressBar';
import InternetStatusChecker from "./Website/network";

const Menu = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 20px;
    z-index: 1000;
    user-select: none;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 10px; /* Adjust the gap between items on mobile */
    }
`;

const MenuItem = styled(Link)`
    color: #fff;
    background: rgba(60, 60, 60, 0.4);
    backdrop-filter: blur(10px);
    text-decoration: none;
    padding: 10px 20px;
    font-size: 1.2rem;
    border: 2px solid #fff;
    border-radius: 8px;
    font-family: monospace;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    &:hover {
        background-color: #3498db;
        border-color: #2980b9;
        color: #fff;
    }
    @media (max-width: 768px) {
        width: 75%;
        font-size: 12px;
    }
`;

const AppContent = () => {
    const location = useLocation();
    const isMainPage = location.pathname === '/';

    // Init network onlinility checks
    InternetStatusChecker();

    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [hidePBar, setHidePBar] = useState(false);
    const [textDisplay, setTextDisplay] = useState("Kraunama...");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const totalSteps = 10;
                for (let step = 1; step <= totalSteps; step++) {
                    setProgress((step / totalSteps) * 85);
                    await new Promise((resolve) => setTimeout(resolve, 150));
                }

                setProgress(100);

                // Use a single useEffect for handling state changes based on progress
                const delayToShowContent = setTimeout(() => {
                    setHidePBar(true);
                    setTextDisplay("Svetainės turinys užkrautas sekmingai!");
                }, 500);

                // Delay to hide the loading content and show the full page
                const delayToHideLoadingContent = setTimeout(() => {
                    setLoading(false);
                }, 1000); // You can adjust the delay time as needed

                // Clear the timeouts to prevent potential memory leaks
                return () => {
                    clearTimeout(delayToShowContent);
                    clearTimeout(delayToHideLoadingContent);
                };
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <ErrorBoundary>
            {loading ? (
                <ProgressBaras
                    percent={progress}
                    text={textDisplay}
                    hidePBar={hidePBar}
                />
            ) : (
                <>
                    <ToastContainer />
                    {!isMainPage && (
                        <Menu>
                            <MenuItem to="/home">Namai</MenuItem>
                            <MenuItem to="/changes">Pakeitimai</MenuItem>
                            <MenuItem to="/discord">Discord serveriai</MenuItem>
                        </Menu>
                    )}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<RealHome />} />
                        <Route path="/changes" element={<Changelogs />} />
                        <Route path="/discord" element={<DiscordList />} />
                        <Route path="/easter-egg/2024" element={<Easter1 />} />
                        <Route path="/forms/discord/add" element={<FormsDiscordAddServer />} />
                        <Route path="*" element={<E404 />} />
                    </Routes>
                </>
            )}
        </ErrorBoundary>
    );
};

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;
