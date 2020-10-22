import React, { Component } from 'react';
import {Route,Link,Switch} from 'react-router-dom';

const Home1=()=><h3>aaaa</h3>
const Home2=(props)=>{
    console.log(props);
    return <h3>bbbb</h3>
}
const Home5=(props)=>{
    console.log(props);
    return <h3>55555</h3>
}

class Home3 extends Component{
    render(){
        console.log(this);
        return (
            <>
                <h3>cccccc</h3>
            </>
        )
    }
}

class Home4 extends Component{
    render(){
        console.log(this);
        return (
            <>
                <h3>ddddd</h3>
            </>
        )
    }
}

class Render extends Component {
    state = {  }
    render() {
        return (
            <>
                <ul>
                    <li><Link to="/">home1</Link></li>
                    <li><Link to="/home2">home2</Link></li>
                    <li><Link to="/home3">home3</Link></li>
                    <li><Link to="/home4">home4</Link></li>
                </ul>
                {/* component可以渲染类组件和函数组件(可以拿到this.props)
                   render只能接受函数组件，如果非要传入类组件，则用箭头函数，返回值是函数组价的标签(函数组件可以拿到props，类组件需要处理后拿到props)
                   children不管路径有没没有匹配，都会被渲染，不能使用类组件，不在switch中，要不然是排他性，就失效了(函数组件可以拿到props，类组件需要处理后拿到props)
                   在<Route></Route>标签的中间直接写入一个标签 拿不到props*/}
                <Switch>
                    <Route path="/" exact component={Home1}></Route>
                    <Route path="/home2" render={Home2}></Route>
                    {/* <Route path="/home3" component={Home3}></Route> */}
                    <Route path="/home3" render={(props)=><Home3 {...props}></Home3>}></Route>
                    <Route path='/aa' children={Home5}></Route>
                    <Route path='/home4'> <Home4></Home4> </Route>
                </Switch>
                

            </>
        );
    }
}

export default Render;