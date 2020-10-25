import React, { Component } from 'react';

import {Route,NavLink,Switch} from 'react-router-dom';
import './indStyle.css';


const Index1=({routes})=>{
    console.log(routes);
    return(
        <>
            <h3>电影</h3>
            <ul className='ul'>
                {
                    routes.map((item,index)=>{
                    return <li key={index} ><NavLink to={item.path}>{item.title}</NavLink></li>
                    })
                }
            </ul>
            <Switch>
                {
                    routes.map((item,index)=>{
                        return <WithRoute key={index} {...item}></WithRoute>
                    })
                }
            </Switch>
        </>
    )
}
const Index2=()=>{
    return <h3>视频</h3>
}
const Index3=()=>{
    return <h3>小视频</h3>
}
const Index4=()=>{
    return <h3>演出</h3>
}
const Index5=()=>{
    return <h3>我的</h3>
}

const One=()=><h3>one</h3>
const Two=()=><h3>two</h3>
const Three=()=><h3>three</h3>
const routes=[
    {
        path:'/index1',
        component:Index1,
        title:'电影',
        routes:[
            {
                path:'/index1/one',
                component:One,
                title:'one'
            },
            {
                path:'/index1/two',
                component:Two,
                title:'two'
            },
            {
                path:'/index1/three',
                component:Three,
                title:'three'
            }
        ]
    },
    {
        path:'/index2',
        component:Index2,
        title:'视频'
    },
    {
        path:'/index3',
        component:Index3,
        title:'小视频'
    },
    {
        path:'/index4',
        component:Index4,
        title:'演出'
    },
    {
        path:'/index5',
        component:Index5,
        title:'我的'
    },
]


function WithRoute(props){
    return <Route path={props.path} render={()=><props.component {...props}></props.component>}></Route>
}



class App extends Component {
    state = {  }
    render() {
        return (
            <>
                <ul className='footer'>
                    {
                        routes.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <NavLink  to={item.path==='/' ? '/index1' : item.path}>{item.title}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <Switch>
                    {
                        routes.map((item,index)=>{
                            return <WithRoute key={index} {...item}></WithRoute>
                        })
                    }
                </Switch>
            </>
        );
    }
}

export default App;