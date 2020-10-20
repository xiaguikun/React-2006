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
    //  fn=()=>{
    //      let Arr=this.arrContent;
    //      Arr.splice(this.props.Ind,1);
    //      this.setState({
    //          arrContent:Arr
    //      })
    //  }
    //  fn();
     doneMsg=(ev)=>{
         let arr=[]
         if(ev.keyCode===13){
            let item=ev.target.value;
            arr=this.state.arrContent;
            arr.push(item);
            if(this.props.Ind>0){
                arr.splice(this.props.Ind,1)
            }
            this.setState(()=>{
                return {
                    arrContent:arr
                }
            },()=>{
                // console.log(this.state.inputValue);
                // console.log(this.state.arrContent);
                this.setState({
                    inputValue:''
                })
            })

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