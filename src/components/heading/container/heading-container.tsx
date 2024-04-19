import React from 'react';
import { Wrapper } from './heading-container.styled';

interface HeadingContainerProps {
    children: React.ReactNode;
}

export const HeadingContainer: React.FC<HeadingContainerProps> = ({ children }) => <Wrapper>{children}</Wrapper>;
