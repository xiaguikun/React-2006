import React, { Component } from 'react';

class manyChange extends Component {
    state = { 
        checkboxValue:true,
        num:2
     }
    handleClick=(ev)=>{
        let value=ev.target.type==='checkbox' ? ev.target.checked : ev.target.value
        let name=ev.target.name
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <>
                <form action="">
                    <label htmlFor="one">参与</label>
                    <input type="checkbox" id='one'
                     value={this.state.checkboxValue}
                     onChange={this.handleClick} 
                     name="checkboxValue" 
                    />

                    <label htmlFor="two">人数</label>
                    <input type="number" id="two" 
                    value={this.state.num} 
                    onChange={this.handleClick} 
                    name="num" 
                    />
                </form>
            </>
        );
    }
}

export default manyChange;