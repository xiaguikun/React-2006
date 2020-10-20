import React, { Component } from 'react';
import {CountConsumer} from './Count.jsx';

class Child extends Component {
    state = {  }
    render() {
        return (
            <CountConsumer>
                {
                    (value)=>{
                    return (
                    <>
                    <button onClick={()=>value.decrement(2)}> -- </button>
                    <button onClick={value.decrement}> - </button>
                    <span style={{marginLeft:10,marginRight:10}}>{value.count}</span>
                    <button onClick={value.increment}> + </button>
                    <button onClick={()=>value.increment(2)}> ++ </button>
                    </>
                    )
                    }
                }
            </CountConsumer>
        );
    }
}

export default Child;