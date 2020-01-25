"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getIndex = exports.getItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// DEVELOPMENT
// import './react-custom-flag-select.css';
// import STYLES from './react-custom-flag-select.css.json';
// BUILD PRODUCTION
var STYLES = {
  "ellipsis": "react-custom-flag-select__ellipsis___1ZnQ3",
  "select__button": "react-custom-flag-select__select__button___15AP2",
  "select__wrapper": "react-custom-flag-select__select__wrapper___1R93I",
  "disabled": "react-custom-flag-select__disabled___2j0z7",
  "select__input": "react-custom-flag-select__select__input___14Lze",
  "select__buttonWrapper": "react-custom-flag-select__select__buttonWrapper___12YOr",
  "select__searchInputWrapper": "react-custom-flag-select__select__searchInputWrapper___2YwS_",
  "select__searchInputSearchIcon": "react-custom-flag-select__select__searchInputSearchIcon___2oJfw",
  "select__searchInputRemoveIcon": "react-custom-flag-select__select__searchInputRemoveIcon___2Fd43",
  "select__searchInput": "react-custom-flag-select__select__searchInput___3Q6TN",
  "select__container": "react-custom-flag-select__select__container___2FIjR",
  "select__options-item": "react-custom-flag-select__select__options-item___3_6R4",
  "select__options-item-show-cursor": "react-custom-flag-select__select__options-item-show-cursor___24_5-",
  "select__no-mouse": "react-custom-flag-select__select__no-mouse___3ka1G",
  "select__hover-active": "react-custom-flag-select__select__hover-active___1ECCY",
  "active": "react-custom-flag-select__active___2SYE9",
  "select__options-container-animate": "react-custom-flag-select__select__options-container-animate___zn9Fe",
  "show": "react-custom-flag-select__show___1cXxR",
  "select__options-container": "react-custom-flag-select__select__options-container___1TPJG",
  "select__dropdown": "react-custom-flag-select__select__dropdown___Pf01k",
  "select__dropdown-icon": "react-custom-flag-select__select__dropdown-icon___3KppP",
  "select__selector": "react-custom-flag-select__select__selector___1JJ_x",
  "select__dropdown-flag": "react-custom-flag-select__select__dropdown-flag___4-6D7",
  "select__dropdown-name": "react-custom-flag-select__select__dropdown-name___TxNpJ",
  "showArrow": "react-custom-flag-select__showArrow___2E92p",
  "select__dropdown-icon-container": "react-custom-flag-select__select__dropdown-icon-container___1hWQW"
};
var TYPE = 'select';
var keyCodeEsc = 27;
var keyCodeDown = 40;
var keyCodeUp = 38;
var keyCodeEnter = 13;
var selectKeyList = [keyCodeEsc, keyCodeDown, keyCodeUp, keyCodeEnter];
var globalVariableIsFocusing = false;
var globalVariableIsCorrected = false;
var globalVariableCurrentFocus = null;
var globalVariableTypingTimeout = null;

var getItem = function getItem(list, value) {
  var res = null;

  if (list.length) {
    for (var i = 0; i < list.length; i += 1) {
      if (list[i].id === value) {
        res = list[i];
        break;
      }
    }
  }

  return res;
};

exports.getItem = getItem;

var getIndex = function getIndex(list, value) {
  var key = -1;

  for (var i = 0; i < list.length; i += 1) {
    if (list[i].id === value) {
      key = i;
      break;
    }
  }

  return key;
};

