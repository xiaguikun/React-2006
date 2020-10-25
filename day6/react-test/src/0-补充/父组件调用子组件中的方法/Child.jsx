import React, { Component } from 'react';

class Child extends Component {
    constructor(props){
        super(props)
        if(props.onRef){
            props.onRef(this);
        }
    }
    state = {  }
    fn=(msg)=>{
        console.log(msg);
    }
    render() {
        return (
            <>
                <h4>子组件</h4>
            </>
        );
    }
}

export default Child;