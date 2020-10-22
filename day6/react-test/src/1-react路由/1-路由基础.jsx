import React, { Component } from 'react';

import {BrowserRouter as Router , Route, Link,Switch} from 'react-router-dom';

const Home=()=><div>Home</div>
const About=()=><div>About</div>
const Dashboard=()=><div>Dashboard</div>

class Basic extends Component {
    state = {  }
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
                {/* react路由默认是包容性路由 */}
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <hr/>
                {/* Switch包裹起来的将将路由变成排他性 */}
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                </Switch>

            </Router>
        );
    }
}


export default Basic ;