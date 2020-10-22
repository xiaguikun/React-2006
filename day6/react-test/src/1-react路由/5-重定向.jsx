import React, { Component } from 'react';

import {Route,Link,Switch,Redirect} from 'react-router-dom';

const Home1=()=><h3>home1</h3>

class Home2 extends Component{
    render(){
        return (
            <h3>home2</h3>
        )
    }
}

class Redirect1 extends Component {
    state = {  }
    render() {
        return (
            <>
                <ul>
                    <li><Link to='/home1'>aaaaa</Link></li>
                    <li><Link to='/home2'>bbbbb</Link></li>
                </ul>
                <Switch>
                    <Redirect from='/' exact to='/home1'></Redirect>
                    <Route path='/home1' render={Home1}></Route>
                    <Route path='/home2' component={Home2}></Route>
                </Switch>
            </>
        );
    }
}

export default Redirect1;