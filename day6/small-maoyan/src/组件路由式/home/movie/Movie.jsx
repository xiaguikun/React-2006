import React, { Component } from 'react';
import {Route,NavLink,Switch, Redirect} from 'react-router-dom';
import './movieStyle.css';

import Hot from './hot/Hot.jsx';
import Cinema from './cinema/Cinema.jsx';
import Wait from './wait/Wait.jsx';

class Movie extends Component {
    state = {  }
    render() {
        return (
            <>
                <ul className='nav'>
                    <li><NavLink to='/home/movie/hot'>热映</NavLink></li>
                    <li><NavLink to='/home/movie/cinema'>影院</NavLink></li>
                    <li><NavLink to='/home/movie/wait'>待映</NavLink></li>
                </ul>
                <Switch>
                    <Redirect from='/home/movie' to='/home/movie/hot' exact></Redirect>
                    <Route path='/home/movie/hot' component={Hot}></Route>
                    <Route path='/home/movie/cinema' component={Cinema}></Route>
                    <Route path='/home/movie/wait' component={Wait}></Route>
                </Switch>
            </>
        );
    }
}

export default Movie;