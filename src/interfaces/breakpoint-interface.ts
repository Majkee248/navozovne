export interface BreakpointSize {
    value: number;
    min: string;
    max: string;
}

export interface BreakpointInterface {
    sm: BreakpointSize;
    md: BreakpointSize;
    lg: BreakpointSize;
    xl: BreakpointSize;
}

// Type
export type BreakpointSizeType = keyof BreakpointInterface;
