import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from 'react-router-dom';
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
import { ProgressBaras } from './Styles/ProgressBar';
import InternetStatusChecker from "./Handlers/network";
import Projects from './Website/projects';
import Partners from './Website/partners';
import InformationStand from './Website/informations';

const Menu = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 20px;
    z-index: 1000;
    user-select: none;
    transition: transform 0.3s ease, opacity 0.3s ease; /* Add transition effects */

    /* Mobile view: slide in from the right */
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 5px;
        border-radius: 8px;
        padding-right: 20px;
        position: fixed;
        top: 60px;
        right: 10px;
        max-width: 300px;
        background: rgba(60, 60, 60, 0.9);
        
        /* Slide in or out based on isOpen state */
        transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
        opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
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
        width: 100%;
        font-size: 1rem;
    }
`;

const HamburgerIcon = styled.div`
    display: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 1100;

    @media (max-width: 768px) {
        display: block;
    }

    div {
        width: 100%;
        height: 4px;
        background-color: #fff;
        margin: 5px 0;
        transition: 0.4s;
    }
`;

const AppContent = () => {
    const debugMode = false;

    const location = useLocation();

    // Initialize network connectivity checks
    InternetStatusChecker();

    const [loading, setLoading] = useState(!debugMode);
    const [progress, setProgress] = useState(0);
    const isMainPage = location.pathname === '/';
    const [hidePBar, setHidePBar] = useState(false);
    const [textDisplay, setTextDisplay] = useState("Kraunama...");
    const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle

    useEffect(() => {
        const fetchData = async () => {
            try {
                const totalSteps = 10;
                for (let step = 1; step <= totalSteps; step++) {
                    setProgress((step / totalSteps) * 85);
                    await new Promise((resolve) => setTimeout(resolve, 150));
                }

                setProgress(100);

                const delayToShowContent = setTimeout(() => {
                    setHidePBar(true);
                    setTextDisplay("Svetainės turinys užkrautas sekmingai!");
                }, 500);

                const delayToHideLoadingContent = setTimeout(() => {
                    setLoading(false);
                }, 1000);

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
                        <>
                            <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </HamburgerIcon>
                            <Menu isOpen={menuOpen}>
                                <MenuItem to="/home" onClick={() => setMenuOpen(false)}>Namai</MenuItem>
                                <MenuItem to="/changes" onClick={() => setMenuOpen(false)}>Pakeitimai</MenuItem>
                                <MenuItem to="/projects" onClick={() => setMenuOpen(false)}>Projektai</MenuItem>
                                <MenuItem to="/info" onClick={() => setMenuOpen(false)}>Informacija</MenuItem>
                                <MenuItem to="/partners" onClick={() => setMenuOpen(false)}>Partneriai</MenuItem>
                                <MenuItem to="/discord" onClick={() => setMenuOpen(false)}>Discord serveriai</MenuItem>
                            </Menu>
                        </>
                    )}
                    
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<RealHome />} />
                        <Route path="/changes" element={<Changelogs />} />
                        <Route path="/discord" element={<DiscordList />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/info" element={<InformationStand />} />
                        <Route path="/partners" element={<Partners />} />
                        <Route path="/easter-egg/2024" element={<Easter1 />} />

                        <Route path="*" element={<E404 />} />
                    </Routes>
                </>
            )}
        </ErrorBoundary>
    );
};

const App = () => {
    return (
      <div className="App">
        <Router>
          <AppContent />
        </Router>
      </div>
    );
};

export default App;
