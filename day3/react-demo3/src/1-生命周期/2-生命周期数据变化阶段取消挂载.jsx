import React, { Component } from 'react';

class Child1 extends Component {
    state = { 
        msg3:3
     }

    //数据改变阶段有两种  来自父组件的props改变  自身的state改变
    //props改变  UNSAFE_componentWillReceiveProps()  shouldComponentUpdate()  UNSAFE_componentWillUpdate()  render() componentDidUpdate()
    //state改变 shouldComponentUpdate  UNSAFE_componentWillUpdate() render() componentDidUpdate()
    
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                msg3:33
            })
        },4000)
        
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        // 父组件传递过来的props发生改变的时候触发
        console.log('UNSAFE_componentWillReciveProps');
        // 很像props的监听，被废弃了，有更好的钩子来代替它
        // vue里面只有发生改变的触发，在react里面无脑触发
        console.log(this.props);
        console.log(nextProps);
    }

    shouldComponentUpdate(nextProps,nextState){
         // return false // true 表示放行，render就会执行多次，在这里判断是否需要去执行多次
        // if(nextProps.data1===this.props.data1){
        //     return false
        // }else{
        //     return true
        // }
        if(nextState.msg3===this.state.msg3){
            return false;
        }else{
            return true;
        }        
    }

    UNSAFE_componentWillUpdate(){
        //被废弃了
        console.log('UNSAFE_componentWillUpdate');
    }
    
    render() {
        console.log('child-render');
        return (
            <>
                <p>{this.props.data1}</p>
                <p>{this.state.msg3}</p>
            </>
        );
    }

    componentDidUpdate(){
        //这里不要去改变数据，要不然就会进入死循环
        console.log('componentDidUpdate');
    }


    //state改变
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('shouldComponentUpdate-state');
    //     return true;
    // }

    // componentWillUpdate(){
    //     //组件数据修改前
    // }
    //render(){}
    //componentDidUpdate(){}


    //componentWillUnmount

}

export default Child1;