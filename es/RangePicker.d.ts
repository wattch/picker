import * as React from 'react';
import type { DisabledTimes, PanelMode, RangeValue, EventValue } from './interface';
import type { PickerBaseProps, PickerDateProps, PickerTimeProps, PickerRefConfig } from './Picker';
import type { SharedTimeProps } from './panels/TimePanel';
export type RangeType = 'start' | 'end';
export type RangeInfo = {
    range: RangeType;
};
export type RangeDateRender<DateType> = (currentDate: DateType, today: DateType, info: RangeInfo) => React.ReactNode;
export type RangePickerSharedProps<DateType> = {
    id?: string;
    value?: RangeValue<DateType>;
    defaultValue?: RangeValue<DateType>;
    defaultPickerValue?: [DateType, DateType];
    placeholder?: [string, string];
    disabled?: boolean | [boolean, boolean];
    disabledTime?: (date: EventValue<DateType>, type: RangeType) => DisabledTimes;
    ranges?: Record<string, Exclude<RangeValue<DateType>, null> | (() => Exclude<RangeValue<DateType>, null>)>;
    separator?: React.ReactNode;
    allowEmpty?: [boolean, boolean];
    mode?: [PanelMode, PanelMode];
    onChange?: (values: RangeValue<DateType>, formatString: [string, string], isNow?: [boolean, boolean]) => void;
    onCalendarChange?: (values: RangeValue<DateType>, formatString: [string, string], info: RangeInfo, isNow?: [boolean, boolean]) => void;
    onPanelChange?: (values: RangeValue<DateType>, modes: [PanelMode, PanelMode]) => void;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
    onMouseUp?: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onOk?: (dates: RangeValue<DateType>) => void;
    direction?: 'ltr' | 'rtl';
    autoComplete?: string;
    /**
     * Allows a user to type "now" in to the input field and the date will be set to generateConfig.getNow().
     * If a user clicks a date the now will be reset.
     *
     */
    allowNowValue?: [boolean, boolean];
    /**
     * Allows a user to set the value to be "now" by clicking a button or some outside event. A user must manage this state to determine if it is "now" or not. The component does not verify that the values passed in are actually "now", this only sets the text.
     */
    isNowValue?: [boolean, boolean];
    /** @private Internal control of active picker. Do not use since it's private usage */
    activePickerIndex?: 0 | 1;
    dateRender?: RangeDateRender<DateType>;
    panelRender?: (originPanel: React.ReactNode) => React.ReactNode;
};
type OmitPickerProps<Props> = Omit<Props, 'value' | 'defaultValue' | 'defaultPickerValue' | 'placeholder' | 'disabled' | 'disabledTime' | 'showToday' | 'showTime' | 'mode' | 'onChange' | 'onSelect' | 'onPanelChange' | 'pickerValue' | 'onPickerValueChange' | 'onOk' | 'dateRender'>;
type RangeShowTimeObject<DateType> = Omit<SharedTimeProps<DateType>, 'defaultValue'> & {
    defaultValue?: DateType[];
};
export type RangePickerBaseProps<DateType> = {} & RangePickerSharedProps<DateType> & OmitPickerProps<PickerBaseProps<DateType>>;
export type RangePickerDateProps<DateType> = {
    showTime?: boolean | RangeShowTimeObject<DateType>;
} & RangePickerSharedProps<DateType> & OmitPickerProps<PickerDateProps<DateType>>;
export type RangePickerTimeProps<DateType> = {
    order?: boolean;
} & RangePickerSharedProps<DateType> & OmitPickerProps<PickerTimeProps<DateType>>;
export type RangePickerProps<DateType> = RangePickerBaseProps<DateType> | RangePickerDateProps<DateType> | RangePickerTimeProps<DateType>;
declare class RangePicker<DateType> extends React.Component<RangePickerProps<DateType>> {
    pickerRef: React.RefObject<PickerRefConfig>;
    focus: () => void;
    blur: () => void;
    render(): JSX.Element;
}
export default RangePicker;
