import React, { Component } from 'react';

import {Route,Switch,withRouter} from 'react-router-dom';

const Home1=()=><h3>home1</h3>
const Home2=()=><h3>home2</h3>
const Home3=()=><h3>home3</h3>

class Tag extends Component{
  state={
    list:['home1','home2','home3'],
    // index:-1
  }
  changeUrl=(item)=>()=>{
    this.props.history.push(item)
  }
  // changeUrl2=(item,index)=>()=>{
  //   this.props.history.push(item);
  //   this.setState({
  //     index:index
  //   })
  // }
  render(){
    console.log(this);
    let pathName=this.props.location.pathname;
      return (
        this.state.list.map((item,index)=>{
          return (
            
            <li key={index} onClick={this.changeUrl(item)}>
              {pathName==='/'+item ? '>' :''}
              {item}
              </li>
           
          )
        })
      )
  }
}

const Tag2=withRouter(Tag)

class ChangeTag extends Component {
  state = {  }
  render() {
    return (
    <>
        <Tag2></Tag2>
        <Switch>
            <Route path="/home1"  component={Home1}></Route>
            <Route path="/home2"  component={Home2}></Route>
            <Route path="/home3"  component={Home3}></Route>
        </Switch>
      </>
    );
  }
}

export default ChangeTag;