import React from 'react';
import {HeadingSizeType} from "@/interfaces/heading-interface";
import { Wrapper } from './heading.styled';
import {ColorType} from "@/theme/types";

interface HeadlineProps {
    level: HeadingSizeType | 'div';
    marginTop?: string;
    marginBottom?: string;
    children: React.ReactNode;
    color?: ColorType;
    center?: boolean;
    underline?: boolean;
}

export const Heading: React.FC<HeadlineProps> = ({
    level,
    marginTop = '15px',
    marginBottom = '15px',
    children,
    color,
    center,
    underline,
}) => {
    const as: HeadingSizeType | 'div' = level;

    return (
        <Wrapper
            as={as}
            center={center}
            level={level}
            marginBottom={marginBottom}
            marginTop={marginTop}
            color={color}
            underline={underline}
        >
            {children}
        </Wrapper>
    );
};