import { SyntheticEvent } from "react";
interface TriggerProps {
    eventName: string;
    selector?: string;
    element: HTMLElement;
    cursor: number;
    position: number;
    moveCursor(): void;
    event: SyntheticEvent;
    label?: string;
    parent?: string;
}
export declare function Trigger({ eventName, selector, element, cursor, position, moveCursor, event, parent, label, }: TriggerProps): JSX.Element;
export {};
