import React, { Component, Fragment } from 'react';

import {dispatch} from './store.js';

class App extends Component {
    state = {  }
    render() {
        return (
            <Fragment>
                <button onClick={()=>dispatch({type:'decrement'})}> - </button>
                <span id="count"></span>
                <button onClick={()=>dispatch({type:'increment'})}> + </button>
            </Fragment>
        );
    }
    componentDidMount(){
        dispatch()
    }
}

export default App;