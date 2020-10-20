import React, { Component } from 'react';
import Child1 from './children1.jsx';
import Child2 from './children2.jsx';

class parent extends Component {
    state = { 
        data1:''
     }
    handleClick(data){
        this.setState({
            data1:data
        })
    }
    render() {
        return (
            <>
                <div>数据传参</div>
                <Child1 onHandleClick={this.handleClick.bind(this)}></Child1>
                <Child2 num={this.state.data1}></Child2>
            </>
        );
    }
}

export default parent;