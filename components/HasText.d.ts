/// <reference types="react" />
interface HasTextProps {
    text: string | RegExp;
    element: HTMLElement;
    cursor: number;
    position: number;
    moveCursor(): void;
}
export declare function HasText({ text, element, cursor, position, moveCursor, }: HasTextProps): JSX.Element;
export {};
