import React, { Component } from 'react';

class Child2 extends Component {
    state = { 
        msg4:4,
        prevB:''
     }

     //getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
     //有两个参数nextProps  prevState
     //使用时要变成静态的，前面加一个static
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('getDerivedStateFromProps5555555555555');
        console.log(nextProps);
        console.log(prevState);
        if(prevState.prevB===nextProps.data5){
            return null
        }else{
            return {
                msg4:nextProps.data5,
                prevB:nextProps.data5
            }
        }
    }
    render() {
        return (
            <>
                <p>生命周期16.4版本</p>
                <p>{this.state.msg4}</p>
            </>
        );
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                msg4:66666
            })
        },4500)
    }

    //getSnapshotBeforeUpdate() 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。
    // getSnapshotBeforeUpdate必须要配合componentDidUpdate()来使用
    getSnapshotBeforeUpdate(prevProps,prevState){
        return null
    }

    componentDidUpdate(){
        
    }
}

export default Child2;