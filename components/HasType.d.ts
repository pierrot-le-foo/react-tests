/// <reference types="react" />
interface HasTypeProps {
    type: string;
    element: HTMLElement;
    cursor: number;
    position: number;
    moveCursor(): void;
}
export declare function HasType({ type, element, cursor, position, moveCursor }: HasTypeProps): JSX.Element;
export {};
