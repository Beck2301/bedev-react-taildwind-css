
import { useEffect, useState } from "react";


export default function useDarkMode() {
    const [theme, setTheme] = useState('dark');
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme], colorTheme)
    return [colorTheme, setTheme];
}
