import React from 'react';
import { DefaultTheme, ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import { createTheme } from '@theme/theme';

const ThemeContext = React.createContext<DefaultTheme>({} as DefaultTheme);

export const useTheme = (): DefaultTheme => {
    const context = React.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useStore must be used within StoreProvider');
    }

    return context;
};

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps): React.ReactElement => {
    const theme: DefaultTheme = createTheme();

    return <StyledComponentThemeProvider theme={theme}>{children}</StyledComponentThemeProvider>;
};
