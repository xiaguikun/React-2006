import React, { Component, Fragment } from 'react';

import store from './store.js';

class App extends Component {
    state = {  }
    decrement=(num)=>{
        store.dispatch({
            type:'decrement',
            num:num
        })
    }
    increment=(num)=>{
        return ()=>{
            store.dispatch({
                type:'increment',
                num:num
            })
        }
    }
    render() {
        return (
            <Fragment>
                <button onClick={()=>this.decrement(3)}> - </button>
                <span> {store.getState().count} </span>
                <button onClick={this.increment(5)}> + </button>
            </Fragment>
        );
    }
}

export default App;