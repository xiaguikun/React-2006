import React, { useReducer } from 'react';

const initinalState={
    count:0
}

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {
                count:state.count+action.num
            }
        case 'decrement':
            return {
                count:state.count-action.num
            }
        default:
            return state;
    }

}


const UseReducer=()=>{
    const [state,dispatch] =useReducer(reducer,initinalState);

    const handleDecrement=()=>{
        dispatch({type:'decrement',num:5})
    }
    const handleIncrement=()=>{
        dispatch({type:'increment',num:5})
    }
    return (
        <>
            <button onClick={handleDecrement}> - </button>
            <span> {state.count} </span>
            <button onClick={handleIncrement}> + </button>
        </>
    )
}

export default UseReducer;