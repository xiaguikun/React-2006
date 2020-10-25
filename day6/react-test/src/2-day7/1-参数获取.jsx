import React, { Component } from 'react';
//路由传参
//1.动态路由传参(在path中加入/:id ,在to的时候加入参数，在组件中接收打印出来通过props.match.params.id获得参数,或者可以通过Hooks中的useParams()来直接得到id)
//2.to属性加对象 (用hooks中的useLocation)
//3.search传值，接收的时候可以考虑URLSerachParams,使用URLSearchParams时search=new URLSearchParams(location.search)，然后通过实例化后的里面的get方法得到对应的值，search.get('id')

//Hooks中有useHistory  useLocation  useParams  useRouteMatch

import {Route,Link,Switch, useParams,useLocation} from 'react-router-dom';

const Home1=(props)=>{
  console.log(useParams());
  // console.log(useHistory());
  // console.log(useRouteMatch());
  // console.log(props);
  return (
  <h3>动态路由传参 + {props.match.params.id} +{useParams().id}</h3>
  )
}

const Home2=()=>{
  console.log(useLocation());
  let location=useLocation()
  return (
  <h3>to属性里加对象 + {location.state.id} </h3>
  )
}

const Home3=()=>{
  let location=useLocation();
  let search=new URLSearchParams(location.search);
  console.log(search.get('id'));
  return (
  <h3>使用URLSerachParams方法 + {search.get('id')}</h3>
  )
}


class Params extends Component {
  state = {  }
  render() {
    return (
      <>
        <ul>
          <li><Link to='/home1/1212'>动态路由传参</Link></li>

          <li><Link to={{
            pathname:'/home2',
            search:'?name=zhangsna&age=22',
            hash:'#then-hash',
            state:{id:20}
          }}>to属性加对象</Link></li>
          <li><Link to='/home3?id=40&name=zhangsan'>使用URLSerachParams方法</Link></li>
        </ul>
        
        <Switch>
          <Route path='/home1/:id' render={(props)=><Home1 {...props}></Home1>}></Route>
          <Route path='/home2'><Home2></Home2></Route>
          <Route path='/home3' component={Home3}></Route>
        </Switch>
      </>
    );
  }
}

export default Params;