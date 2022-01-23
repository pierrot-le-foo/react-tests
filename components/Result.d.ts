/// <reference types="react" />
export interface ResultProps {
    label: string;
    expect(): any;
    toEqual?: any;
    toMatch?: RegExp;
    cursor: number;
    position: number;
    moveCursor(): void;
}
export declare function Result({ label, expect, toEqual, toMatch, cursor, position, moveCursor, }: ResultProps): JSX.Element;
