import { CSSProperties } from 'react';

export const opacityTransition: { [key: string]: CSSProperties } = {
    entering: { opacity: 100 },
    entered: { opacity: 100 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: {},
};
