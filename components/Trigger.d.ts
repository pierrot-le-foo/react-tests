import { SyntheticEvent } from "react";
import { TestItemExtraProps } from "./Test";
interface TriggerProps<Element> {
    eventName: string;
    element: HTMLElement;
    cursor: number;
    position: number;
    moveCursor(): void;
    event: SyntheticEvent<Element>;
    options?: TestItemExtraProps;
}
export declare function Trigger({ eventName, element, cursor, position, moveCursor, event, options, }: TriggerProps<Element>): JSX.Element;
export {};
