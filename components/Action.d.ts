import { SyntheticEvent } from "react";
import { TestItemExtraProps } from "./Test";
interface ActionProps<Element> {
    eventName: string;
    run(element?: HTMLElement): Promise<boolean>;
    cursor: number;
    position: number;
    moveCursor(): void;
    event: SyntheticEvent<Element>;
    element: HTMLElement;
    options?: TestItemExtraProps;
    delay?: number;
}
export default function Action<Element>({ eventName, cursor, position, event, element, run, moveCursor, options, delay, }: ActionProps<Element>): JSX.Element;
export {};
