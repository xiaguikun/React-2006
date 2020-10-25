import React, { Component } from 'react';

import {Route, Switch,Link} from 'react-router-dom';

const Sandwiches=()=><h3>Sandwiches</h3>
const Tacos=({routes})=>{
  console.log(routes);
  return (
        <>
          <h3>tacos</h3>
          <ul>
            {
              routes.map((item,index)=>{
              return <li key={index}><Link to={item.path}>{item.path.slice(1)}</Link></li>
              })
            }
          </ul>
            {
              routes.map((item,index)=>{
                return (
                  <RouteWithSubRoutes key={index} {...item}></RouteWithSubRoutes>
                )
              })
            }
        </>
  )
}
const Bus=()=><h3>Bus</h3>
const Cart=()=><h3>Cart</h3>

const routes = [
    {
      path: "/sandwiches",
      component: Sandwiches
    },
    {
      path: "/tacos",
      component: Tacos,
      routes: [
        {
          path: "/tacos/bus",
          component: Bus
        },
        {
          path: "/tacos/cart",
          component: Cart
        }
      ]
    }
  ];

function RouteWithSubRoutes(props){
    return (
    <Route  path={props.path} render={()=><props.component {...props}></props.component>}></Route>
    )
}


class RouterConfig extends Component {
    state = {  }
    render() {
        return (
            <>
              <ul>
                {
                  routes.map((item,index)=>{
                    return (
                    <li key={index}><Link to={item.path}>{item.path.slice(1)}</Link></li>
                    )
                  })
                }
              </ul>
              <Switch>
                {
                  routes.map((item,index)=>{
                    return (
                      <RouteWithSubRoutes key={index} {...item}></RouteWithSubRoutes>
                    )
                  })
                }
              </Switch>
            </>
        );
    }
}

export default RouterConfig;