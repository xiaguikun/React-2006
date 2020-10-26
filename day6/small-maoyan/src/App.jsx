import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';

import {Home} from './组件路由式/home/index.js';
import {Detail} from './组件路由式/detail/index.js';

class App extends Component {
    state = {  }
    render() {
        return (
            <>
                <Switch>
                    <Redirect from='/' to='/home/movie' exact></Redirect>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/detail/:id' component={Detail}></Route>
                </Switch>
            </>
        );
    }
}

export default App;