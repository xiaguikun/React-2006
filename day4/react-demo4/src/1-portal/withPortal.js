import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const withProtal =(Comp)=>{
    return class extends Component{
        render(){
            return ReactDOM.createPortal (
                    <Comp {...this.props}></Comp>,
                    document.querySelector('body')
            )
        }
    }
}

export default withProtal;