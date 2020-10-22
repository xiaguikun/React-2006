import React, { Component } from 'react';

import {Route,NavLink,Switch} from 'react-router-dom';

import './style.css';

const Home1=()=><h3>home1</h3>
const Home2=()=><h3>home2</h3>
const Home3=()=><h3>home3</h3>

class Light extends Component {
    state = {  }
    render() {
        return (
            <>
                <ul>
                    <li><NavLink to='/home1' activeClassName='one'>home1</NavLink></li>
                    <li><NavLink to='/home2' >home2</NavLink></li>
                    <li><NavLink to='/home3' >home3</NavLink></li>
                </ul>
                <Switch>
                    <Route path="/home1"  component={Home1}></Route>
                    <Route path="/home2"  component={Home2}></Route>
                    <Route path="/home3"  component={Home3}></Route>
                </Switch>
            </>
        );
    }
}

export default Light;