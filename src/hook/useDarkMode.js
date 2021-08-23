
import { createAtom, useAtom } from "aesthetic-state";
import { useEffect } from "react";

export const THEME = createAtom({
    name: 'theme',
    default: 'dark',
    localStoragePersistence: true,
    actions: {
        toggle({ dispatch }) {
            dispatch(t => {
               let newTheme =  t === 'dark' ? 'light' : 'dark';
               return newTheme;
            })
        }
    }
})

export default function useDarkMode() {
    const [theme, , actions] = useAtom(THEME);

    useEffect(() => {
        const colorTheme = theme === 'dark' ? 'light' : 'dark';
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme])
    // eslint-disable-next-line
    return [, actions.toggle];
}
