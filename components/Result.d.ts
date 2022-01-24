/// <reference types="react" />
import { TestItemProps } from "./Test";
export interface ResultProps extends TestItemProps {
    label: string;
    expect(): any;
    toEqual?: any;
    toMatch?: RegExp;
}
export declare function Result({ label, expect, toEqual, toMatch, cursor, position, moveCursor, element, }: ResultProps): JSX.Element;
