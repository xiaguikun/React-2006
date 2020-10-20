import React from 'react';

//类组件
// export default class Child extends React.Component{
//     static defaultProps={
//         title:'react'
//     }
//     render(){
//        return (
//             <div>{this.props.title}</div>
//        )
//     }
// }


//函数式组件

export default function Child(props){
    return (
    <div>{props.title}</div>
    )
}
Child.defaultProps={
    title:'react'
}