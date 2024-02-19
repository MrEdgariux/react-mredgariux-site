import { useState, useEffect } from 'react';
import {toast} from "react-toastify";

const InternetStatusChecker = () => {
    const [isOffline, setIsOffline] = useState(false);

    useEffect(() => {
        const checkOfflineStatus = () => {
            setIsOffline(!navigator.onLine);
            if (isOffline) {
                toast.error("Jūs esate neprisijungęs prie interneto!", { theme: "dark", autoClose: 5000, pauseOnHover: false, pauseOnFocusLoss: false});
            }
        };

        // Initial check
        checkOfflineStatus();

        // Check offline status every 5 seconds (adjust the interval as needed)
        const intervalId = setInterval(checkOfflineStatus, 5000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, [isOffline]);
};

export default InternetStatusChecker;