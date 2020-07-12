import React,{Component} from 'react'
import "../css/header.css"
class header extends Component {
    constructor(props){
        super(props)
            this.state={
                adress:'上海上海市徐汇区斜土路街道 凯宾路26号平安大厦A座15楼平安大厦A座15楼',
                name:'陈小饮 185 6569 9808'
            }   
    }
    render() { 
        return ( 
            <div className="header">
                <div id="head">
                    <img src={require("../assets/C_图标资源_💟 / 01字体图标 / 【返回】poppy_icon_arrow_left.svg")}  alt=""></img>
                    <span>确认订单</span>
                </div>

            <div className="people">
                <p> {this.state.name}<img src={require("../assets/默认@2x.png" )}alt=""></img></p>
                <div className="location">
                <p>{this.state.adress} </p>
                </div>
            </div>

            </div>

         );
    }
}
 
export default header;
