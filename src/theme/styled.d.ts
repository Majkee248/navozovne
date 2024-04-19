// import original module declarations
import 'styled-components';
import { BreakpointInterface } from '@interfaces/breakpoint-interface';

// and extend them!
declare module 'styled-components' {
    import { ColorInterface } from '@interfaces/color-interface';
    import { HeadingInterface } from '@interfaces/heading-interface';
    import { BaseInterface } from '@interfaces/base-interface';

    export interface DefaultTheme {
        color: ColorInterface;
        heading: HeadingInterface;
        base: BaseInterface;
        breakpoint: BreakpointInterface;
    }

    export interface Theme {
        theme: DefaultTheme;
    }
}
