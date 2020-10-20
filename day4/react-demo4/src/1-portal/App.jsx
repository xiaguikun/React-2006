import React, { Component } from 'react';
import Modal from './Modal.jsx';

class App extends Component {
    state = { 
        isShow:false
     }
    handleOpen=(ev)=>{
        ev.stopPropagation();
        this.setState({
            isShow:true
        })
     }
    handleClose=(ev)=>{
        this.setState({
            isShow:false
        })
    }
    render() {
        return (
            <div onClick={this.handleClose}>
                <div>
                    <button onClick={this.handleOpen}> open </button>
                </div>
                <Modal flag={this.state.isShow}></Modal>
            </div>
        );
    }
}

export default App;