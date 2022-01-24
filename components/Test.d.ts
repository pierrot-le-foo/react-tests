import React, { ComponentType } from "react";
interface TestProps {
    Component: ComponentType;
    props?: Record<string, any>;
    label?: string;
    tests: any[];
    autoStart?: boolean;
}
export interface TestItemProps {
    element: HTMLElement;
    cursor: number;
    position: number;
    moveCursor(): void;
}
export interface TestItemExtraProps {
    target?: string;
    label?: string;
    root?: string;
}
declare function Test({ tests, Component, props, label, autoStart, }: TestProps): JSX.Element;
declare namespace Test {
    var hasType: (type: string) => ({ element, cursor, position, moveCursor, }: {
        element: HTMLElement;
        cursor: number;
        position: number;
        moveCursor(): void;
    }) => JSX.Element;
    var hasText: (text: string | RegExp, extraProps?: TestItemExtraProps | undefined) => (props: TestItemProps) => JSX.Element;
    var click: (extraProps?: TestItemExtraProps | undefined) => (props: TestItemProps) => JSX.Element;
    var wait: (milliseconds: number) => ({ cursor, position, moveCursor, }: {
        cursor: number;
        position: number;
        moveCursor(): void;
    }) => JSX.Element;
    var trigger: (eventName: string, event: React.SyntheticEvent<Element, Event>, extraProps?: TestItemExtraProps | undefined) => (props: TestItemProps) => JSX.Element;
}
export default Test;
