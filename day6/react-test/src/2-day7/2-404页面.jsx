import React, { Component } from 'react';
//写404页面，一定要写在Switch中，写在最后

import {Route,Link,Redirect,Switch} from 'react-router-dom';

const Home1=()=><h3>home1</h3>
const Home2=()=><h3>home2</h3>
const Home3=()=><h3>home3</h3>
const NoM=()=><h3> 404 </h3>

class NoMatch extends Component {
    state = {  }
    render() {
        return (
            <>
                <ul>
                    <li><Link to='/home1' >home1</Link></li>
                    <li><Link to='/home2' >home2</Link></li>
                    <li><Link to='/home3' >home3</Link></li>
                </ul>
                <Switch>
                    <Redirect exact from='/' to='/home1'></Redirect>
                    <Route path='/home1'><Home1></Home1></Route>
                    <Route path='/home2'><Home2></Home2></Route>
                    <Route path='/home3'><Home3></Home3></Route>
                    <Route path='*'><NoM></NoM></Route>
                </Switch>
            </>
        );
    }
}

export default NoMatch;