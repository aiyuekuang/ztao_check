'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./compenet/index');

var _index2 = _interopRequireDefault(_index);

var _shise = require('./compenet/shise');

var _shise2 = _interopRequireDefault(_shise);

var _shili = require('./compenet/shili');

var _shili2 = _interopRequireDefault(_shili);

require('./style/common.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_shili2.default, null), document.getElementById('root'));