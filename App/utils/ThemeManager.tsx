import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme } from '../theme/palette'
const STORAGE_KEY = 'THEME_ID';
interface ContextType {
    themeID: string,
    setThemeID: (value: string) => void
}
export const ThemeContext = React.createContext<ContextType>({});

export const ThemeContextProvider = ({ children }: any) => {
    const [themeID, setThemeID] = useState<string>("");
    useEffect(() => {
        (async () => {
            const storedThemeID = await AsyncStorage.getItem(STORAGE_KEY);
            if (storedThemeID) {
                setThemeID(storedThemeID);
            } else {
                setThemeID("LIGHT");
            }
        })();
    }, []);

    return (
        <ThemeContext.Provider value={{ themeID, setThemeID }}>
            {children}
        </ThemeContext.Provider>
    );
};


export function withTheme(Component: any) {
    return (props: any) => {
        const { themeID, setThemeID } = useContext(ThemeContext);
        const getTheme = (themeID: String) => {
            return Theme.themeID
        }
        const setTheme = (themeId: string) => {
            AsyncStorage.setItem(STORAGE_KEY, themeId);
            setThemeID(themeId);
        };
        const getAppTheme = (themeId: string) => {
            var theme = getTheme(themeId);
            if (theme) {
                return { ...theme };
            }
            else {
                return { ...Theme['LIGHT'] }
            }

        };

        return (
            <Component
                {...props}
                themes={Theme}
                theme={getAppTheme(themeID)}
                setTheme={setTheme}
                themeID={themeID}
            />
        );
    };
}