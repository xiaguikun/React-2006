import React, { Component } from 'react';

import {Route,Link,Switch} from 'react-router-dom';
import './three.css';

const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <h2>Home</h2>
    },
    {
      path: "/bubblegum",
      sidebar: () => <div>bubblegum!</div>,
      main: () => <h2>Bubblegum</h2>
    },
    {
      path: "/shoelaces",
      sidebar: () => <div>shoelaces!</div>,
      main: () => <h2>Shoelaces</h2>
    }
  ];

class sideBar extends Component {
    state = {  }
    render() {
        return (
            <>
                <div className='box'>
                    <aside className='aside'>
                        <ul>
                        {
                            routes.map((item,index)=>{
                            return (
                            <div key={index}>
                                <li><Link to={item.path}>{item.path==='/' ? 'home' : item.path.slice(1)}</Link></li>
                            </div>
                            )
                            })
                            
                        }
                        </ul>
                        <Switch>
                            {
                                routes.map((item,index)=>{
                                    return (
                                        <Route exact={item.exact} key={index} path={item.path} component={item.sidebar}></Route>
                                    )
                                })
                            }
                        </Switch>
                    </aside>
                    <main className='main'>
                        <Switch>
                        {
                            routes.map((item,index)=>{
                                return (
                                        <Route exact={item.exact}  path={item.path} key={index} component={item.main}></Route>
                                )
                            })
                        }
                        </Switch>

                    </main>
                </div>
            </>
        );
    }
}

export default sideBar;