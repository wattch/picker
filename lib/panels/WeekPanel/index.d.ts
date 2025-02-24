/// <reference types="react" />
import type { PanelSharedProps } from '../../interface';
export type WeekPanelProps<DateType> = PanelSharedProps<DateType>;
declare function WeekPanel<DateType>(props: WeekPanelProps<DateType>): JSX.Element;
export default WeekPanel;
