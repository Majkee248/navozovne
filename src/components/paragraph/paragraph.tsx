import React from 'react';
import { ColorType } from '@theme/types';
import { Wrapper } from './paragraph.styled';
interface ParagraphProps {
    italic?: boolean;
    bold?: boolean;
    children: React.ReactNode;
    color?: ColorType;
    marginTop?: string;
    marginBottom?: string;
    align?: 'left' | 'right' | 'center' | 'justify';
}
export const Paragraph: React.FC<ParagraphProps> = ({
    italic = false,
    bold = false,
    children,
    color,
    marginTop = '0px',
    marginBottom = '0px',
    align = 'left',
}) => (
    <Wrapper italic={italic} bold={bold} color={color} marginTop={marginTop} marginBottom={marginBottom} align={align}>
        {children}
    </Wrapper>
);
