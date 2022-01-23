/// <reference types="react" />
export interface ClickProps {
    selector?: string;
    element: HTMLElement;
    cursor: number;
    position: number;
    moveCursor(): void;
    parent?: string;
    label?: string;
}
export declare function Click({ selector, element, cursor, position, moveCursor, parent, label, }: ClickProps): JSX.Element;
