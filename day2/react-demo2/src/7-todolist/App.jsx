import React, { Component } from 'react';

import Input from './input.jsx';
import Todo from './todo.jsx';

class App extends Component {
    state = { 
        childData:[],
        ind:-1
     }
    handleClick=(props)=>{
        // console.log(props);
        this.setState({
            childData:props
        })
    }
    ondel=(props)=>{
        this.setState({
            ind:props
        })
    }
    render() {
        return (
            <>
                <Input onHandleClick={this.handleClick} Ind={this.state.ind}></Input>
                <Todo Data={this.state.childData} onDel={this.ondel}></Todo>
            </>
        );
    }
}

export default App;