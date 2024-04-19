import { BaseInterface } from '@interfaces/base-interface';

export const createBase = () => {
    const base: BaseInterface = {
        fontFace: 'Nunito_regular',
        fontWeight: '600',
        lineHeight: '16px',
    };
    return base;
};
