import React, { Component,createRef } from 'react';

class files extends Component {
    constructor(props){
        super(props);
        this.inputFile=createRef()
        this.handleClick=this.handleClick.bind(this)
    }
    state = { 

     }
    handleClick(ev){
        ev.preventDefault();
        console.log(this.inputFile);
        console.log(this.inputFile.current.files[0].name);

    }
    render() {
        return (
            <>
                <form action="" onSubmit={this.handleClick}>
                    <input type="file" ref={this.inputFile} multiple="multiple" />
                    <input type="submit" value="提交"  />
                </form>
            </>
        );
    }
}

export default files;