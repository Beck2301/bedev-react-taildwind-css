
import { createAtom, useAtom } from "aesthetic-state";
import { useEffect } from "react";

export const THEME = createAtom({
    name: 'theme',
    default: 'light',
    localStoragePersistence: true,
    actions: {
        toggle({ dispatch }) {
            dispatch(t => {
               let newTheme =  t === 'light' ? 'dark' : 'light';
               return newTheme;
            })
        }
    }
})

export default function useDarkMode() {
    const [theme, , actions] = useAtom(THEME);

    useEffect(() => {
        const colorTheme = theme === 'light' ? 'dark' : 'light';
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme])
    // eslint-disable-next-line
    return [, actions.toggle];
}
