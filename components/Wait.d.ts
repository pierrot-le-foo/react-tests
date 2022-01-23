/// <reference types="react" />
interface WaitProps {
    milliseconds: number;
    cursor: number;
    position: number;
    moveCursor(): void;
}
export declare function Wait({ milliseconds, cursor, position, moveCursor }: WaitProps): JSX.Element;
export {};
