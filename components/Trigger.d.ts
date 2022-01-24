import { SyntheticEvent } from "react";
import { TestItemExtraProps } from "./Test";
interface TriggerProps<T> {
    eventName: string;
    element: HTMLElement;
    cursor: number;
    position: number;
    moveCursor(): void;
    event: SyntheticEvent<T>;
    options?: TestItemExtraProps;
}
export declare function Trigger<T extends Element>({ eventName, element, cursor, position, moveCursor, event, options, }: TriggerProps<T>): JSX.Element;
export {};
