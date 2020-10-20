import React, { Component,createRef } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.ipt=createRef();
        this.handleChange2=this.handleChange2.bind(this)
    }
    state = { 
        Value:'hello',
        Value2:'world'
     }
     //受控组件的
     handleChange=(ev)=>{
        this.setState({
            Value:ev.target.value
        })
     }
     //非受控组件的
     handleChange2(){
        console.log(this.ipt);
        this.setState(()=>{
            return{
                Value2:this.ipt.current.value
            }
        })
     }
    render() {
        return (
            <>
                <input type="text" 
                value={this.state.Value}
                onChange={this.handleChange}
                />
                <br/>
                <br/>
                <input type="text" 
                ref={this.ipt}
                onInput={this.handleChange2}
                />
            </>
        );
    }
    componentDidMount(){
        setTimeout(()=>{
            console.log(this.state.Value);
            console.log(this.state.Value2);
        },3000)
    }
}

export default App;