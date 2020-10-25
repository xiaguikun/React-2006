import React, { Component } from 'react';

import Child from './Child.jsx';

class Parent extends Component {
    state = {  }
    fun=()=>{
        if(this.childThis){
            this.childThis.fn('调用了子组件的打印方法');
        }
    }
    render() {
        return (
            <>
                <h3>父组件</h3>
                <button onClick={this.fun}>点击这里将调用子组件的方法</button>
                <Child onRef={(childThis)=>this.childThis=childThis}></Child>
            </>
        );
    }
}

export default Parent;