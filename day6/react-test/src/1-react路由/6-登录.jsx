import React, { Component } from 'react';
import {Route,Link,Switch,Redirect} from 'react-router-dom';

const Home1=()=><h3>home1</h3>
// const Home2=()=><h3>home2</h3>

class Log extends Component{
    handle=()=>{
        console.log(this);
        localStorage.setItem('loginI','asdada')
        this.props.history.push('/home2')

    }
    render(){
        return(
            <>
                <h3>请登录</h3>
                <button onClick={this.handle}> denglu </button>
            </>
        )
    }
}


class Home2 extends Component{
    render(){
        return (
            <>
               {
                   localStorage.getItem('loginI') ? <h3>home2</h3> : <Redirect from='/home2' to='/login'></Redirect>
               }
            </>
        )
    }
}



class Login extends Component {
    state = {  }
    render() {
        return (
            <>
                <ul>
                    <li><Link to='/home1'>home1</Link></li>
                    <li><Link to='/home2'>home2</Link></li>
                </ul>
                <Switch>
                    <Route path='/home1' exact component={Home1}></Route>
                    <Route path='/login' component={Log}></Route>
                    <Route path='/home2' component={Home2}></Route>
                </Switch>
            </>
        );
    }
}

export default Login;