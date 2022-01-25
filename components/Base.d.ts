import { ReactNode } from "react";
import { TestItemExtraProps } from "./Test";
declare type State = "iddle" | "running" | "ok" | "failed";
interface BaseProps {
    run(element?: HTMLElement): Promise<boolean>;
    cursor: number;
    position: number;
    moveCursor(): void;
    element: HTMLElement;
    options?: TestItemExtraProps;
    type: string;
    info?(props: {
        state: State;
        target?: HTMLElement;
    }): ReactNode;
    delay?: number;
}
export default function Base({ cursor, position, options, element, run, moveCursor, type, info, delay, }: BaseProps): JSX.Element;
export {};
