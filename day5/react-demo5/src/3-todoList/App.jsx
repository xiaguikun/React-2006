import React, { Component, Fragment } from 'react';

import Input from './Input.jsx';
import List from './List.jsx';

class App extends Component {
    state = {  }
    render() {
        return (
            <Fragment>
                <Input></Input>
                <List></List>
            </Fragment>
        );
    }
}

export default App;