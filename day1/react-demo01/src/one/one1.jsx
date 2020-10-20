import React ,{Component} from "react";
import { Fragment } from "react";

import "./one1.css";

let styleObj={
    color:'red',
    fontSzie:'30px'
}

class Header extends Component{
    render(){
        return (
            <Fragment>
            <h2 style={{color:'red'}}>这是头部</h2>
            <div style={styleObj}>头部</div>
            <div className="font">这是使用className来添加类名</div>
            </Fragment>
        )
    }
}

export default Header

