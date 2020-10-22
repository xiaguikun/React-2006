import React, { Component } from 'react';

import { Route,Link} from 'react-router-dom';

const Home=()=><div>Home</div>
const About=()=><div>About</div>
const Dashboard=()=><div>Dashboard</div>


class Basic extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Dashboard'>Dashboard</Link></li>
                </ul>
                <Route path="/" exact component={Home}></Route>
                <Route path="/About" component={About}></Route>
                <Route path="/Dashboard" component={Dashboard}></Route>
            </>
        );
    }
}

export default Basic;