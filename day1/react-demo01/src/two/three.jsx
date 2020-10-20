import React from 'react';
import PropTypes from 'prop-types';

//类组件
export default class Child2 extends React.Component{
    static defaultProps={
        title:'react'
    }
    render(){
       return (
            <>
            <div>{this.props.title}</div>
            { this.props.children}
            </>
       )
    }
}
Child2.propTypes={
     title:PropTypes.string   
}

