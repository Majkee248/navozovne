import styled, { css } from 'styled-components';
import { ColorType } from '@theme/types';

export const Wrapper = styled.p<{
    color?: ColorType;
    italic: boolean;
    bold: boolean;
    marginTop: string;
    marginBottom: string;
    align: string;
}>`
    ${({ theme, italic, bold, color, marginTop, marginBottom, align }) => css`
        color: ${color ? theme.color[color] : theme.color.paragraph};
        font-size: 16px;
        letter-spacing: 1px;
        margin-top: ${marginTop};
        margin-bottom: ${marginBottom};
        text-align: ${align};
        line-height: 2;
        font-family: Poppins_regular, sans-serif;
        font-weight: 100;

        @media (max-width: 1119px) {
            font-size: 20px;
        }
        @media (max-width: 880px) {
            font-size: 18px;
        }

        ${italic &&
        css`
            font-style: italic;
        `}
        ${bold &&
        css`
            font-weight: bold;
        `}
    `}
`;
