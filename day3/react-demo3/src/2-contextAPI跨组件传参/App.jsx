import React, { Component } from 'react';

import {testContent,Provider,Consumer} from './testContent.js'

class Child1 extends Component {
    static contextType=testContent;
    state = {  }
    render() {
        return (
            <>
                <div>child1++++++++{this.context}</div>
            </>
        );
    }
}

const Child4 = () => {
    return (
        <>
            <div>child4</div>
            <Consumer>
                {
                    (value)=>{
                        return (
                        <div>{value}</div>
                        )
                    }
                }
            </Consumer>
        </>
    );
}
const Child3 = () => {
    return (
        <>
            <Child4></Child4>
        </>
    );
}
class Child2 extends Component {
    state = {  }
    render() {
        return (
            <>
                <Child3></Child3>
            </>
        );
    }
}


class App extends Component {
    state = {  }
    render() {
        return (
            <Provider value='helloWorld'>
                <Child1></Child1>
                <Child2></Child2>
            </Provider>
        );
    }
}

export default App;