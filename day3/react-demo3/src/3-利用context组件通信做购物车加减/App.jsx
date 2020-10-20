import React, { Component } from 'react';
import {CountProvider} from './Count.jsx'
import Child from './Child.jsx'

class App extends Component {
    state = {  }
    render() {
        return (
            <CountProvider>
                <Child></Child>
            </CountProvider>
        );
    }
}

export default App;