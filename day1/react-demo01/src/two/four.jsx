import React ,{Fragment}from 'react';

class Child3 extends React.Component{
    //申明式定义state
    state={
        msg:'state数据',
        isShow:true,
        arr:[1,2,3]
    }


    //使用构造函数的方式定义state 
    // constructor(){
    //     super();
    //     this.state={
    //         msg:'state'
    //     }
    // }

    render(){
        return (
            <Fragment>
                <div>{this.state.msg}</div>
                {
                    this.state.isShow?<div>{this.state.msg}</div>:null
                }
                <ul>
                    {
                        this.state.arr.map((item,index)=>{
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
                
            </Fragment>
        )
    }
}

export default Child3