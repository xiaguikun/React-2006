import React, { Component } from 'react';
import {Route,Link,Switch,Redirect,useParams,useRouteMatch} from 'react-router-dom';

const PEEPS = [
    { id: 0, name: "Michelle", friends: [1, 2, 3] },
    { id: 1, name: "Sean", friends: [0, 3] },
    { id: 2, name: "Kim", friends: [0, 1, 3] },
    { id: 3, name: "David", friends: [1, 2] }
  ];

function find(id){
    return PEEPS.find((item)=>{
        return item.id===+id
    })
}

const Person=()=>{
    let {id} =useParams();
    let {url}=useRouteMatch();
    let obj=find(id)
    return (
        <>
            <h3>{obj.name}'s Friends</h3>
            <ul>
                {
                    obj.friends.map((id,index)=>{
                        return (
                        <li key={index}><Link to={url+'/'+id}>{find(id).name}</Link></li>
                        )
                    })
                }
            </ul>
            <Switch>
                <Route path={url+'/:id'}>
                    <Person></Person>
                </Route>
            </Switch>
        </>
    )
}

class Friend extends Component {
    state = {  }
    render() {
        return (
            <>
                <Switch>
                    <Route path='/:id'>
                        <Person></Person>
                    </Route>
                    <Route path='/'>
                        <Redirect from='/' to='/0'></Redirect>
                    </Route>
                </Switch>
            </>
        );
    }
}

export default Friend;