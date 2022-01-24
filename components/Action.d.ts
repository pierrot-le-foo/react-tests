import { SyntheticEvent } from "react";
import { TestItemExtraProps } from "./Test";
interface ActionProps {
    eventName: string;
    run(element?: HTMLElement): Promise<boolean>;
    cursor: number;
    position: number;
    moveCursor(): void;
    event: SyntheticEvent;
    element: HTMLElement;
    options?: TestItemExtraProps;
}
export default function Action({ eventName, cursor, position, event, element, run, moveCursor, options, }: ActionProps): JSX.Element;
export {};
