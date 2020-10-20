import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            inputValue:'hello',
            textareaValue:'world',
            selectValue:['2']
        }
    }
    handerClick1=(ev)=>{
        this.setState({
            inputValue:ev.target.value
        })
    }
    handerClick2=(ev)=>{
        this.setState({
            textareaValue:ev.target.value
        })
    }
    handerClick3=(ev)=>{
        this.setState({
            selectValue:ev.target.value
        })
    }
    handleSubmit=()=>{
       return (ev)=>{
            ev.preventDefault();
            console.log(this.state.inputValue);
            console.log(this.state.textareaValue);
            console.log(this.state.selectValue);
       }
    }
    render() {
        return (
            <>
                <form action="" onSubmit={this.handleSubmit()}>
                <input type="text" value={this.state.inputValue} onChange={this.handerClick1}/>
                <br/>
                <textarea value={this.state.textareaValue} onChange={this.handerClick2}></textarea>
                <br/>
                <select value={this.state.selectValue} onChange={this.handerClick3} multiple>
                    <option value="1">北京</option>
                    <option value="2">上海</option>
                    <option value="3">广州</option>
                </select>
                <br/>
                <input type="submit" value='提交' />
                </form>
            </>
        );
    }
}

export default App;