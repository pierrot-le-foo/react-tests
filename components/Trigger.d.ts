import { SyntheticEvent } from "react";
import { TestItemExtraProps } from "./Test";
interface TriggerProps {
    eventName: string;
    element: HTMLElement;
    cursor: number;
    position: number;
    moveCursor(): void;
    event: SyntheticEvent;
    options?: TestItemExtraProps;
}
export declare function Trigger({ eventName, element, cursor, position, moveCursor, event, options, }: TriggerProps): JSX.Element;
export {};
