import React, { Component } from 'react';

class Hot extends Component {
    state = {  }
    handleClick=(id)=>()=>{
        console.log(this.props);
        this.props.history.push('/detail/'+id);
    }
    render() {
        return (
            <>
                <h4>热映</h4>
                <h5 onClick={this.handleClick(123)}>影片</h5>
            </>
        );
    }
}

export default Hot;