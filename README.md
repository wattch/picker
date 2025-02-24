⚠⚠️⚠️⚠⚠️⚠️️⚠⚠️⚠️️️

## Fork Changes

We have added custom functionality to the `2.7.*` tags as we currently do not support Ant v5 and Ant v4 references [rc-picker ~2.7.0 in the package.json](https://github.com/ant-design/ant-design/blob/fd9d689cda65a029da3a6f59abd7ef20698638b0/package.json#L142). The functionality includes:

- If start and end date and end date changes to be before start date, set start date to end date and keep focus in end date
  - rc-picker issue: (https://github.com/react-component/picker/issues/444)
  - Fork PR: https://github.com/wattch/picker/pull/10

In order to use this repository in our app we had to do two things:

1. Include the `lib/` and `es/` build files by updating `.gitignore`
2. Use the `overrides` functionality in our own app's `package.json`.
   ```json
   {
     "dependencies": {
       "rc-picker": "github:wattch/picker#v2.7.1" // INSERT CORRECT TAG
     },
     "overrides": {
       "rc-picker": "$rc-picker"
     }
   }
   ```

**Maintaining**:

In order to keep the fork in sync (even though no development from rc-picker is being added to <3.\* tags), we keep all of our code within the `wattch-master` branch. This is the default branch on the repository and correctly says it is out of sync with the fork's `master`.

To make changes/add features:

1. Checkout `wattch-master`
2. Create a PR with the changes **and include the build files** from `npm run build && npm run compile`
3. After PR merges we need to:
   - Bump the version in `package.json`
   - Push a new tag/create a new tag and a new release
     - The best way so far to do this is to create a new release in the Github UI and create a new tag with the release.

⚠⚠️⚠️⚠⚠️⚠️️⚠⚠️⚠️️️

# rc-picker

[![NPM version][npm-image]][npm-url] [![build status][github-actions-image]][github-actions-url] [![Codecov][codecov-image]][codecov-url] [![Dependencies][david-image]][david-url] [![DevDependencies][david-dev-image]][david-dev-url] [![npm download][download-image]][download-url] [![bundle size][bundlephobia-image]][bundlephobia-url]

[npm-image]: http://img.shields.io/npm/v/rc-picker.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-picker
[github-actions-image]: https://github.com/react-component/picker/workflows/CI/badge.svg
[github-actions-url]: https://github.com/react-component/picker/actions
[codecov-image]: https://img.shields.io/codecov/c/github/react-component/picker/master.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/react-component/picker/branch/master
[david-url]: https://david-dm.org/react-component/picker
[david-image]: https://david-dm.org/react-component/picker/status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/react-component/picker?type=dev
[david-dev-image]: https://david-dm.org/react-component/picker/dev-status.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/rc-picker.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-picker
[bundlephobia-url]: https://bundlephobia.com/result?p=rc-picker
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/rc-picker

## Live Demo

https://react-component.github.io/picker/

## Install

[![rc-picker](https://nodei.co/npm/rc-picker.png)](https://npmjs.org/package/rc-picker)

## Usage

```js
import Picker from 'rc-picker';
import 'rc-picker/assets/index.css';
import { render } from 'react-dom';

render(<Picker />, mountNode);
```

## API

### Picker

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| prefixCls | String | rc-picker | prefixCls of this component |
| className | String | '' | additional css class of root dom node |
| style | React.CSSProperties |  | additional style of root dom node |
| dropdownClassName | String | '' | additional className applied to dropdown |
| dropdownAlign | Object:alignConfig of [dom-align](https://github.com/yiminghe/dom-align) |  | value will be merged into placement's dropdownAlign config |
| popupStyle | React.CSSProperties |  | customize popup style |
| transitionName | String | '' | css class for animation |
| locale | Object | import from 'rc-picker/lib/locale/en_US' | rc-picker locale |
| inputReadOnly | Boolean | false | set input to read only |
| allowClear | Boolean | false | whether show clear button |
| autoFocus | Boolean | false | whether auto focus |
| showTime | Boolean \| Object | [showTime options](#showTime-options) | to provide an additional time selection |
| picker | time \| date \| week \| month \| year |  | control which kind of panel should be shown |
| format | String \| String[] | depends on whether you set timePicker and your locale | use to format/parse date(without time) value to/from input. When an array is provided, all values are used for parsing and first value for display |
| use12Hours | Boolean | false | 12 hours display mode |
| value | moment |  | current value like input's value |
| defaultValue | moment |  | defaultValue like input's defaultValue |
| open | Boolean | false | current open state of picker. controlled prop |
| suffixIcon | ReactNode |  | The custom suffix icon |
| clearIcon | ReactNode |  | The custom clear icon |
| prevIcon | ReactNode |  | The custom prev icon |
| nextIcon | ReactNode |  | The custom next icon |
| superPrevIcon | ReactNode |  | The custom super prev icon |
| superNextIcon | ReactNode |  | The custom super next icon |
| disabled | Boolean | false | whether the picker is disabled |
| placeholder | String |  | picker input's placeholder |
| getPopupContainer | function(trigger) |  | to set the container of the floating layer, while the default is to create a div element in body |
| onChange | Function(date: moment, dateString: string) |  | a callback function, can be executed when the selected time is changing |
| onOpenChange | Function(open:boolean) |  | called when open/close picker |
| onFocus | (event:React.FocusEvent\<HTMLInputElement>) => void |  | called like input's on focus |
| onBlur | (event:React.FocusEvent\<HTMLInputElement>) => void |  | called like input's on blur |
| onKeyDown | (event:React.KeyboardEvent\<HTMLInputElement>, preventDefault: () => void) => void |  | input on keydown event |
| direction | String: ltr or rtl |  | Layout direction of picker component, it supports RTL direction too. |

### PickerPanel

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| prefixCls | String | rc-picker | prefixCls of this component |
| className | String | '' | additional css class of root dom |
| style | React.CSSProperties |  | additional style of root dom node |
| locale | Object | import from 'rc-picker/lib/locale/en_US' | rc-picker locale |
| value | moment |  | current value like input's value |
| defaultValue | moment |  | defaultValue like input's defaultValue |
| defaultPickerValue | moment |  | Set default display picker view date |
| mode | time \| datetime \| date \| week \| month \| year \| decade |  | control which kind of panel |
| picker | time \| date \| week \| month \| year |  | control which kind of panel |
| tabIndex | Number | 0 | view [tabIndex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) |
| showTime | Boolean \| Object | [showTime options](#showTime-options) | to provide an additional time selection |
| showToday | Boolean | false | whether to show today button |
| disabledDate | Function(date:moment) => Boolean |  | whether to disable select of current date |
| dateRender | Function(currentDate:moment, today:moment) => React.Node |  | custom rendering function for date cells |
| monthCellRender | Function(currentDate:moment, locale:Locale) => React.Node |  | Custom month cell render method |
| renderExtraFooter | (mode) => React.Node |  | extra footer |
| onSelect | Function(date: moment) |  | a callback function, can be executed when the selected time |
| onPanelChange | Function(value: moment, mode) |  | callback when picker panel mode is changed |
| onMouseDown | (event:React.MouseEvent\<HTMLInputElement>) => void |  | callback when executed onMouseDown event |
| direction | String: ltr or rtl |  | Layout direction of picker component, it supports RTL direction too. |

### RangePicker

| Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| prefixCls | String | rc-picker | prefixCls of this component |
| className | String | '' | additional css class of root dom |
| style | React.CSSProperties |  | additional style of root dom node |
| locale | Object | import from 'rc-picker/lib/locale/en_US' | rc-picker locale |
| value | moment |  | current value like input's value |
| defaultValue | moment |  | defaultValue like input's defaultValue |
| defaultPickerValue | moment |  | Set default display picker view date |
| separator | String | '~' | set separator between inputs |
| picker | time \| date \| week \| month \| year |  | control which kind of panel |
| placeholder | [String, String] |  | placeholder of date input |
| showTime | Boolean \| Object | [showTime options](#showTime-options) | to provide an additional time selection |
| showTime.defaultValue | [moment, moment] |  | to set default time of selected date |
| use12Hours | Boolean | false | 12 hours display mode |
| disabledTime | Function(date: moment, type:'start'\|'end'):Object |  |  | to specify the time that cannot be selected |
| ranges | { String \| [range: string]: moment[] } \| { [range: string]: () => moment[] } |  | preseted ranges for quick selection |
| format | String \| String[] | depends on whether you set timePicker and your locale | use to format/parse date(without time) value to/from input. When an array is provided, all values are used for parsing and first value for display |
| allowEmpty | [Boolean, Boolean] |  | allow range picker clearing text |
| selectable | [Boolean, Boolean] |  | whether to selected picker |
| disabled | Boolean | false | whether the range picker is disabled |
| onChange | Function(value:[moment], formatString: [string, string]) |  | a callback function, can be executed when the selected time is changing |
| onCalendarChange | Function(value:[moment], formatString: [string, string], info: { range:'start'\|'end' }) |  | a callback function, can be executed when the start time or the end time of the range is changing |
| direction | String: ltr or rtl |  | Layout direction of picker component, it supports RTL direction too. |
| order | Boolean | true | (TimeRangePicker only) `false` to disable auto order |

### showTime-options

| Property            | Type    | Default | Description                        |
| ------------------- | ------- | ------- | ---------------------------------- |
| format              | String  |         | moment format                      |
| showHour            | Boolean | true    | whether show hour                  |
| showMinute          | Boolean | true    | whether show minute                |
| showSecond          | Boolean | true    | whether show second                |
| use12Hours          | Boolean | false   | 12 hours display mode              |
| hourStep            | Number  | 1       | interval between hours in picker   |
| minuteStep          | Number  | 1       | interval between minutes in picker |
| secondStep          | Number  | 1       | interval between seconds in picker |
| hideDisabledOptions | Boolean | false   | whether hide disabled options      |
| defaultValue        | moment  | null    | default initial value              |

## Development

```
npm install
npm start
```

## License

rc-picker is released under the MIT license.
