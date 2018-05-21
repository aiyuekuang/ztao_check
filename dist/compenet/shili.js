'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _baner = require('../img/baner.jpg');

var _baner2 = _interopRequireDefault(_baner);

var _guanyu = require('../img/guanyu.png');

var _guanyu2 = _interopRequireDefault(_guanyu);

var _jiangzhang = require('../img/jiangzhang.png');

var _jiangzhang2 = _interopRequireDefault(_jiangzhang);

var _jiaohuan = require('../img/jiaohuan.png');

var _jiaohuan2 = _interopRequireDefault(_jiaohuan);

var _logo = require('../img/logo.png');

var _logo2 = _interopRequireDefault(_logo);

var _timg = require('../img/timg.jpg');

var _timg2 = _interopRequireDefault(_timg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zengtao on 2018/3/27.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Shili = function (_React$Component) {
    _inherits(Shili, _React$Component);

    function Shili(arg) {
        _classCallCheck(this, Shili);

        var _this = _possibleConstructorReturn(this, (Shili.__proto__ || Object.getPrototypeOf(Shili)).call(this, arg));

        _this.state = {};
        return _this;
    }

    _createClass(Shili, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _index2.default,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'index_head_t' },
                        _react2.default.createElement(
                            'div',
                            { className: 'index_head_t_warp' },
                            _react2.default.createElement(
                                'div',
                                { className: 'index_head_t_l' },
                                '\u8FD4\u56DE\u9996\u9875\xA0\xA0|\xA0\xA0',
                                _react2.default.createElement(
                                    'sapn',
                                    { className: 'hongzi' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '' },
                                        '\u767B\u5F55'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'index_head_t_r' },
                                '\u4E2D\u6587\xA0\xA0\xA0\xA0\xA0\xA0',
                                _react2.default.createElement(
                                    'sapn',
                                    { className: 'hongzi' },
                                    'English'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'index_head_r_b_warp' },
                        _react2.default.createElement(
                            'div',
                            { className: 'index_head' },
                            _react2.default.createElement(
                                'div',
                                { className: 'index_head_shang' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_head_l' },
                                    _react2.default.createElement('img', { src: _logo2.default, alt: '' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_head_r' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_head_r_t' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_head_r_t_act' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: '' },
                                                '\u5168\u90E8'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            '\u56FE\u4E66'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            '\u6587\u7AE0'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            '\u8BED\u6C47\u4F8B\u53E5'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_head_r_b' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_head_r_b_l' },
                                            _react2.default.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u8981\u641C\u7D22\u7684\u5185\u5BB9' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_head_r_b_r' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'btn_hongse' },
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '/sousuo.html' },
                                                    _react2.default.createElement('i', { className: 'fa fa-search',
                                                        'aria-hidden': 'true' }),
                                                    '\u641C\u7D22'
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'index_nav' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_nav_act' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/index.html' },
                                        '\u9996\u9875'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/tushudalei.html' },
                                        '\u6982\u8FF0'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/tushudalei.html' },
                                        '\u6CD5\u5F8B\u6CD5\u89C4'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/tushudalei.html' },
                                        '\u5B66\u672F\u7406\u8BBA'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/zhuanyecihui.html' },
                                        '\u4E13\u4E1A\u8BCD\u6C47'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/zhuanyecihui.html' },
                                        '\u7248\u6743\u5408\u4F5C'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    '\u793E\u533A'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'index_banner' },
                        _react2.default.createElement(
                            'div',
                            { className: 'index_banner_l' },
                            _react2.default.createElement(
                                'div',
                                { className: 'swiper-container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'swiper-wrapper' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'swiper-slide' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_banner_l_tu' },
                                            _react2.default.createElement('img', {
                                                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495602573&di=91feefc3c7132bbbb026fa13837491d7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161003%2F5e83ccf1198144b2ad75259243120818_th.jpeg',
                                                alt: '' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'swiper-slide' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_banner_l_tu' },
                                            _react2.default.createElement('img', {
                                                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495007856220&di=fe158aa582d86b59940e73abe8d371ab&imgtype=0&src=http%3A%2F%2Fimg01.tooopen.com%2FDowns%2Fimages%2F2009%2F10%2F20%2Fsy_20091020134926533016.jpg',
                                                alt: '' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'swiper-slide' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_banner_l_tu' },
                                            _react2.default.createElement('img', {
                                                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495007856211&di=9ae054476e67fab8b6f706750966e995&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1306%2F27%2Fc6%2F22656416_1372347869567.jpg',
                                                alt: '' })
                                        )
                                    )
                                ),
                                _react2.default.createElement('div', { className: 'swiper-pagination' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'index_banner_r' },
                            _react2.default.createElement(
                                'div',
                                { className: 'index_banner_r_b' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_banner_r_t_tit' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_banner_r_t_tit_l' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'hongzi' },
                                            'New',
                                            _react2.default.createElement('i', { className: 'fa fa-circle', 'aria-hidden': 'true' })
                                        ),
                                        '\u8D44\u8BAF'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_banner_r_t_tit_r' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/xinwenzixun.html' },
                                            '\u66F4\u591A >'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_banner_r_b_list' },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/xinwenxiangqing.html' },
                                            '\u8001\u4EBA\u7684\u9057\u5631\u662F\u5728\u5F8B\u5E08\u7684\u4EB2\u81EA\u76D1\u7763\u4E0B\u6267\u884C\u7684'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/xinwenxiangqing.html' },
                                            '\u8001\u4EBA\u7684\u9057\u5631\u662F\u5728\u5F8B\u5E08\u7684\u4EB2\u81EA\u76D1\u7763\u4E0B\u6267\u884C\u7684'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/xinwenxiangqing.html' },
                                            '\u8001\u4EBA\u7684\u9057\u5631\u662F\u5728\u5F8B\u5E08\u7684\u4EB2\u81EA\u76D1\u7763\u4E0B\u6267\u884C\u7684'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/xinwenxiangqing.html' },
                                            '\u8001\u4EBA\u7684\u9057\u5631\u662F\u5728\u5F8B\u5E08\u7684\u4EB2\u81EA\u76D1\u7763\u4E0B\u6267\u884C\u7684'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/xinwenxiangqing.html' },
                                            '\u8001\u4EBA\u7684\u9057\u5631\u662F\u5728\u5F8B\u5E08\u7684\u4EB2\u81EA\u76D1\u7763\u4E0B\u6267\u884C\u7684'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'index_banner_r_t' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_banner_r_t_tit' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_banner_r_t_tit_l' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'hongzi' },
                                            'Study',
                                            _react2.default.createElement('i', { className: 'fa fa-circle',
                                                'aria-hidden': 'true' })
                                        ),
                                        '\u6BCF\u65E5\u4E00\u5B66'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_banner_r_t_tit_r' },
                                        _react2.default.createElement('i', { className: 'fa fa-undo', 'aria-hidden': 'true' }),
                                        '\u6362\u4E00\u6362'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_banner_r_t_yi' },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        '\u8BCD\u6C47\uFF1A'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        '\u76D1\u7763'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'shjhjhjd'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        '\u82F1[dndkjsdjs] \u7F8E[jdjshdj]'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'vi&v:\u76D1\u7763\uFF1B\u7BA1\u7406\uFF1B\u77E5\u9053'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        '\u4F8B\u53E5\uFF1A'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        '\u8001\u4EBA\u7684\u9057\u5631\u662F\u5728\u5F8B\u5E08\u7684\u4EB2\u81EA\u76D1\u7763\u4E0B\u6267\u884C\u7684'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        'The old man\'s will was executed under the personal supervision of the lawyer.'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'index_tuijian' },
                        _react2.default.createElement(
                            'div',
                            { className: 'index_tuijian_tit' },
                            _react2.default.createElement(
                                'div',
                                { className: 'index_tuijian_tit_l' },
                                _react2.default.createElement('img', { src: _jiangzhang2.default, alt: '' }),
                                '\u63A8\u8350',
                                _react2.default.createElement('i', { className: 'fa fa-circle',
                                    'aria-hidden': 'true' }),
                                _react2.default.createElement('div', { className: 'xiexian' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'index_tuijian_tit_m', id: 'index_tushuwenzhang' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_tuijian_tit_m_act' },
                                    '\u56FE\u4E66'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    '\u6587\u7AE0'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'index_tuijian_tit_r' },
                                '\u66F4\u591A>'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'index_tuijian_list index_tushu' },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '/shujiyuedu.html' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_img' },
                                            _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_tit' },
                                            '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_chubanshe' },
                                            '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '/shujiyuedu.html' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_img' },
                                            _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_tit' },
                                            '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_chubanshe' },
                                            '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '/shujiyuedu.html' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_img' },
                                            _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_tit' },
                                            '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_chubanshe' },
                                            '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '/shujiyuedu.html' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_img' },
                                            _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_tit' },
                                            '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_chubanshe' },
                                            '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '/shujiyuedu.html' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_img' },
                                            _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_tit' },
                                            '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_chubanshe' },
                                            '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'index_tuijian_list index_tushu' },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '/shujiyuedu.html' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_img' },
                                            _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_tit' },
                                            '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_chubanshe' },
                                            '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '/shujiyuedu.html' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_img' },
                                            _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_tit' },
                                            '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_chubanshe' },
                                            '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '/shujiyuedu.html' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_img' },
                                            _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_tit' },
                                            '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_chubanshe' },
                                            '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '/shujiyuedu.html' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_img' },
                                            _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_tit' },
                                            '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_chubanshe' },
                                            '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '/shujiyuedu.html' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_img' },
                                            _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_tit' },
                                            '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_tuijian_list_body_chubanshe' },
                                            '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'index_tuijian_list index_wenzhang gybxs' },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_tuijian_list_body_wenzhang' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_tit' },
                                        '\u5934\u662F\u533B\u751F\u5934\u662F\u533B\u751F\u5934\u662F\u533B\u751F\u5934\u662F\u533B\u751F\u5934\u662F\u533B\u751F\u5934\u662F\u533B\u751F\u5934\u662F\u533B\u751F\u5934\u662F\u533B\u751F\u5934\u662F\u533B\u751F\u5934\u662F\u533B\u751F'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_zuozhe' },
                                        '\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_body' },
                                        '\u548C\u63A5\u53D7\u7684\u8BDD\u5C31\u662F\u7684\u662F\u7684\u91D1\u58EB\u987F\u662F\u90FD\u662F\u7535\u8111\u6B7B\u673A\u7684\u8FD8\u662F\u5230\u65F6\u5019\u554A\u9886\u5BFC\u8BF4\u4E86\u5361\u7684\u6492\u5A07\u80AF\u5B9A\u6492\u5C31\u54C8\u5E02\u5012\u8428\u5012\u8428\u7684\u54C8\u9152\u54C8\u770B'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_yuedu' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: '' },
                                            '\u7ACB\u5373\u9605\u8BFB>'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_tuijian_list_body_wenzhang' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_tit' },
                                        '\u5934\u662F\u533B\u751F'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_zuozhe' },
                                        '\u54C8\u54C8\u54C8'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_body' },
                                        '\u548C\u63A5\u53D7\u7684\u8BDD\u5C31\u662F\u7684\u662F\u7684\u91D1\u58EB\u987F\u662F\u90FD\u662F\u7535\u8111\u6B7B\u673A\u7684\u8FD8\u662F\u5230\u65F6\u5019\u554A\u9886\u5BFC\u8BF4\u4E86\u5361\u7684\u6492\u5A07\u80AF\u5B9A\u6492\u5C31\u54C8\u5E02\u5012\u8428\u5012\u8428\u7684\u54C8\u9152\u54C8\u770B'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_yuedu' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: '' },
                                            '\u7ACB\u5373\u9605\u8BFB>'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_tuijian_list_body_wenzhang' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_tit' },
                                        '\u5934\u662F\u533B\u751F'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_zuozhe' },
                                        '\u54C8\u54C8\u54C8'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_body' },
                                        '\u548C\u63A5\u53D7\u7684\u8BDD\u5C31\u662F\u7684\u662F\u7684\u91D1\u58EB\u987F\u662F\u90FD\u662F\u7535\u8111\u6B7B\u673A\u7684\u8FD8\u662F\u5230\u65F6\u5019\u554A\u9886\u5BFC\u8BF4\u4E86\u5361\u7684\u6492\u5A07\u80AF\u5B9A\u6492\u5C31\u54C8\u5E02\u5012\u8428\u5012\u8428\u7684\u54C8\u9152\u54C8\u770B'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_yuedu' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: '' },
                                            '\u7ACB\u5373\u9605\u8BFB>'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_tuijian_list_body_wenzhang' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_tit' },
                                        '\u5934\u662F\u533B\u751F'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_zuozhe' },
                                        '\u54C8\u54C8\u54C8'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_body' },
                                        '\u548C\u63A5\u53D7\u7684\u8BDD\u5C31\u662F\u7684\u662F\u7684\u91D1\u58EB\u987F\u662F\u90FD\u662F\u7535\u8111\u6B7B\u673A\u7684\u8FD8\u662F\u5230\u65F6\u5019\u554A\u9886\u5BFC\u8BF4\u4E86\u5361\u7684\u6492\u5A07\u80AF\u5B9A\u6492\u5C31\u54C8\u5E02\u5012\u8428\u5012\u8428\u7684\u54C8\u9152\u54C8\u770B'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_yuedu' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: '' },
                                            '\u7ACB\u5373\u9605\u8BFB>'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_tuijian_list_body_wenzhang' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_tit' },
                                        '\u5934\u662F\u533B\u751F'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_zuozhe' },
                                        '\u54C8\u54C8\u54C8'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_body' },
                                        '\u548C\u63A5\u53D7\u7684\u8BDD\u5C31\u662F\u7684\u662F\u7684\u91D1\u58EB\u987F\u662F\u90FD\u662F\u7535\u8111\u6B7B\u673A\u7684\u8FD8\u662F\u5230\u65F6\u5019\u554A\u9886\u5BFC\u8BF4\u4E86\u5361\u7684\u6492\u5A07\u80AF\u5B9A\u6492\u5C31\u54C8\u5E02\u5012\u8428\u5012\u8428\u7684\u54C8\u9152\u54C8\u770B'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_wenzhang_yuedu' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: '' },
                                            '\u7ACB\u5373\u9605\u8BFB>'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'index_tuijian' },
                        _react2.default.createElement(
                            'div',
                            { className: 'index_tuijian_tit' },
                            _react2.default.createElement(
                                'div',
                                { className: 'index_tuijian_tit_l' },
                                _react2.default.createElement('img', { src: _jiaohuan2.default, alt: '' }),
                                '\u7248\u6743\u4EA4\u6362',
                                _react2.default.createElement('i', { className: 'fa fa-circle',
                                    'aria-hidden': 'true' }),
                                _react2.default.createElement('div', { className: 'xiexian' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'index_tuijian_tit_m', id: 'index_banquan' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_tuijian_tit_m_act' },
                                    '\u6CD5\u5F8B\u89C4\u8303'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    '\u5B66\u672F\u7406\u8BBA'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    '\u5BA1\u8BA1\u53F2'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'index_tuijian_tit_r' },
                                '\u66F4\u591A>'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'index_tuijian_list' },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_tuijian_list_body' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_img' },
                                        _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_tit' },
                                        '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_chubanshe' },
                                        '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_btn' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'btn_hongse' },
                                            '\u5408\u4F5C\u610F\u5411'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_tuijian_list_body' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_img' },
                                        _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_tit' },
                                        '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_chubanshe' },
                                        '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_btn' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'btn_hongse' },
                                            '\u5408\u4F5C\u610F\u5411'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_tuijian_list_body' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_img' },
                                        _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_tit' },
                                        '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_chubanshe' },
                                        '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_btn' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'btn_hongse' },
                                            '\u5408\u4F5C\u610F\u5411'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_tuijian_list_body' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_img' },
                                        _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_tit' },
                                        '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_chubanshe' },
                                        '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_btn' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'btn_hongse' },
                                            '\u5408\u4F5C\u610F\u5411'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_tuijian_list_body' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_img' },
                                        _react2.default.createElement('img', { src: _timg2.default, alt: '' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_tit' },
                                        '\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211\u7684\u5582\u5582\u5582\u7684\u5473\u9053\u6211'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_chubanshe' },
                                        '\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E\u5927\u5BB6\u90FD\u89C9\u5F97\u51FA\u7248\u793E'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_tuijian_list_body_btn' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'btn_hongse' },
                                            '\u5408\u4F5C\u610F\u5411'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'index_footer' },
                        _react2.default.createElement(
                            'div',
                            { className: 'index_footer_warp' },
                            _react2.default.createElement(
                                'div',
                                { className: 'index_footer_l' },
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    '\u53CD\u9988\u5EFA\u8BAE\uFF1A2222222@qq.com'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    '\u7248\u6743\u5408\u4F5C\uFF1A2222222@qq.com'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    '\u4E3B\u7BA1\u5355\u4F4D\uFF1A2222222@qq.com'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    '\u4E3B\u529E\u5355\u4F4D\uFF1A2222222@qq.com'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    '\u534F\u4F5C\u5355\u4F4D\uFF1A2222222@qq.com'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    '\u8054\u7CFB\u5730\u5740\uFF1A2222222@qq.com'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'index_footer_r' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_footer_r_t' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_footer_r_t_l' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_footer_r_t_tit' },
                                            '\u5173\u4E8E\u5E73\u53F0'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_footer_r_t_l_img' },
                                            _react2.default.createElement('img', { src: _guanyu2.default, alt: '' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_footer_r_t_m' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_footer_r_t_tit' },
                                            '\u5E2E\u52A9\u4E2D\u5FC3'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_footer_r_t_m_list' },
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '' },
                                                    '\u5982\u4F55\u6CE8\u518C'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                '\u5E38\u89C1\u95EE\u9898'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                '\u5982\u4F55\u6388\u6743\u5408\u4F5C'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'index_footer_r_t_r' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'index_footer_r_t_tit' },
                                            '\u5BA1\u8BA1\u6587\u5316\u4E66\u5C4B'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'index_footer_r_b' },
                                    '\u65B0\u7F51\u51FA\u8BC1\u4E66\uFF08\u9CB8\uFF0921000\u53F7'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Shili;
}(_react2.default.Component);

Shili.defaultProps = {};
exports.default = Shili;