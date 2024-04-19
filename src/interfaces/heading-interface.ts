interface HeadingSize {
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
    mobile: {
        fontSize: string;
        lineHeight: string;
    };
}

export interface HeadingInterface {
    h1: HeadingSize;
    h2: HeadingSize;
    h3: HeadingSize;
    h4: HeadingSize;
}

export type HeadingSizeType = keyof HeadingInterface;
