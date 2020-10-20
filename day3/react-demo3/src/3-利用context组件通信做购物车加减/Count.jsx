import React, { Component,createContext } from 'react';

const testContent=createContext();
const {Provider,Consumer:CountConsumer} =testContent;


class CountProvider extends Component {
    state={
        count:1
    }
    increment=(num)=>{
        if(num>1){
            this.setState((prevState,props)=>{
                return{
                    count:prevState.count+num
                }
            })
        }else{
            this.setState((prevState,props)=>{
                return{
                    count:prevState.count+1
                }
            })
        }
        
    }
    decrement=(num)=>{
        if(num>1){
            this.setState((prevState,props)=>{
                return{
                    count:prevState.count-num
                }
            })
        }else{
            this.setState((prevState,props)=>{
                return{
                    count:prevState.count-1
                }
            })
        }
    }
    render() {
        return (
            <Provider value={{
                count:this.state.count,
                increment:this.increment,
                decrement:this.decrement
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export {
    CountProvider,
    CountConsumer,
    testContent
}