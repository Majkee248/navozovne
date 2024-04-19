import styled, { css } from 'styled-components';
import {HeadingSizeType} from "@/interfaces/heading-interface";
import {ColorType} from "@/theme/types";
export const Wrapper = styled.div<{
    color?: ColorType;
    level: HeadingSizeType | 'div';
    marginTop: string;
    marginBottom: string;
    maxWidth?: number;
    center?: boolean;
    underline?: boolean;
}>`
    ${({ theme, marginBottom, level, center, marginTop, color, underline }) => css`
        color: ${color ? theme.color[color] : theme.color.dark};
        font-size: ${theme.heading[level].mobile.fontSize};
        font-weight: ${theme.heading[level].fontWeight};
        line-height: ${theme.heading[level].mobile.lineHeight};
        margin-top: ${marginTop};
        margin-bottom: ${marginBottom};
        font-family: 'PlayfairDisplaySC-Bold', serif;

        ${center &&
        css`
            text-align: center;
        `}

        @media screen and (min-width: 768px) {
            font-size: ${theme.heading[level].fontSize};
            line-height: ${theme.heading[level].lineHeight};
        }s

        ${underline &&
        css`
            padding: 30px 0 8px;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                left: 51%;
                bottom: 8px;
                width: 100%;
                height: 14px;
                transform: skew(-12deg) translateX(-50%);
                opacity: 0.5;
                background: ${theme.color.primary};
                z-index: -1;

                @media (min-width: 881px) {
                    bottom: 11px;
                }
            }
        `}

        span {
            color: ${theme.color.dark};
        }
        @media screen and (max-width: 1440px) {
            font-size: calc(${theme.heading[level].fontSize} * 0.9);
        }
        @media screen and (max-width: 1024px) {
            font-size: calc(${theme.heading[level].fontSize} * 0.85);
        }
        @media screen and (max-width: 768px) {
            font-size: calc(${theme.heading[level].fontSize} * 0.8);
        }
        @media screen and (max-width: 360px) {
            font-size: calc(${theme.heading[level].fontSize} * 0.75);
        }
    `}
`;
