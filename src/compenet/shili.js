/**
 * Created by zengtao on 2018/3/27.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import Index from './index'
import baner from '../img/baner.jpg'
import guanyu from '../img/guanyu.png'
import jiangzhang from '../img/jiangzhang.png'
import jiaohuan from '../img/jiaohuan.png'
import logo from '../img/logo.png'
import timg from '../img/timg.jpg'


export default class Shili extends React.Component {
    constructor(arg) {
        super(arg);
    }

    static defaultProps = {}

    componentWillMount() {
    }

    state = {}

    render() {
        return (
            <div>
                <Index>
                    <div className="index_head_t">
                        <div className="index_head_t_warp">
                            <div className="index_head_t_l">
                                返回首页&nbsp;&nbsp;|&nbsp;&nbsp;
                                <sapn className="hongzi"><a href="">登录</a></sapn>
                            </div>

                            <div className="index_head_t_r">
                                中文&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <sapn className="hongzi">English</sapn>
                            </div>
                        </div>
                    </div>
                    <div className="index_head_r_b_warp">
                        <div className="index_head">
                            <div className="index_head_shang">
                                <div className="index_head_l">
                                    <img src={logo} alt=""/>
                                </div>

                                <div className="index_head_r">
                                    <div className="index_head_r_t">
                                        <div className="index_head_r_t_act">
                                            <a href="">全部</a>
                                        </div>
                                        <div>
                                            图书
                                        </div>
                                        <div>
                                            文章
                                        </div>
                                        <div>
                                            语汇例句
                                        </div>
                                    </div>


                                    <div className="index_head_r_b">
                                        <div className="index_head_r_b_l">
                                            <input type="text" placeholder="请输入要搜索的内容"/>
                                        </div>
                                        <div className="index_head_r_b_r">
                                            <div className="btn_hongse">
                                                <a href="/sousuo.html"><i className="fa fa-search"
                                                                          aria-hidden="true"></i>搜索</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="index_nav">
                                <div className="index_nav_act">
                                    <a href="/index.html">首页</a>
                                </div>

                                <div>
                                    <a href="/tushudalei.html">概述</a>
                                </div>
                                <div>
                                    <a href="/tushudalei.html">法律法规</a>
                                </div>
                                <div>
                                    <a href="/tushudalei.html">学术理论</a>
                                </div>
                                <div>
                                    <a href="/zhuanyecihui.html">专业词汇</a>
                                </div>
                                <div>
                                    <a href="/zhuanyecihui.html">版权合作</a>
                                </div>
                                <div>
                                    社区
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="index_banner">
                        <div className="index_banner_l">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="index_banner_l_tu"><img
                                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495602573&di=91feefc3c7132bbbb026fa13837491d7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161003%2F5e83ccf1198144b2ad75259243120818_th.jpeg"
                                            alt=""/></div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="index_banner_l_tu"><img
                                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495007856220&di=fe158aa582d86b59940e73abe8d371ab&imgtype=0&src=http%3A%2F%2Fimg01.tooopen.com%2FDowns%2Fimages%2F2009%2F10%2F20%2Fsy_20091020134926533016.jpg"
                                            alt=""/></div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="index_banner_l_tu"><img
                                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495007856211&di=9ae054476e67fab8b6f706750966e995&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1306%2F27%2Fc6%2F22656416_1372347869567.jpg"
                                            alt=""/></div>
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>

                        <div className="index_banner_r">


                            <div className="index_banner_r_b">
                                <div className="index_banner_r_t_tit">
                                    <div className="index_banner_r_t_tit_l">
                                        <span className="hongzi">New<i className="fa fa-circle" aria-hidden="true"></i></span>资讯
                                    </div>

                                    <div className="index_banner_r_t_tit_r">
                                        <a href="/xinwenzixun.html">更多 ></a>
                                    </div>
                                </div>

                                <div className="index_banner_r_b_list">
                                    <div>
                                        <a href="/xinwenxiangqing.html">老人的遗嘱是在律师的亲自监督下执行的</a>
                                    </div>
                                    <div>
                                        <a href="/xinwenxiangqing.html">老人的遗嘱是在律师的亲自监督下执行的</a>
                                    </div>
                                    <div>
                                        <a href="/xinwenxiangqing.html">老人的遗嘱是在律师的亲自监督下执行的</a>
                                    </div>
                                    <div>
                                        <a href="/xinwenxiangqing.html">老人的遗嘱是在律师的亲自监督下执行的</a>
                                    </div>
                                    <div>
                                        <a href="/xinwenxiangqing.html">老人的遗嘱是在律师的亲自监督下执行的</a>
                                    </div>
                                </div>
                            </div>
                            <div className="index_banner_r_t">
                                <div className="index_banner_r_t_tit">
                                    <div className="index_banner_r_t_tit_l">
                                        <span className="hongzi">Study<i className="fa fa-circle"
                                                                         aria-hidden="true"></i></span>每日一学
                                    </div>

                                    <div className="index_banner_r_t_tit_r">
                                        <i className="fa fa-undo" aria-hidden="true"></i>换一换

                                    </div>
                                </div>

                                <div className="index_banner_r_t_yi">
                                    <div>词汇：</div>
                                    <div>监督</div>
                                    <div>shjhjhjd</div>
                                    <div>英[dndkjsdjs] 美[jdjshdj]</div>
                                    <div>vi&v:监督；管理；知道</div>
                                    <div>例句：</div>
                                    <div>老人的遗嘱是在律师的亲自监督下执行的</div>
                                    <div>The old man's will was executed under the personal supervision of the lawyer.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="index_tuijian">
                        <div className="index_tuijian_tit">

                            <div className="index_tuijian_tit_l">
                                <img src={jiangzhang} alt=""/>推荐<i className="fa fa-circle"
                                                                              aria-hidden="true"></i>
                                <div className="xiexian"></div>
                            </div>
                            <div className="index_tuijian_tit_m" id="index_tushuwenzhang">
                                <div className="index_tuijian_tit_m_act">
                                    图书
                                </div>
                                <div>
                                    文章
                                </div>
                            </div>
                            <div className="index_tuijian_tit_r">
                                更多>
                            </div>
                        </div>
                        <div className="index_tuijian_list index_tushu">
                            <div>
                                <a href="/shujiyuedu.html">
                                    <div className="index_tuijian_list_body">
                                        <div className="index_tuijian_list_body_img">
                                            <img src={timg} alt=""/>
                                        </div>
                                        <div className="index_tuijian_list_body_tit">
                                            的喂喂喂的味道我
                                        </div>

                                        <div className="index_tuijian_list_body_chubanshe">
                                            大家都觉得出版社
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="/shujiyuedu.html">
                                    <div className="index_tuijian_list_body">
                                        <div className="index_tuijian_list_body_img">
                                            <img src={timg} alt=""/>
                                        </div>
                                        <div className="index_tuijian_list_body_tit">
                                            的喂喂喂的味道我
                                        </div>

                                        <div className="index_tuijian_list_body_chubanshe">
                                            大家都觉得出版社
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="/shujiyuedu.html">
                                    <div className="index_tuijian_list_body">
                                        <div className="index_tuijian_list_body_img">
                                            <img src={timg} alt=""/>
                                        </div>
                                        <div className="index_tuijian_list_body_tit">
                                            的喂喂喂的味道我
                                        </div>

                                        <div className="index_tuijian_list_body_chubanshe">
                                            大家都觉得出版社
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="/shujiyuedu.html">
                                    <div className="index_tuijian_list_body">
                                        <div className="index_tuijian_list_body_img">
                                            <img src={timg} alt=""/>
                                        </div>
                                        <div className="index_tuijian_list_body_tit">
                                            的喂喂喂的味道我
                                        </div>

                                        <div className="index_tuijian_list_body_chubanshe">
                                            大家都觉得出版社
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="/shujiyuedu.html">
                                    <div className="index_tuijian_list_body">
                                        <div className="index_tuijian_list_body_img">
                                            <img src={timg} alt=""/>
                                        </div>
                                        <div className="index_tuijian_list_body_tit">
                                            的喂喂喂的味道我
                                        </div>

                                        <div className="index_tuijian_list_body_chubanshe">
                                            大家都觉得出版社
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="index_tuijian_list index_tushu">
                            <div>
                                <a href="/shujiyuedu.html">
                                    <div className="index_tuijian_list_body">
                                        <div className="index_tuijian_list_body_img">
                                            <img src={timg} alt=""/>
                                        </div>
                                        <div className="index_tuijian_list_body_tit">
                                            的喂喂喂的味道我
                                        </div>

                                        <div className="index_tuijian_list_body_chubanshe">
                                            大家都觉得出版社
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="/shujiyuedu.html">
                                    <div className="index_tuijian_list_body">
                                        <div className="index_tuijian_list_body_img">
                                            <img src={timg} alt=""/>
                                        </div>
                                        <div className="index_tuijian_list_body_tit">
                                            的喂喂喂的味道我
                                        </div>

                                        <div className="index_tuijian_list_body_chubanshe">
                                            大家都觉得出版社
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="/shujiyuedu.html">
                                    <div className="index_tuijian_list_body">
                                        <div className="index_tuijian_list_body_img">
                                            <img src={timg} alt=""/>
                                        </div>
                                        <div className="index_tuijian_list_body_tit">
                                            的喂喂喂的味道我
                                        </div>

                                        <div className="index_tuijian_list_body_chubanshe">
                                            大家都觉得出版社
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="/shujiyuedu.html">
                                    <div className="index_tuijian_list_body">
                                        <div className="index_tuijian_list_body_img">
                                            <img src={timg} alt=""/>
                                        </div>
                                        <div className="index_tuijian_list_body_tit">
                                            的喂喂喂的味道我
                                        </div>

                                        <div className="index_tuijian_list_body_chubanshe">
                                            大家都觉得出版社
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="/shujiyuedu.html">
                                    <div className="index_tuijian_list_body">
                                        <div className="index_tuijian_list_body_img">
                                            <img src={timg} alt=""/>
                                        </div>
                                        <div className="index_tuijian_list_body_tit">
                                            的喂喂喂的味道我
                                        </div>

                                        <div className="index_tuijian_list_body_chubanshe">
                                            大家都觉得出版社
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="index_tuijian_list index_wenzhang gybxs">
                            <div>
                                <div className="index_tuijian_list_body_wenzhang">
                                    <div className="index_tuijian_list_body_wenzhang_tit">
                                        头是医生头是医生头是医生头是医生头是医生头是医生头是医生头是医生头是医生头是医生
                                    </div>
                                    <div className="index_tuijian_list_body_wenzhang_zuozhe">
                                        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                                    </div>
                                    <div className="index_tuijian_list_body_wenzhang_body">
                                        和接受的话就是的是的金士顿是都是电脑死机的还是到时候啊领导说了卡的撒娇肯定撒就哈市倒萨倒萨的哈酒哈看
                                    </div>

                                    <div className="index_tuijian_list_body_wenzhang_yuedu">
                                        <a href="">立即阅读></a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="index_tuijian_list_body_wenzhang">
                                    <div className="index_tuijian_list_body_wenzhang_tit">
                                        头是医生
                                    </div>
                                    <div className="index_tuijian_list_body_wenzhang_zuozhe">
                                        哈哈哈
                                    </div>
                                    <div className="index_tuijian_list_body_wenzhang_body">
                                        和接受的话就是的是的金士顿是都是电脑死机的还是到时候啊领导说了卡的撒娇肯定撒就哈市倒萨倒萨的哈酒哈看
                                    </div>

                                    <div className="index_tuijian_list_body_wenzhang_yuedu">
                                        <a href="">立即阅读></a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="index_tuijian_list_body_wenzhang">
                                    <div className="index_tuijian_list_body_wenzhang_tit">
                                        头是医生
                                    </div>
                                    <div className="index_tuijian_list_body_wenzhang_zuozhe">
                                        哈哈哈
                                    </div>
                                    <div className="index_tuijian_list_body_wenzhang_body">
                                        和接受的话就是的是的金士顿是都是电脑死机的还是到时候啊领导说了卡的撒娇肯定撒就哈市倒萨倒萨的哈酒哈看
                                    </div>

                                    <div className="index_tuijian_list_body_wenzhang_yuedu">
                                        <a href="">立即阅读></a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="index_tuijian_list_body_wenzhang">
                                    <div className="index_tuijian_list_body_wenzhang_tit">
                                        头是医生
                                    </div>
                                    <div className="index_tuijian_list_body_wenzhang_zuozhe">
                                        哈哈哈
                                    </div>
                                    <div className="index_tuijian_list_body_wenzhang_body">
                                        和接受的话就是的是的金士顿是都是电脑死机的还是到时候啊领导说了卡的撒娇肯定撒就哈市倒萨倒萨的哈酒哈看
                                    </div>

                                    <div className="index_tuijian_list_body_wenzhang_yuedu">
                                        <a href="">立即阅读></a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="index_tuijian_list_body_wenzhang">
                                    <div className="index_tuijian_list_body_wenzhang_tit">
                                        头是医生
                                    </div>
                                    <div className="index_tuijian_list_body_wenzhang_zuozhe">
                                        哈哈哈
                                    </div>
                                    <div className="index_tuijian_list_body_wenzhang_body">
                                        和接受的话就是的是的金士顿是都是电脑死机的还是到时候啊领导说了卡的撒娇肯定撒就哈市倒萨倒萨的哈酒哈看
                                    </div>

                                    <div className="index_tuijian_list_body_wenzhang_yuedu">
                                        <a href="">立即阅读></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="index_tuijian">
                        <div className="index_tuijian_tit">

                            <div className="index_tuijian_tit_l">
                                <img src={jiaohuan} alt=""/>版权交换<i className="fa fa-circle"
                                                                              aria-hidden="true"></i>
                                <div className="xiexian"></div>
                            </div>
                            <div className="index_tuijian_tit_m" id="index_banquan">
                                <div className="index_tuijian_tit_m_act">
                                    法律规范
                                </div>
                                <div>
                                    学术理论
                                </div>
                                <div>
                                    审计史
                                </div>
                            </div>
                            <div className="index_tuijian_tit_r">
                                更多>
                            </div>
                        </div>
                        <div className="index_tuijian_list">
                            <div>
                                <div className="index_tuijian_list_body">
                                    <div className="index_tuijian_list_body_img">
                                        <img src={timg} alt=""/>
                                    </div>
                                    <div className="index_tuijian_list_body_tit">
                                        的喂喂喂的味道我
                                    </div>

                                    <div className="index_tuijian_list_body_chubanshe">
                                        大家都觉得出版社
                                    </div>

                                    <div className="index_tuijian_list_body_btn">
                                        <div className="btn_hongse">
                                            合作意向
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="index_tuijian_list_body">
                                    <div className="index_tuijian_list_body_img">
                                        <img src={timg} alt=""/>
                                    </div>
                                    <div className="index_tuijian_list_body_tit">
                                        的喂喂喂的味道我
                                    </div>

                                    <div className="index_tuijian_list_body_chubanshe">
                                        大家都觉得出版社
                                    </div>

                                    <div className="index_tuijian_list_body_btn">
                                        <div className="btn_hongse">
                                            合作意向
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="index_tuijian_list_body">
                                    <div className="index_tuijian_list_body_img">
                                        <img src={timg} alt=""/>
                                    </div>
                                    <div className="index_tuijian_list_body_tit">
                                        的喂喂喂的味道我
                                    </div>

                                    <div className="index_tuijian_list_body_chubanshe">
                                        大家都觉得出版社
                                    </div>

                                    <div className="index_tuijian_list_body_btn">
                                        <div className="btn_hongse">
                                            合作意向
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="index_tuijian_list_body">
                                    <div className="index_tuijian_list_body_img">
                                        <img src={timg} alt=""/>
                                    </div>
                                    <div className="index_tuijian_list_body_tit">
                                        的喂喂喂的味道我的喂喂喂的味道我的喂喂喂的味道我的喂喂喂的味道我
                                    </div>

                                    <div className="index_tuijian_list_body_chubanshe">
                                        大家都觉得出版社
                                    </div>

                                    <div className="index_tuijian_list_body_btn">
                                        <div className="btn_hongse">
                                            合作意向
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="index_tuijian_list_body">
                                    <div className="index_tuijian_list_body_img">
                                        <img src={timg} alt=""/>
                                    </div>
                                    <div className="index_tuijian_list_body_tit">
                                        的喂喂喂的味道我的喂喂喂的味道我的喂喂喂的味道我的喂喂喂的味道我
                                    </div>

                                    <div className="index_tuijian_list_body_chubanshe">
                                        大家都觉得出版社大家都觉得出版社大家都觉得出版社大家都觉得出版社
                                    </div>

                                    <div className="index_tuijian_list_body_btn">
                                        <div className="btn_hongse">
                                            合作意向
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="index_footer">
                        <div className="index_footer_warp">
                            <div className="index_footer_l">
                                <div>
                                    反馈建议：2222222@qq.com
                                </div>
                                <div>
                                    版权合作：2222222@qq.com
                                </div>
                                <div>
                                    主管单位：2222222@qq.com
                                </div>
                                <div>
                                    主办单位：2222222@qq.com
                                </div>
                                <div>
                                    协作单位：2222222@qq.com
                                </div>
                                <div>
                                    联系地址：2222222@qq.com
                                </div>
                            </div>

                            <div className="index_footer_r">
                                <div className="index_footer_r_t">
                                    <div className="index_footer_r_t_l">
                                        <div className="index_footer_r_t_tit">
                                            关于平台
                                        </div>
                                        <div className="index_footer_r_t_l_img">
                                            <img src={guanyu} alt=""/>
                                        </div>
                                    </div>

                                    <div className="index_footer_r_t_m">
                                        <div className="index_footer_r_t_tit">
                                            帮助中心
                                        </div>
                                        <div className="index_footer_r_t_m_list">
                                            <div>
                                                <a href="">如何注册</a>
                                            </div>
                                            <div>
                                                常见问题
                                            </div>
                                            <div>
                                                如何授权合作
                                            </div>
                                        </div>
                                    </div>

                                    <div className="index_footer_r_t_r">
                                        <div className="index_footer_r_t_tit">
                                            审计文化书屋
                                        </div>
                                    </div>
                                </div>
                                <div className="index_footer_r_b">
                                    新网出证书（鲸）21000号
                                </div>
                            </div>
                        </div>
                    </div>
                </Index>
            </div>
        )
    }
}