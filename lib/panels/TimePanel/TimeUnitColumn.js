"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _uiUtil = require("../../utils/uiUtil");
var _PanelContext = _interopRequireDefault(require("../../PanelContext"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function TimeUnitColumn(props) {
  var prefixCls = props.prefixCls,
    units = props.units,
    onSelect = props.onSelect,
    value = props.value,
    active = props.active,
    hideDisabledOptions = props.hideDisabledOptions;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var _React$useContext = React.useContext(_PanelContext.default),
    open = _React$useContext.open;
  var ulRef = (0, React.useRef)(null);
  var liRefs = (0, React.useRef)(new Map());
  var scrollRef = (0, React.useRef)();
  // `useLayoutEffect` here to avoid blink by duration is 0
  (0, React.useLayoutEffect)(function () {
    var li = liRefs.current.get(value);
    if (li && open !== false) {
      (0, _uiUtil.scrollTo)(ulRef.current, li.offsetTop, 120);
    }
  }, [value]);
  (0, React.useLayoutEffect)(function () {
    if (open) {
      var li = liRefs.current.get(value);
      if (li) {
        scrollRef.current = (0, _uiUtil.waitElementReady)(li, function () {
          (0, _uiUtil.scrollTo)(ulRef.current, li.offsetTop, 0);
        });
      }
    }
    return function () {
      var _scrollRef$current;
      (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.call(scrollRef);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("ul", {
    className: (0, _classnames.default)("".concat(prefixCls, "-column"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-column-active"), active)),
    ref: ulRef,
    style: {
      position: 'relative'
    }
  }, units.map(function (unit) {
    var _classNames2;
    if (hideDisabledOptions && unit.disabled) {
      return null;
    }
    return /*#__PURE__*/React.createElement("li", {
      key: unit.value,
      ref: function ref(element) {
        liRefs.current.set(unit.value, element);
      },
      className: (0, _classnames.default)(cellPrefixCls, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(cellPrefixCls, "-disabled"), unit.disabled), (0, _defineProperty2.default)(_classNames2, "".concat(cellPrefixCls, "-selected"), value === unit.value), _classNames2)),
      onClick: function onClick() {
        if (unit.disabled) {
          return;
        }
        onSelect(unit.value);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(cellPrefixCls, "-inner")
    }, unit.label));
  }));
}
var _default = TimeUnitColumn;
exports.default = _default;