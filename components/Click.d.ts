/// <reference types="react" />
import { TestItemExtraProps, TestItemProps } from "./Test";
export interface ClickProps extends TestItemProps {
    options?: TestItemExtraProps;
}
export declare function Click({ options, element, cursor, position, moveCursor, }: ClickProps): JSX.Element;
