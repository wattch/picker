import * as React from 'react';
import type { GenerateConfig } from '../../generate';
import type { Locale, OnSelect } from '../../interface';
import type { SharedTimeProps } from '.';
export type BodyOperationRef = {
    onUpDown: (diff: number) => void;
};
export type TimeBodyProps<DateType> = {
    prefixCls: string;
    locale: Locale;
    generateConfig: GenerateConfig<DateType>;
    value?: DateType | null;
    onSelect: OnSelect<DateType>;
    activeColumnIndex: number;
    operationRef: React.MutableRefObject<BodyOperationRef | undefined>;
} & SharedTimeProps<DateType>;
declare function TimeBody<DateType>(props: TimeBodyProps<DateType>): JSX.Element;
export default TimeBody;
