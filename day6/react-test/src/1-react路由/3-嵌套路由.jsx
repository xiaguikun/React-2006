import React, { Component } from 'react';
import {Route,Link,Redirect,Switch} from 'react-router-dom';

const Home=()=><h3>home</h3>

const Nav1=()=><h3>nav1</h3>
const Nav2=()=><h3>nav2</h3>
const Nav3=()=><h3>nav3</h3>
const Nav4=()=><h3>login</h3>

const Nav=(props)=>{
    console.log(props);
    let {url}=props.match
    return (

        <>  
            <h2>Nav</h2>
            <ul>
                <li><Link to="/nav/nav1">nav1</Link></li>
                <li><Link to="/nav/nav2">nav2</Link></li>
                <li><Link to={`${url}/nav3`}>nav3</Link></li>
            </ul>
            <Switch>
                <Redirect exact from="/nav" to="/nav/nav1"></Redirect>
                <Route path="/nav/nav1"><Nav1></Nav1></Route>
                <Redirect exact from="/nav/nav2" to="/nav/nav4"></Redirect>
                <Route path="/nav/nav2"><Nav2></Nav2></Route>
                <Route path="/nav/nav3"><Nav3></Nav3></Route>
                <Route path="/nav/nav4"><Nav4></Nav4></Route>
            </Switch>
                {/* <Route path="/nav/nav1" component={Nav1}></Route>
                <Route path="/nav/nav2" component={Nav2}></Route>
                <Route path="/nav/nav3" component={Nav3}></Route>
                <Route path="/nav/nav4" component={Nav4}></Route>
                <Redirect from="/nav/nav2" to="/nav/nav4"></Redirect> */}
            
        </>
    )
}

class Nest extends Component {
    state = {  }
    render() {
        return (
            <>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/nav">nav</Link></li>
                </ul>
                <hr/>
                <hr/>
                <Route path="/" exact component={Home}></Route>
                <Route path="/nav" component={Nav}></Route>
            </>
        );
    }
}

export default Nest;