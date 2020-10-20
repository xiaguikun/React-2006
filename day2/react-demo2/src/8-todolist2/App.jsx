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
    ondel=(index)=>{
        let newArr=this.state.childData.filter((item,ind)=>{
            return index!==ind
        })
        this.setState({
            childData:newArr
        })
    }
    render() {
        return (
            <>
                <Input onHandleClick={this.handleClick} Ind={this.state.ind}></Input>
                <Todo Data={this.state.childData} onChangeInd={this.ondel}></Todo>
            </>
        );
    }
}

export default App;