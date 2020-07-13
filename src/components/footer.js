import React,{Component} from 'react'
import '../css/footer.css'

class footer extends Component {
    constructor(props){
        super(props)
        this.state={
            acpay:'10,300'
        }
    }
    render() { 
        return ( 
            <div>
                <div className="point">
                    <p>您有3.6万积分，提交订单最高抵扣200元</p>
                </div>

                <div className="footer">
                    <div className="fleft">
                    <p id="ac">实付:¥{this.state.acpay}</p>
                    <p>
                        <span id="nc">当期应付:</span>
                        <span id="zc">¥848.33</span>
                        <span id="vc">12期免息</span>
                    </p>
                    </div>
                    <div className="fright">
                        <p>提交订单</p>
                        <p>积分可抵¥200</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default footer;