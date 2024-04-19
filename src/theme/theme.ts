import { DefaultTheme } from 'styled-components';
import { createColor } from './create/create-color';
import { createHeading } from './create/create-heading';
import { createBase } from './create/create-base';
import { createBreakpoint } from './create/create-breakpoint';

export const createTheme = () => {
    const color = createColor();
    const heading = createHeading();
    const base = createBase();
    const breakpoint = createBreakpoint();

    const theme: DefaultTheme = {
        color,
        heading,
        base,
        breakpoint,
    };
    return theme;
};
