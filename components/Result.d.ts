/// <reference types="react" />
import { TestItemExtraProps, TestItemProps } from "./Test";
export interface ResultProps extends TestItemProps {
    expect(elem: HTMLElement): any;
    toEqual?: any;
    toMatch?: RegExp;
    options?: TestItemExtraProps;
    assertion: string;
}
export declare function Result({ expect, toEqual, toMatch, cursor, position, moveCursor, element, options, assertion, }: ResultProps): JSX.Element;
