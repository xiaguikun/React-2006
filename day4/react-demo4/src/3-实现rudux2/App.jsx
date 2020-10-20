import React, { Component, Fragment } from 'react';

import store from './store.js'

class App extends Component {
    state = {  }
    render() {
        return (
            <Fragment>
                <button onClick={()=>store.dispatch({type:'decrement'})}> - </button>
                <span id="count"></span>
                <button onClick={()=>store.dispatch({type:'increment'})}> + </button>
            </Fragment>
        );
    }
    componentDidMount(){
        store.dispatch();
    }
}

export default App;