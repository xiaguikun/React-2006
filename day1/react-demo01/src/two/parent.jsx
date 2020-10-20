import React,{Fragment} from 'react';

import Child from "./four.jsx";


export default class Parent extends React.Component{
    render(){
       return (
        <Fragment>
            <div> hello world</div>
            <Child title="你好 世界">
                <p>nihao </p>
            </Child>
        </Fragment>
       )
    }
}