/**
 * Created by zengtao on 2018/3/27.
 */
import ReactDOM from 'react-dom';
import React from 'react';

export default class Shise extends React.Component {
    constructor(arg) {
        super(arg);
    }

    static defaultProps={
        ctx:{},
        yanse:()=>{}
    }

    componentWillMount() {

    }

    state = {

    }

    dianji=(e)=>{
        let xPage = (navigator.appName == 'Netscape')? e.pageX : event.x+document.body.scrollLeft;
        let yPage = (navigator.appName == 'Netscape')? e.pageY : event.y+document.body.scrollTop;
        let tu = this.props.ctx.getImageData(xPage - ((document.body.clientWidth - document.getElementsByClassName('ztao_shise')[0].clientWidth) /2) + this.props.left, yPage - this.props.top, 1, 1);
        var data = tu.data;
        this.props.yanse(data)
    }

    render() {
        return (
            <div className="ztao_shise" onClick={this.props.ctx?this.dianji:()=>{}}>
                {this.props.children}
            </div>
        )
    }
}