import React, { Component } from 'react';

class Aoo extends Component {
    state = { 
        msg1:'<p>这是p标签渲染出来的数据</p>',
        list:[{
            id:1,
            name:'张三',
            age:25
        },{
            id:2,
            name:'李四',
            age:25
        }],
        isShow:true
     }

    handleClick=()=>{
         this.setState((prevValue,props)=>{
            return {
                isShow:!prevValue.isShow
            }
         })
     }
    render() {
        return (
            <>
                <div dangerouslySetInnerHTML={{__html:this.state.msg1}}></div>
                <div className="font"></div>
                <label htmlFor="abc">input</label>
                <input type="text" id='abc' />
                <ul>
                    {
                        this.state.list.map((item)=>{
                            return (
                                <li key={item.id}>
                                    {item.name}-{item.age}
                                </li>
                            )
                        })
                    }
                </ul>
                <div onClick={this.handleClick}>
                    {
                        this.state.isShow ? '❤️取消' : '🖤收藏'
                    }
                </div>
            </>
        );
    }
}

export default Aoo;