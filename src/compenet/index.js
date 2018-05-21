import ReactDOM from 'react-dom';
import React from 'react';
import Shise from './shise'

const duo = './node_modules/ztao_check/duo.js';
//const duo 'duo.js';
export default class Index extends React.Component {
    constructor(arg) {
        super(arg);
    }

    componentWillMount() {

    }

    componentDidMount=()=>{
        document.addEventListener('keyup',(e)=>{
            switch(e.keyCode){
                case 87:
                    //上
                    this.yidong(-1)
                    break
                case 83:
                    //下
                    this.yidong(1)
                    break
                case 65:
                    //左
                    this.yidong(2)
                    break
                case 68:
                    //右
                    this.yidong(-2)
                    break
                default:
                    break
            }
        })
    }

    state = {
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
        guanbi:true,
        top:0,
        left:0,
        baidi:true
    }

    yidong=(num)=>{
        if(num == 1){
            this.setState({
                top:this.state.top+1
            })
        }else if(num == -1){
            this.setState({
                top:this.state.top-1
            })
        }else if(num == -2){
            this.setState({
                left:this.state.left+1
            })
        }else {
            this.setState({
                left:this.state.left-1
            })
        }

    }

    dealImage = (file, w, fun)=> {
        var ready = new FileReader();
        /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
        ready.readAsDataURL(file);
        ready.onload = (e)=> {
            var re = e.target.result;
            this.canvasDataURL(re, w, fun)
        }
    }

    canvasDataURL = (re, w, fun)=> {
        var newImg = new Image();
        newImg.src = re;
        newImg.onload = ()=> {
            var canvas = document.getElementById("canvas");
            canvas.width = document.getElementById('ztao_kuan').clientWidth;
            canvas.height = newImg.height * (document.getElementById('ztao_kuan').clientWidth / newImg.width);
            this.setState({
                ctx: canvas.getContext("2d"),
                kuan: document.getElementById('ztao_kuan').clientWidth,
                gao: newImg.height * (document.getElementById('ztao_kuan').clientWidth / newImg.width),
                anniu: false
            })
            this.state.ctx.drawImage(newImg, 0, 0, canvas.width, canvas.height);
            var tu = this.state.ctx.getImageData(0, 0, canvas.width, canvas.height);
            this.yibu({img: tu, sezhi: null,baidi:this.state.baidi}, (data)=> {
                this.state.ctx.putImageData(data, 0, 0);
            })
        }
    }

    dianji = (e)=> {
        var file = e.target.files[0];
        this.dealImage(file, 500, (base)=> {
            this.setState({
                img: base
            })
        })
    }

    yanse = (data)=> {
        var rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + (data[3] / 255) + ')';
        this.setState({
            yanse: rgba,
            sezhi: data,
            anniu: false
        })
    }

    quchu = ()=> {
        var tu = this.state.ctx.getImageData(0, 0, this.state.kuan, this.state.gao);
        this.setState({
            anniu: true
        })
        this.yibu({img: tu, sezhi: this.state.sezhi,baidi:this.state.baidi}, (data)=> {
            this.state.ctx.putImageData(data, 0, 0);
        })

    }

    yibu(data, fun) {
        var worker = new Worker(duo);
        worker.onmessage = (event)=> {
            fun(event.data)
        };
        worker.onerror = function (error) {
            console.log("Error:" + error.message);
        };
        worker.postMessage(data);
    }

    huadong = (e)=> {
        console.log(e.target.value)
        this.setState({
            touming: e.target.value / 100
        })
    }

    xianshi1 = (e)=> {
        this.setState({
            xianshi1: e.target.checked,
        })
    }
    xianshi2 = (e)=> {
        this.setState({
            xianshi2: e.target.checked,
        })
    }

    guanbi=(e)=>{
        this.setState({
            guanbi:!this.state.guanbi
        })
    }
    baidi=(e)=>{
        this.setState({
            baidi:!this.state.baidi
        })
    }

    render() {
        return (
            <div className="ztao_warp" id="ztao_kuan">
                {this.state.guanbi?<div className="ztao_caozuo">
                    <div className="ztao_caozuo_guanbi" onClick={this.guanbi}>
                        x
                    </div>
                    <div className="ztao_btn">
                        添加高保真图：<input type="file" onChange={this.dianji}/>&nbsp;&nbsp;<label><input type="checkbox" onChange={this.baidi} name="baidi" checked={this.state.baidi}/>去除白底</label>
                    </div>
                    <div className="ztao_caozuo_yanse">
                        选取需要去除的颜色：
                        <div className="ztao_sekuai" style={{background:this.state.yanse}}></div>
                        <button onClick={this.quchu} disabled={this.state.anniu?true:false}>去除</button>
                    </div>
                    <div className="ztao_touming">
                        调解高保真透明度：<input type="range" onChange={this.huadong} defaultValue="100"/>
                    </div>
                    <div className="ztao_xianshi">
                        去除/显示模块：
                        <label><input type="checkbox" onChange={this.xianshi1} name="check" checked={this.state.xianshi1}/>高保真</label>
                        <label><input type="checkbox" onChange={this.xianshi2} name="check" checked={this.state.xianshi2}/>切图</label>
                    </div>
                </div>:null}
                {this.state.guanbi?null:<div className="ztao_caozuo_xiao" onClick={this.guanbi}>
                    打<br/>
                    开
                </div>}
                <div className="ztao_img"
                     style={{opacity:this.state.touming,display:this.state.xianshi1?"block":"none",top:this.state.top,left:this.state.left}}>
                    <Shise ctx={this.state.ctx} yanse={this.yanse} top={this.state.top} left={this.state.left}>
                        <canvas id="canvas">您的浏览器不支持</canvas>
                    </Shise>
                </div>
                {this.state.xianshi2 ? <div className="ztao_yemian">
                    {this.props.children}
                </div> : null}
            </div>
        )
    }
}