exports.getIndex = getIndex;
var DEFAULT_ID = (0, _utils.getRandomId)();
var Index = (0, _react.memo)(function (_ref) {
  var _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === void 0 ? null : _ref$tabIndex,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? DEFAULT_ID : _ref$id,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$showSearch = _ref.showSearch,
      showSearch = _ref$showSearch === void 0 ? false : _ref$showSearch,
      _ref$keyword = _ref.keyword,
      keyword = _ref$keyword === void 0 ? '' : _ref$keyword,
      _ref$showArrow = _ref.showArrow,
      showArrow = _ref$showArrow === void 0 ? true : _ref$showArrow,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$optionList = _ref.optionList,
      optionList = _ref$optionList === void 0 ? [] : _ref$optionList,
      _ref$classNameWrapper = _ref.classNameWrapper,
      classNameWrapper = _ref$classNameWrapper === void 0 ? '' : _ref$classNameWrapper,
      _ref$classNameContain = _ref.classNameContainer,
      classNameContainer = _ref$classNameContain === void 0 ? '' : _ref$classNameContain,
      _ref$classNameSelect = _ref.classNameSelect,
      classNameSelect = _ref$classNameSelect === void 0 ? '' : _ref$classNameSelect,
      _ref$classNameOptionL = _ref.classNameOptionListItem,
      classNameOptionListItem = _ref$classNameOptionL === void 0 ? '' : _ref$classNameOptionL,
      _ref$classNameOptionL2 = _ref.classNameOptionListContainer,
      classNameOptionListContainer = _ref$classNameOptionL2 === void 0 ? '' : _ref$classNameOptionL2,
      _ref$classNameDropdow = _ref.classNameDropdownIconOptionListItem,
      classNameDropdownIconOptionListItem = _ref$classNameDropdow === void 0 ? '' : _ref$classNameDropdow,
      _ref$customStyleWrapp = _ref.customStyleWrapper,
      customStyleWrapper = _ref$customStyleWrapp === void 0 ? {} : _ref$customStyleWrapp,
      _ref$customStyleConta = _ref.customStyleContainer,
      customStyleContainer = _ref$customStyleConta === void 0 ? {} : _ref$customStyleConta,
      _ref$customStyleSelec = _ref.customStyleSelect,
      customStyleSelect = _ref$customStyleSelec === void 0 ? {} : _ref$customStyleSelec,
      _ref$customStyleOptio = _ref.customStyleOptionListItem,
      customStyleOptionListItem = _ref$customStyleOptio === void 0 ? {} : _ref$customStyleOptio,
      _ref$customStyleOptio2 = _ref.customStyleOptionListContainer,
      customStyleOptionListContainer = _ref$customStyleOptio2 === void 0 ? {} : _ref$customStyleOptio2,
      _ref$selectHtml = _ref.selectHtml,
      selectHtml = _ref$selectHtml === void 0 ? null : _ref$selectHtml,
      _ref$selectOptionList = _ref.selectOptionListItemHtml,
      selectOptionListItemHtml = _ref$selectOptionList === void 0 ? null : _ref$selectOptionList,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$onBlur = _ref.onBlur,
      onBlur = _ref$onBlur === void 0 ? null : _ref$onBlur,
      _ref$onFocus = _ref.onFocus,
      onFocus = _ref$onFocus === void 0 ? null : _ref$onFocus,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? null : _ref$onClick;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)(String(value)),
      _useState4 = _slicedToArray(_useState3, 2),
      internalValue = _useState4[0],
      setInternalValue = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      keycodeList = _useState6[0],
      setKeycodeList = _useState6[1];

  var stateKeyword = (0, _react.useState)(keyword);

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isTyping = _useState8[0],
      setIsTyping = _useState8[1];

  var $wrapper = (0, _react.useRef)(null);
  var $itemsWrapper = (0, _react.useRef)(null);
  var $searchInputWrapper = (0, _react.useRef)(null);
  var $searchInput = (0, _react.useRef)(null);
  var $itemsRef = [];

  if (optionList.length) {
    for (var i = 0; i < optionList.length; i += 1) {
      $itemsRef.push((0, _react.useRef)(null));
    }
  }

  var filteredOptionList = (0, _react.useMemo)(function () {
    var res = optionList;

    if (res.length) {
      if (stateKeyword[0]) {
        res = optionList.filter(function (i) {
          return i.name.toLowerCase().includes(stateKeyword[0].toLowerCase());
        });
      }
    }

    return res;
  }, [stateKeyword[0], optionList]);
  var handleOnSearch = (0, _react.useCallback)(function (e) {
    stateKeyword[1](e.target.value);
  }, []);
  var handleOnSearchKeyDown = (0, _react.useCallback)(function (e) {
    var keyCode = e.keyCode;
    var direction = getDirection(keyCode);

    if (selectKeyList.indexOf(keyCode) !== -1) {
      e.preventDefault();
      handleOnKeyDown(keyCode);
    } else if (keyCode === 32) {
      // space
      stateKeyword[1]("".concat(stateKeyword[0], " "));
      e.preventDefault();
    }

    scroll(direction);
  }, [filteredOptionList]);
  (0, _react.useEffect)(function () {
    if (show && showSearch) {
      globalVariableCurrentFocus = 0;
      scroll('up');
      addActive();
    }
  }, [stateKeyword[0]]);
  (0, _react.useEffect)(function () {
    if (show) {
      if (showSearch) {
        $searchInput.current.focus();
      }
    }

    resetCurrentFocus();
  }, [show]);
  var handleOnBlur = (0, _react.useCallback)(function (e) {
    if (onBlur) {
      onBlur(e);
    }
  }, [internalValue]);
  var handleOnFocus = (0, _react.useCallback)(function (e) {
    if (onFocus) {
      onFocus(e);
    }
  }, []);
  var handleOnClick = (0, _react.useCallback)(function (e) {
    if (onClick) {
      onClick(e);
    }
  }, []);
  var handleOnChange = (0, _react.useCallback)(function (val, e) {
    if (disabled || $wrapper === null) {
      return;
    }

    setShow(!show);
    setInternalValue(val);
    onChange && onChange(val, e);
  }, [show]);
  /* istanbul ignore next because of https://github.com/airbnb/enzyme/issues/441 && https://github.com/airbnb/enzyme/blob/master/docs/future.md */

  (0, _react.useEffect)(function () {
    if ($wrapper === null) {
      return;
    }

    window.addEventListener('mousedown', pageClick);
    window.addEventListener('touchstart', pageClick);

    if (tabIndex) {
      $wrapper.current.setAttribute('tabindex', String(tabIndex));
    }

    if (id) {
      $wrapper.current.setAttribute('id', String(id));
    }

    return function () {
      window.removeEventListener('mousedown', pageClick);
      window.removeEventListener('touchstart', pageClick);
      $wrapper.current.removeEventListener('keydown', onKeyDown);
    };
  }, []);
  /* istanbul ignore next because of https://github.com/airbnb/enzyme/issues/441 && https://github.com/airbnb/enzyme/blob/master/docs/future.md */

  var pageClick = (0, _react.useCallback)(function (e) {
    if ($wrapper === null || $wrapper.current.contains(e.target)) {
      return;
    }

    if (globalVariableIsFocusing) {
      handleOnBlur(e);
      globalVariableIsFocusing = false;
    }

    setShow(false);
  }, []);
  /* istanbul ignore next because of https://github.com/airbnb/enzyme/issues/441 && https://github.com/airbnb/enzyme/blob/master/docs/future.md */

  var resetCurrentFocus = (0, _react.useCallback)(function () {
    globalVariableCurrentFocus = getIndex(optionList, internalValue);
    scroll();
  }, [internalValue]);
  /* istanbul ignore next because of https://github.com/airbnb/enzyme/issues/441 && https://github.com/airbnb/enzyme/blob/master/docs/future.md */

  var setTimeoutTyping = (0, _react.useCallback)(function () {
    if (globalVariableTypingTimeout) {
      clearTimeout(globalVariableTypingTimeout);
    }

    globalVariableTypingTimeout = setTimeout(function () {
      setKeycodeList([]);
    }, 250);
  }, []);
  /* istanbul ignore next because of https://github.com/airbnb/enzyme/issues/441 && https://github.com/airbnb/enzyme/blob/master/docs/future.md */

  var scroll = (0, _react.useCallback)(function () {
    var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    if ($itemsWrapper && $itemsWrapper.current && $itemsWrapper.current.children) {
      var $children = $itemsWrapper.current.children;
      var containerHeight = $itemsWrapper.current.offsetHeight;
      var containerScrollTop = $itemsWrapper.current.scrollTop;

      if (!$children[globalVariableCurrentFocus]) {
        return;
      }

      var itemHeight = $children[globalVariableCurrentFocus].offsetHeight;

      if (direction) {
        if (direction === 'loop') {
          $itemsWrapper.current.scrollTop = $children.length * itemHeight;
          return;
        }

        if (direction === 'down') {
          var bound = containerScrollTop + containerHeight;
          var heightItems = globalVariableCurrentFocus * itemHeight;
          var heightContainer = bound - itemHeight;

          if (heightItems >= heightContainer) {
            var offset = Math.abs(heightItems - heightContainer - itemHeight);

            if (offset >= 0 && !globalVariableIsCorrected) {
              $itemsWrapper.current.scrollTop = containerScrollTop + itemHeight - offset;
              globalVariableIsCorrected = true;
            } else {
              $itemsWrapper.current.scrollTop = containerScrollTop + itemHeight;
            }
          }
        }

        if (direction === 'up') {
          globalVariableIsCorrected = false;

          if (globalVariableCurrentFocus * itemHeight <= containerScrollTop) {
            $itemsWrapper.current.scrollTop = globalVariableCurrentFocus * itemHeight;
          }
        }
      } else {
        globalVariableIsCorrected = false;
        $itemsWrapper.current.scrollTop = globalVariableCurrentFocus * itemHeight;
      }
    }
  }, []);
  var handleOnItemClick = (0, _react.useCallback)(function (v, e) {
    handleOnChange(v, e);
    stateKeyword[1]('');
  }, [show]);
  var handleOnItemMouseOver = (0, _react.useCallback)(function (index) {
    globalVariableCurrentFocus = index;
    addActive();
  }, []);
  var handleOnItemMouseMove = (0, _react.useCallback)(function () {
    setIsTyping(false);
  }, []);
  var handleOnItemMouseOut = (0, _react.useCallback)(function () {
    removeActive();
  }, []);
  var addActive = (0, _react.useCallback)(function () {
    if (!$itemsRef) return;
    removeActive();
    if (globalVariableCurrentFocus === null) return;
    if (globalVariableCurrentFocus >= $itemsRef.length) globalVariableCurrentFocus = 0;
    if (globalVariableCurrentFocus < 0) globalVariableCurrentFocus = $itemsRef.length - 1;
    /* istanbul ignore next because it won't happen */

    if (!$itemsRef[globalVariableCurrentFocus].current) {
      return;
    }

    $itemsRef[globalVariableCurrentFocus].current.className += " ".concat(STYLES["".concat(TYPE, "__hover-active")]);
  }, []);
  var removeActive = (0, _react.useCallback)(function () {
    for (var _i2 = 0; _i2 < $itemsRef.length; _i2 += 1) {
      if (!$itemsRef[_i2]) {
        break;
      }

      if ($itemsRef[_i2] && $itemsRef[_i2].current) {
        $itemsRef[_i2].current.className = $itemsRef[_i2].current.className.replace(STYLES["".concat(TYPE, "__hover-active")], '');
      }
    }
  }, []);
  var getDirection = (0, _react.useCallback)(function (keyCode) {
    switch (keyCode) {
      case keyCodeUp:
        return 'up';

      case keyCodeDown:
        return 'down';

      default:
        return undefined;
    }
  }, []);
  var handleOnKeyDown = (0, _react.useCallback)(function (keyCode) {
    if (keyCode === keyCodeEsc) {
      setShow(false);
      resetCurrentFocus();
      return;
    }

    if (keyCode === keyCodeDown) {
      globalVariableCurrentFocus += 1;

      if (globalVariableCurrentFocus > filteredOptionList.length - 1) {
        globalVariableCurrentFocus = 0;
        scroll('up');
      }

      addActive();
    } else if (keyCode === keyCodeUp) {
      globalVariableCurrentFocus -= 1;

      if (globalVariableCurrentFocus < 0) {
        globalVariableCurrentFocus = filteredOptionList.length - 1;
        scroll('loop');
      }

      addActive();
    } else if (keyCode === keyCodeEnter) {
      if (globalVariableCurrentFocus > -1) {
        if ($itemsWrapper && $itemsWrapper.current && $itemsWrapper.current.children) {
          var $children = $itemsWrapper.current.children;

          if ($children[globalVariableCurrentFocus]) {
            $children[globalVariableCurrentFocus].click();
          } else {
            return;
          }
        }
      }
    }
  }, [filteredOptionList]);
  /* istanbul ignore next because of https://github.com/airbnb/enzyme/issues/441 && https://github.com/airbnb/enzyme/blob/master/docs/future.md */

  var onKeyDown = (0, _react.useCallback)(function (e) {
    if (showSearch) {
      return;
    }

    setIsTyping(true);

    if (e.preventDefault) {
      e.preventDefault();
    }

    if (!show) {
      return;
    }

    globalVariableCurrentFocus = globalVariableCurrentFocus === null ? getIndex(filteredOptionList, String(value)) : globalVariableCurrentFocus;
    var keyCode = e.keyCode;
    var direction = getDirection(keyCode);

    if (selectKeyList.indexOf(keyCode) !== -1) {
      handleOnKeyDown(keyCode);
    } else {
      setTimeoutTyping();
      var newkeyCodeList = [].concat(_toConsumableArray(keycodeList), [keyCode]);
      var str = String.fromCharCode.apply(String, _toConsumableArray(newkeyCodeList)).toLowerCase();
      var index = -1;
      filteredOptionList.forEach(function (i, k) {
        var name = i.name;

        if (name.toLowerCase().startsWith(str)) {
          if (index === -1) {
            index = k;
          }
        }
      });

      if (index !== -1) {
        globalVariableCurrentFocus = index;
        addActive();
      }

      setKeycodeList(newkeyCodeList);
    }

    scroll(direction);
    return globalVariableCurrentFocus;
  }, [show, value, keycodeList]);
  (0, _react.useEffect)(function () {
    if (show && $wrapper) {
      $wrapper.current.addEventListener('keydown', onKeyDown);
    }

    return function () {
      $wrapper.current.removeEventListener('keydown', onKeyDown);
    };
  }, [show, value, keycodeList]);
  (0, _react.useEffect)(function () {
    setInternalValue(String(value));
  }, [value]);
  var wrapperClass = (0, _utils.cx)(classNameWrapper, STYLES["".concat(TYPE, "__wrapper")], disabled && STYLES['disabled']);
  var containerClass = (0, _utils.cx)(classNameContainer, STYLES["".concat(TYPE, "__container")], show && STYLES['show']);
  var inputClass = (0, _utils.cx)(STYLES["".concat(TYPE, "__input")]);
  var selectClass = (0, _utils.cx)(classNameSelect, STYLES["".concat(TYPE, "__buttonWrapper")], STYLES['ellipsis']);
  var selectOptionListContainerClass = (0, _utils.cx)(classNameOptionListContainer, STYLES["".concat(TYPE, "__options-container")], show && STYLES['show'], animate && STYLES["".concat(TYPE, "__options-container-animate")]);
  var selectOptionListItemClass = (0, _utils.cx)(!isTyping && STYLES["".concat(TYPE, "__options-item-show-cursor")], classNameOptionListItem, STYLES["".concat(TYPE, "__options-item")]);
  var dropdownIconClass = (0, _utils.cx)(classNameDropdownIconOptionListItem, STYLES["".concat(TYPE, "__dropdown-icon")], showArrow && STYLES['showArrow']);
  var optionListHtml;
  var item = getItem(optionList, String(value));

  if (filteredOptionList.length) {
    if (selectOptionListItemHtml) {
      optionListHtml = selectOptionListItemHtml;
    } else {
      optionListHtml = filteredOptionList.map(function (i, k) {
        return _react["default"].createElement(Option, {
          key: k,
          index: k,
          id: "react-custom-flag-select__select_option-".concat(i.id),
          refItem: $itemsRef[k],
          className: String(i.id) === String(value) ? "".concat(selectOptionListItemClass, " ").concat(STYLES['active']) : "".concat(selectOptionListItemClass),
          item: i,
          customStyleOptionListItem: customStyleOptionListItem,
          onClick: handleOnItemClick,
          show: show,
          onMouseOver: handleOnItemMouseOver,
          onMouseMove: handleOnItemMouseMove,
          onMouseOut: handleOnItemMouseOut
        });
      });
    }
  }

  var selectorHtml = selectHtml;
  var flagHtml;

  if (item.flag) {
    flagHtml = _react["default"].createElement("div", {
      className: STYLES['select__dropdown-flag']
    }, _react["default"].createElement("img", {
      id: "displayFlag",
      style: {
        width: '100%',
        height: '100%',
        verticalAlign: 'middle'
      }
    }));
  }

  if (!selectorHtml) {
    selectorHtml = _react["default"].createElement("div", {
      className: STYLES['select__dropdown']
    }, flagHtml, "\xA0", _react["default"].createElement("div", {
      className: "".concat(STYLES['select__dropdown-name'], " ").concat(STYLES['ellipsis'])
    }, _react["default"].createElement("div", null, item.displayText), "\xA0", _react["default"].createElement("div", {
      className: dropdownIconClass
    }, "\xA0")));
  }

  return _react["default"].createElement("div", {
    ref: $wrapper,
    id: STYLES["".concat(TYPE, "__wrapper")],
    className: wrapperClass,
    style: customStyleWrapper
  }, _react["default"].createElement("div", {
    className: containerClass,
    style: customStyleContainer
  }, _react["default"].createElement("input", {
    id: id,
    name: name,
    type: "hidden",
    value: value,
    className: inputClass,
    onChange: function onChange() {}
  }), _react["default"].createElement("div", {
    className: selectClass,
    style: customStyleSelect
  }, _react["default"].createElement("button", {
    type: "button",
    className: STYLES["".concat(TYPE, "__button")],
    onClick: function onClick(e) {
      handleOnClick(e);

      if (!disabled) {
        if ($searchInputWrapper.current) {
          if ($searchInputWrapper.current.contains(e.target)) {
            setShow(true);
            return;
          }
        }

        setShow(!show);
      }
    },
    onFocus: handleOnFocus,
    onBlur: handleOnBlur
  }, _react["default"].createElement("div", {
    className: STYLES["".concat(TYPE, "__selector")]
  }, selectorHtml))), _react["default"].createElement("div", {
    className: selectOptionListContainerClass
  }, showSearch && _react["default"].createElement("div", {
    ref: $searchInputWrapper,
    style: _objectSpread({}, customStyleOptionListContainer, {
      overflow: 'hidden'
    })
  }, _react["default"].createElement("div", {
    className: STYLES["".concat(TYPE, "__searchInputWrapper")]
  }, _react["default"].createElement("svg", {
    className: STYLES["".concat(TYPE, "__searchInputSearchIcon")],
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24"
  }, _react["default"].createElement("path", {
    fill: "#cdcdcd",
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }), _react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  })), _react["default"].createElement("input", {
    className: STYLES["".concat(TYPE, "__searchInput")],
    ref: $searchInput,
    value: stateKeyword[0],
    onChange: handleOnSearch,
    onKeyDown: handleOnSearchKeyDown
  }), stateKeyword[0] && _react["default"].createElement("svg", {
    className: STYLES["".concat(TYPE, "__searchInputRemoveIcon")],
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    onClick: function onClick() {
      stateKeyword[1]('');
      $searchInput.current.focus();
    }
  }, _react["default"].createElement("path", {
    fill: "#cdcdcd",
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), _react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  })))), _react["default"].createElement("div", {
    ref: $itemsWrapper,
    style: customStyleOptionListContainer
  }, optionListHtml))));
});
var Option = (0, _react.memo)(function (_ref2) {
  var _ref2$index = _ref2.index,
      index = _ref2$index === void 0 ? -1 : _ref2$index,
      _ref2$refItem = _ref2.refItem,
      refItem = _ref2$refItem === void 0 ? null : _ref2$refItem,
      _ref2$id = _ref2.id,
      id = _ref2$id === void 0 ? '' : _ref2$id,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      item = _ref2.item,
      _ref2$customStyleOpti = _ref2.customStyleOptionListItem,
      customStyleOptionListItem = _ref2$customStyleOpti === void 0 ? {} : _ref2$customStyleOpti,
      _ref2$onClick = _ref2.onClick,
      onClick = _ref2$onClick === void 0 ? function () {} : _ref2$onClick,
      _ref2$onMouseOver = _ref2.onMouseOver,
      onMouseOver = _ref2$onMouseOver === void 0 ? function () {} : _ref2$onMouseOver,
      _ref2$onMouseMove = _ref2.onMouseMove,
      onMouseMove = _ref2$onMouseMove === void 0 ? function () {} : _ref2$onMouseMove,
      _ref2$onMouseOut = _ref2.onMouseOut,
      onMouseOut = _ref2$onMouseOut === void 0 ? function () {} : _ref2$onMouseOut,
      show = _ref2.show;
  var handleOnClick = (0, _react.useCallback)(function (e) {
    onClick(item.id, e);
  }, [show, item]);
  var handleOnMouseOver = (0, _react.useCallback)(function () {
    onMouseOver(index);
  }, []);
  var handleOnMouseMove = (0, _react.useCallback)(function () {
    onMouseMove();
  }, []);
  var handleOnMouseOut = (0, _react.useCallback)(function () {
    onMouseOut();
  }, []);
  return _react["default"].createElement("div", {
    ref: refItem,
    onMouseOver: handleOnMouseOver,
    onMouseMove: handleOnMouseMove,
    onMouseOut: handleOnMouseOut,
    className: className,
    style: customStyleOptionListItem,
    onClick: handleOnClick
  }, item.flag ? _react["default"].createElement("div", {
    className: STYLES["".concat(TYPE, "__dropdown-flag")]
  }, _react["default"].createElement("img", {
    src: item.flag,
    style: {
      width: '100%',
      height: '100%',
      verticalAlign: 'middle'
    }
  })) : '', _react["default"].createElement("div", {
    className: "".concat(STYLES['select__dropdown-name'], " ").concat(STYLES['ellipsis'])
  }, _react["default"].createElement("div", null, item.displayText ? item.displayText : item.name)));
});
var _default = Index;
exports["default"] = _default;