import React, { ComponentType } from "react";
interface TestProps {
    Component: ComponentType;
    props?: Record<string, any>;
    label?: string;
    tests: any[];
    autoStart?: boolean;
}
declare function Test({ tests, Component, props, label, autoStart, }: TestProps): JSX.Element;
declare namespace Test {
    var hasType: (type: string) => ({ element, cursor, position, moveCursor, }: {
        element: HTMLElement;
        cursor: number;
        position: number;
        moveCursor(): void;
    }) => JSX.Element;
    var hasText: (text: string | RegExp) => ({ element, cursor, position, moveCursor, }: {
        element: HTMLElement;
        cursor: number;
        position: number;
        moveCursor(): void;
    }) => JSX.Element;
    var click: (selector?: string, { parent, label }?: {
        parent?: string;
        label?: string;
    }) => ({ element, cursor, position, moveCursor, }: {
        element: HTMLElement;
        cursor: number;
        position: number;
        moveCursor(): void;
    }) => JSX.Element;
    var wait: (milliseconds: number) => ({ cursor, position, moveCursor, }: {
        cursor: number;
        position: number;
        moveCursor(): void;
    }) => JSX.Element;
    var trigger: (eventName: string, event: React.SyntheticEvent<Element, Event>, selector?: string | undefined, { parent, label }?: {
        parent?: string;
        label?: string;
    }) => ({ element, cursor, position, moveCursor, }: {
        element: HTMLElement;
        cursor: number;
        position: number;
        moveCursor(): void;
    }) => JSX.Element;
    var select: (selector?: string) => {
        hasText(text?: string): ({ element, cursor, position, moveCursor, }: {
            element: HTMLElement;
            cursor: number;
            position: number;
            moveCursor(): void;
        }) => JSX.Element;
    };
}
export default Test;
