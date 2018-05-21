'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shise = require('./shise');

var _shise2 = _interopRequireDefault(_shise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var duo = './node_modules/ztao_check/duo.js';
//const duo 'duo.js';

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(arg) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, arg));

        _this.componentDidMount = function () {
            document.addEventListener('keyup', function (e) {
                switch (e.keyCode) {
                    case 87:
                        //上
                        _this.yidong(-1);
                        break;
                    case 83:
                        //下
                        _this.yidong(1);
                        break;
                    case 65:
                        //左
                        _this.yidong(2);
                        break;
                    case 68:
                        //右
                        _this.yidong(-2);
                        break;
                    default:
                        break;
                }
            });
        };

        _this.state = {
            img: '',
            ctx: null,
            yanse: '',
            sezhi: [],
            gao: '',
            kuan: '',
            anniu: true,
            touming: 1,
            xianshi1: true,
            xianshi2: true,
            guanbi: true,
            top: 0,
            left: 0,
            baidi: true
        };

        _this.yidong = function (num) {
            if (num == 1) {
                _this.setState({
                    top: _this.state.top + 1
                });
            } else if (num == -1) {
                _this.setState({
                    top: _this.state.top - 1
                });
            } else if (num == -2) {
                _this.setState({
                    left: _this.state.left + 1
                });
            } else {
                _this.setState({
                    left: _this.state.left - 1
                });
            }
        };

        _this.dealImage = function (file, w, fun) {
            var ready = new FileReader();
            /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
            ready.readAsDataURL(file);
            ready.onload = function (e) {
                var re = e.target.result;
                _this.canvasDataURL(re, w, fun);
            };
        };

        _this.canvasDataURL = function (re, w, fun) {
            var newImg = new Image();
            newImg.src = re;
            newImg.onload = function () {
                var canvas = document.getElementById("canvas");
                canvas.width = document.getElementById('ztao_kuan').clientWidth;
                canvas.height = newImg.height * (document.getElementById('ztao_kuan').clientWidth / newImg.width);
                _this.setState({
                    ctx: canvas.getContext("2d"),
                    kuan: document.getElementById('ztao_kuan').clientWidth,
                    gao: newImg.height * (document.getElementById('ztao_kuan').clientWidth / newImg.width),
                    anniu: false
                });
                _this.state.ctx.drawImage(newImg, 0, 0, canvas.width, canvas.height);
                var tu = _this.state.ctx.getImageData(0, 0, canvas.width, canvas.height);
                _this.yibu({ img: tu, sezhi: null, baidi: _this.state.baidi }, function (data) {
                    _this.state.ctx.putImageData(data, 0, 0);
                });
            };
        };

        _this.dianji = function (e) {
            var file = e.target.files[0];
            _this.dealImage(file, 500, function (base) {
                _this.setState({
                    img: base
                });
            });
        };

        _this.yanse = function (data) {
            var rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] / 255 + ')';
            _this.setState({
                yanse: rgba,
                sezhi: data,
                anniu: false
            });
        };

        _this.quchu = function () {
            var tu = _this.state.ctx.getImageData(0, 0, _this.state.kuan, _this.state.gao);
            _this.setState({
                anniu: true
            });
            _this.yibu({ img: tu, sezhi: _this.state.sezhi, baidi: _this.state.baidi }, function (data) {
                _this.state.ctx.putImageData(data, 0, 0);
            });
        };

        _this.huadong = function (e) {
            console.log(e.target.value);
            _this.setState({
                touming: e.target.value / 100
            });
        };

        _this.xianshi1 = function (e) {
            _this.setState({
                xianshi1: e.target.checked
            });
        };

        _this.xianshi2 = function (e) {
            _this.setState({
                xianshi2: e.target.checked
            });
        };

        _this.guanbi = function (e) {
            _this.setState({
                guanbi: !_this.state.guanbi
            });
        };

        _this.baidi = function (e) {
            _this.setState({
                baidi: !_this.state.baidi
            });
        };

        return _this;
    }

    _createClass(Index, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'yibu',
        value: function yibu(data, fun) {
            var worker = new Worker(duo);
            worker.onmessage = function (event) {
                fun(event.data);
            };
            worker.onerror = function (error) {
                console.log("Error:" + error.message);
            };
            worker.postMessage(data);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'ztao_warp', id: 'ztao_kuan' },
                this.state.guanbi ? _react2.default.createElement(
                    'div',
                    { className: 'ztao_caozuo' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ztao_caozuo_guanbi', onClick: this.guanbi },
                        'x'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ztao_btn' },
                        '\u6DFB\u52A0\u9AD8\u4FDD\u771F\u56FE\uFF1A',
                        _react2.default.createElement('input', { type: 'file', onChange: this.dianji }),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement('input', { type: 'checkbox', onChange: this.baidi, name: 'baidi', checked: this.state.baidi }),
                            '\u53BB\u9664\u767D\u5E95'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ztao_caozuo_yanse' },
                        '\u9009\u53D6\u9700\u8981\u53BB\u9664\u7684\u989C\u8272\uFF1A',
                        _react2.default.createElement('div', { className: 'ztao_sekuai', style: { background: this.state.yanse } }),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.quchu, disabled: this.state.anniu ? true : false },
                            '\u53BB\u9664'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ztao_touming' },
                        '\u8C03\u89E3\u9AD8\u4FDD\u771F\u900F\u660E\u5EA6\uFF1A',
                        _react2.default.createElement('input', { type: 'range', onChange: this.huadong, defaultValue: '100' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ztao_xianshi' },
                        '\u53BB\u9664/\u663E\u793A\u6A21\u5757\uFF1A',
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement('input', { type: 'checkbox', onChange: this.xianshi1, name: 'check', checked: this.state.xianshi1 }),
                            '\u9AD8\u4FDD\u771F'
                        ),
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement('input', { type: 'checkbox', onChange: this.xianshi2, name: 'check', checked: this.state.xianshi2 }),
                            '\u5207\u56FE'
                        )
                    )
                ) : null,
                this.state.guanbi ? null : _react2.default.createElement(
                    'div',
                    { className: 'ztao_caozuo_xiao', onClick: this.guanbi },
                    '\u6253',
                    _react2.default.createElement('br', null),
                    '\u5F00'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ztao_img',
                        style: { opacity: this.state.touming, display: this.state.xianshi1 ? "block" : "none", top: this.state.top, left: this.state.left } },
                    _react2.default.createElement(
                        _shise2.default,
                        { ctx: this.state.ctx, yanse: this.yanse, top: this.state.top, left: this.state.left },
                        _react2.default.createElement(
                            'canvas',
                            { id: 'canvas' },
                            '\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301'
                        )
                    )
                ),
                this.state.xianshi2 ? _react2.default.createElement(
                    'div',
                    { className: 'ztao_yemian' },
                    this.props.children
                ) : null
            );
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = Index;