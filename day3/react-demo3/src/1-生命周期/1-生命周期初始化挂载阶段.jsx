import React, { Component } from 'react';

import Child1 from './2-生命周期数据变化阶段取消挂载.jsx';
import Child2 from './3-生命周期16.4版本.jsx';

class App extends Component {
    // constructor就是Initialization阶段的生命周期钩子
    // 一定是最先执行的，只执行一次，一定会执行，在这一阶段设置属性和状态
    constructor(props){
        super(props);
        this.state={
            msg1:1,
            msg5:5
        }
        //静态状态
        this.staticState={
            msg2:2
        }
    }


    //Mounting      UNSAFE_componentWillMount()   render()     componentDidMount()

    UNSAFE_componentWillMount(){
        console.log('componentWillMount');
        this.setState({
            msg1:11
        })
        this.staticState.msg2=22
    }
    render() {
        //父组件执行render()，那么子组件也一定会执行render()    补充：在初始挂载渲染时先渲染子组件再渲染父组件
        console.log('render');
        return (
            <>
                <h1>生命周期</h1>
                <p>{this.state.msg1}</p>
                <Child1 data1={this.state.msg1}></Child1>
                <Child2 data5={this.state.msg5}></Child2>
            </>
        );
    }
    componentDidMount(){
        console.log('componentDidMount');
        //表示组件挂载后，可以修改数据，请求数据

        setTimeout(()=>{
            this.setState({
                msg1:111,
                msg5:555
            })
        },2000)
    }
}

export default App;