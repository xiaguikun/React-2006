import React from 'react';
import ReactDOM from 'react-dom';

//元素与组件(变量与组件)
//组件有分为函数式组件和类组件

////变量
// const app1=<h2> hello world 1</h2>

////函数式组件
// const App2=(props)=>{
// return <h3> hello world 2 {props.title}</h3>
// }

////类组件
// class App3 extends React.Component{
//   render(){
//     return (
//       <Fragment>
//         <h3> hello world {this.props.title}</h3>
//         <h3> hello  {this.props.title}</h3>
//       </Fragment>
//     )
//   }
// }


// class App4 extends React.Component{
//   render(){
//     return (
//       <Fragment>
//         <App2></App2>
//         <App3></App3>
//       </Fragment>
//     )
//   }
// }

import App from './two/parent.jsx';

ReactDOM.render(
  // app1,
  // <App2 title="你好世界"></App2>,
  // <App3 title="你好世界"></App3>,
  // <App4></App4>,
  <App></App>,
  document.getElementById('root')
)














