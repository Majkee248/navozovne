import { BreakpointInterface } from '@interfaces/breakpoint-interface';

export const createBreakpoint = () => {
    const sizes = {
        sm: 360,
        md: 768,
        lg: 1024,
        xl: 1440,
    } as const;

    const breakpoint: BreakpointInterface = {
        sm: {
            value: sizes.sm,
            min: `(min-width: ${sizes.sm}px)`,
            max: `(max-width: ${sizes.sm - 1}px)`,
        },
        md: {
            value: sizes.md,
            min: `(min-width: ${sizes.md}px)`,
            max: `(max-width: ${sizes.md - 1}px)`,
        },
        lg: {
            value: sizes.lg,
            min: `(min-width: ${sizes.lg}px)`,
            max: `(max-width: ${sizes.lg - 1}px)`,
        },
        xl: {
            value: sizes.xl,
            min: `(min-width: ${sizes.xl}px)`,
            max: `(max-width: ${sizes.xl - 1}px)`,
        },
    };
    return breakpoint;
};
