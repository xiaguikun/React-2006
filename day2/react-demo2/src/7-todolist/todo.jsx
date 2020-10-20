import React, { Component } from 'react';

import './css.css';


class App extends Component {
    state = { 
        todoData:[]
     }
    // setState({
    //         todoData
    //     })
    onDel(ind){
        // this.props.Data.splice(ind,1)
        // this.setState({
        //     todoData:this.props.Data
        // })
        // this.state.todoData.splice(ind,1)
        console.log(this.state.todoData);
        let arr1=this.state.todoData.slice(0,ind)
        let arr2=this.state.todoData.slice(ind+1)
        let arr=arr1.concat(arr2)
        console.log(arr);
        this.setState({
                todoData:arr
            })
            console.log(this.state.todoData);
        
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps);
        let arr=nextProps.Data;
        this.setState({
            todoData:arr
        })
        // console.log(this.state.todoData)
    }
    render() {
        return (
            <>
                {/* <ul className='ul'>
                    {
                        this.props.Data.map((item,index)=>{
                            return (
                            <li key={index} className='li'>
                                {item}
                                <button className="btn" onClick={()=>this.onDel(index)}>删除</button>
                            </li>                            
                            )
                        })
                    }
                </ul> */}
                <ul className='ul'>
                    {
                        this.state.todoData.map((item,index)=>{
                            return (
                            <li key={index} className='li'>
                                {item}
                                <button className="btn" onClick={()=>this.onDel(index)}>删除</button>
                            </li>                            
                            )
                        })
                    }
                </ul>
            </>
        );
    }
}

export default App;