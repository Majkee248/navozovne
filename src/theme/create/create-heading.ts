import { HeadingInterface } from '@interfaces/heading-interface';

//TODO: přidat font-weight a nainstalovat fonty
export const createHeading = () => {
    const heading: HeadingInterface = {
        h1: {
            fontSize: '45px',
            lineHeight: '60px',
            fontWeight: 700,
            mobile: {
                fontSize: '30px',
                lineHeight: '35px',
            },
        },
        h2: {
            fontSize: '32px',
            lineHeight: '45px',
            fontWeight: 700,
            mobile: {
                fontSize: '26px',
                lineHeight: '35px',
            },
        },
        h3: {
            fontSize: '26px',
            lineHeight: '35px',
            fontWeight: 700,
            mobile: {
                fontSize: '18px',
                lineHeight: '24px',
            },
        },
        h4: {
            fontSize: '18px',
            lineHeight: '20px',
            fontWeight: 700,
            mobile: {
                fontSize: '16px',
                lineHeight: '20px',
            },
        },
    };
    return heading;
};
