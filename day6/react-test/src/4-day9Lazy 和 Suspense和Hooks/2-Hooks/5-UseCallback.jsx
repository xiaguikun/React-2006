import React,{useState,useCallback,memo} from 'react';

const Child=memo((props)=>{
    console.log('child-render');
    return (
        <>
            <h4>Child</h4>
            <button onClick={props.onBtn}>childBtn</button>
        </>  
    )  
})

const UseCallback = () => {
    const [state,setState] =useState({
        count:0
    })
    const handleBtn=useCallback(()=>{
        console.log('handleBtn');
    },[])
    const handleAdd=()=>{
        setState((prevState)=>{
            return {
                ...prevState,
                count:prevState.count+1
            }
        })
    }

    const handleChange=()=>{
        console.log('handleChange');
    }
    return (
        <>
            <h3>Parent</h3>
            <h4>{state.count}</h4>
            <Child onBtn={handleBtn}></Child>
            <button onClick={handleChange}> Change </button>
            <button onClick={handleAdd}> add </button>
        </>
    );
}

export default UseCallback;