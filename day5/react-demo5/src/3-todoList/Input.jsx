import React, { Component, Fragment } from 'react';

import {connect} from 'react-redux';

import {pushDataAction} from './store/createAction';

const mapStateToProps=()=>{
    return {}
}

const mapDispatchToProps=(dispatch)=>{
    return {
        pushData(task){
            dispatch(pushDataAction(task))
        }
    }
}

class Input extends Component {
    state = { 
        textValue:''
     }
     handleChange=(ev)=>{
        this.setState({
            textValue:ev.target.value
        })
     }
     handleKey=(ev)=>{
         if(ev.keyCode===13){
            this.props.pushData(this.state.textValue)
            this.setState({
                textValue:''
            })
         }
     }
    render() {
        return (
            <Fragment>
                <input type="text"
                 value={this.state.textValue}
                 onChange={this.handleChange}
                 onKeyUp={this.handleKey}
                 />
            </Fragment>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Input);