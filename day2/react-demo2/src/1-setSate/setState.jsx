import React, { Component,Fragment } from 'react';

class App extends Component {
    //申明式
    // state = { 
    //     msg:'申明式定义state'
    //  }
     //构造函数式
     constructor(props){
        super(props);
        this.state={
            msg2:'这是构造函数式定义state',
            isShow:true
        }
     }
     handleClick(){
         //setState 第一种写法，一个参数，是对象
        //  this.setState({
        //      isShow:!this.state.isShow
        //  })
         //setState 第二种写法 两个参数，函数，回调函数
         //第一个参数时函数，两个参数，第一个参数时prevState 第二个参数使props
         //第二个参数是回调函数
         this.setState((prevValue,props)=>{
            return {
                isShow:!prevValue.isShow
            }
         },()=>{})
     }
    render() {
        return (
            <Fragment>
                {/* <div>{this.state.msg}</div> */}
                {
                    this.state.isShow && <div>{this.state.msg2}</div>
                }
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.isShow ? '隐藏' : '显示'}
                </button>
            </Fragment>
        );
    }
}

export default App;