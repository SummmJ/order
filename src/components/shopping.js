import React, { Component } from 'react'
import '../css/shopping.css'

class shopping extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="tab1">
                    <p>平安付咨询</p>
                </div>
                {/* 商品栏目 */}
                <div className="shopping">
                    <div id="left">
                        <img src={require("../assets/默认@2x.png")} alt=""></img>
                    </div>
                    <div id="right">
                        <p> <img src={require("../assets/精选@2x.png")} alt=""></img>HUAWEI nova 4GB+64GB版
                     移动联通电信4G手机移动手机</p>
                        <p>红色 128G</p>
                        <p>¥5,210</p>
                        <span>¥434.16x12期</span>
                        <span>x2</span>
                    </div>

                </div>
                {/* 标签栏 */}
                <div className="coupon">
                    <span>优惠券</span>
                    <span>-¥120{">"}</span>
                </div>
                {/* 运费 */}
                <div className="trans">
                    <p>运费</p>
                </div>
                {/* 留言 */}
                <div className="message">
                    <span id="msg">留言:</span>
                    <span id="sel">选填，建议留言前先与商家确认</span>
                    <span id="charge">包邮</span>
                </div>
                {/* 合计 */}
                <div className="total">
                    <p>共一件商品  小记<span>¥10,300</span></p>
                </div>
                {/* 发票 */}
                <div className="tick">
                     <span id="one">开具发票</span>
                     <span id="two">本次不开具发票<img src={require("../assets/右箭头@2x.png")} alt=""></img></span>
                </div>
            </div>
        );
    }
}

export default shopping;


// <div class="shopping">
// <div id="left"> 
//     <img src="../确认订单修改/assets/默认@2x.png" alt="">
// </div>
// <div id="right">
//     <p> <img src="../确认订单修改/assets/精选@2x.png" alt="">      HUAWEI nova 4GB+64GB版 
//         移动联通电信4G手机移动手机</p>
//     <p>红色 128G</p>
//     <p>¥5,210</p>
//     <span>¥434.16✖️12期</span><span>✖️2</span>

// </div>
// </div>

// <div class="coupon">
// <span>优惠券</span>
// <span>-¥120></span>
// </div>
// <div class="trans">
// <p>运费</p>
// </div>