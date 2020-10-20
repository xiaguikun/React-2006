import React, { Component } from 'react';

import './css.css';

class App extends Component {
    state = { 
        inputValue:'',
        arrContent:[]
     }
     
     changeMsg=(ev)=>{         
            this.setState({
                inputValue:ev.target.value
            })
     }
     doneMsg=(ev)=>{
         let arr=[]
         if(ev.keyCode===13){
            let item=ev.target.value;
            arr=this.state.arrContent;
            arr.push(item);
            this.setState(()=>{
                return {
                    arrContent:arr
                }
            },()=>{
                this.setState({
                    inputValue:''
                })
            })
            this.props.onHandleClick(this.state.arrContent)
         }
     }
    render() {
        return (
            <>
                <input type="text" 
                className='inp' 
                value={this.state.inputValue}
                onChange={this.changeMsg}
                onKeyDown={this.doneMsg}
                onKeyUp={()=>this.props.onHandleClick(this.state.arrContent)}
                />
            </>
        );
    }
}

export default App;