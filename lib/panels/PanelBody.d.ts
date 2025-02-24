import * as React from 'react';
import type { GenerateConfig } from '../generate';
import type { PanelMode } from '../interface';
export type PanelBodyProps<DateType> = {
    prefixCls: string;
    disabledDate?: (date: DateType) => boolean;
    onSelect: (value: DateType) => void;
    picker?: PanelMode;
    headerCells?: React.ReactNode;
    rowNum: number;
    colNum: number;
    baseDate: DateType;
    getCellClassName: (date: DateType) => Record<string, boolean | undefined>;
    getCellDate: (date: DateType, offset: number) => DateType;
    getCellText: (date: DateType) => React.ReactNode;
    getCellNode?: (date: DateType) => React.ReactNode;
    titleCell?: (date: DateType) => string;
    generateConfig: GenerateConfig<DateType>;
    prefixColumn?: (date: DateType) => React.ReactNode;
    rowClassName?: (date: DateType) => string;
};
export default function PanelBody<DateType>({ prefixCls, disabledDate, onSelect, picker, rowNum, colNum, prefixColumn, rowClassName, baseDate, getCellClassName, getCellText, getCellNode, getCellDate, generateConfig, titleCell, headerCells, }: PanelBodyProps<DateType>): JSX.Element;
