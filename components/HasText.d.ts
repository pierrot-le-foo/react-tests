/// <reference types="react" />
import { TestItemExtraProps, TestItemProps } from "./Test";
interface HasTextProps extends TestItemProps {
    text: string | RegExp;
    options?: TestItemExtraProps;
}
export declare function HasText({ text, element, cursor, position, moveCursor, options, }: HasTextProps): JSX.Element;
export {};
