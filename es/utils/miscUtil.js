export function leftPad(str, length) {
  var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var current = String(str);
  while (current.length < length) {
    current = "".concat(fill).concat(str);
  }
  return current;
}
export var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
export function toArray(val) {
  if (val === null || val === undefined) {
    return [];
  }
  return Array.isArray(val) ? val : [val];
}
export default function getDataOrAriaProps(props) {
  var retProps = {};
  Object.keys(props).forEach(function (key) {
    if ((key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role' || key === 'name') && key.substr(0, 7) !== 'data-__') {
      retProps[key] = props[key];
    }
  });
  return retProps;
}
export function getValue(values, index) {
  return values ? values[index] : null;
}
export function updateValues(values, value, index) {
  var newValues = [getValue(values, 0), getValue(values, 1)];
  newValues[index] = typeof value === 'function' ? value(newValues[index]) : value;
  if (!newValues[0] && !newValues[1]) {
    return null;
  }
  return newValues;
}