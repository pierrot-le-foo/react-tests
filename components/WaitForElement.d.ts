import { ComponentType } from "react";
interface WaitForElementProps {
    element: HTMLElement;
    selector: string;
    children: ComponentType<{
        element: HTMLElement;
    }>;
}
export declare function WaitForElement({ element, selector, children: Component, }: WaitForElementProps): JSX.Element;
export {};
