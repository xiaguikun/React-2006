import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

// const Home1=(props)=>{
//     console.log(props);
//     return <div>11111 {props.match.params.id}</div>
// }

class Home1 extends Component{
    render(){
        console.log(this);
        return <div>22222 {this.props.match.params.id}</div>
    }
}

class Parameter extends Component {
    state = {  }
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="/aaaa">aaaaa</Link></li>
                    <li><Link to="/bbbb">bbbbb</Link></li>
                </ul>
                <Route path="/:id" component={Home1}></Route>
            </Router>
        );
    }
}

export default Parameter ;