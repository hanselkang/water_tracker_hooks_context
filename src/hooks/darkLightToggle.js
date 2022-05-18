import { useState } from "react";


export const DarkMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return { isDarkMode, toggleDarkMode }
}