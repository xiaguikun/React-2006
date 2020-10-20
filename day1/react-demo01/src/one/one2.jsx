import React, { Fragment ,Component} from "react";
import classNames from 'classnames/bind';

import style from './one1.css';
import DivStyle from './one3.jsx';

let cx=classNames.bind(style)

export default class Main extends Component{    
    render(){
        let className=cx({
            font:true
        })

        return (
            <Fragment>
                <div className={className}>这是根据条件添加类名</div>
                <DivStyle>这是用styled-components引入的</DivStyle>
            </Fragment>
        )
    }
}