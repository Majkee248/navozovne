import { ColorInterface } from '@interfaces/color-interface';

export const createColor = () => {
    const color: ColorInterface = {
        wine: '#46000B',
        primary: '#68153C',
        black: '#1D1B26',
        gray: '#dcdcdc',
        white: '#F5F5F5',
        paragraph: '#C6C6C6',
        gold: '#B0976E',
        paragraphblack: '000000',
        dark: '#1D1B26',
    };
    return color;
};
