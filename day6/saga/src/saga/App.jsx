import React, { Component } from 'react';

import {connect} from 'react-redux';

const mapStateToProps=(state)=>{
    return state
}
const mapDisPatchToProps=(dispatch)=>{
     return {
        changeCount(){
            dispatch({
                type:'countAdd'
            })
        }
     }
}


class App extends Component {
    state = {  }
    render() {
        console.log(this.props);
        return (
            <>
                <div>{this.props.count}</div>
                <button onClick={this.props.changeCount}>btn</button>
            </>
        );
    }
}

export default connect(mapStateToProps,mapDisPatchToProps)(App);