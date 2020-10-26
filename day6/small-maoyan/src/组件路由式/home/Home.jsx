import React, { Component } from 'react';
import {Route,Switch,NavLink} from 'react-router-dom';
import './style.css';
import {Movie} from './movie/index.js'

class Home extends Component {
    state = {  }
    render() {
        return (
            <>
                <Switch>
                    <Route path='/home/movie' component={Movie}></Route>
                </Switch>
                <footer>
                    <NavLink to='/home/movie'>电影</NavLink>
                    <NavLink to='/home/video'>视频</NavLink>
                    <NavLink to='/home/smallVideo'>小视频</NavLink>
                    <NavLink to='/home/mine'>我的</NavLink>
                </footer>
            </>
        );
    }
}

export default Home;