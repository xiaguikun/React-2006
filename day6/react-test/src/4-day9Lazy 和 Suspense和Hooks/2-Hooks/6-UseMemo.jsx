import React,{useMemo,useState} from 'react';

const Child11=(props)=>{
    console.log('Child11-render');
    return (
        <div>
            <h4>{props.data.a}</h4>
        </div>
    )
}
const Child22=(props)=>{
    console.log('Child22-render');
    return (
    <div>
        <h4>{props.data.b}</h4>
    </div>
    )
}

const Child1=(props)=>{
    const Childa=useMemo(()=>()=><Child11 {...props}></Child11>,[props.data.a])
    return (
        <Childa></Childa>
    )
};
const Child2=(props)=>{
    const Childb=useMemo(()=>()=><Child22 {...props}></Child22>,[props.data.b])
    return (
        <Childb></Childb>
    )
}



const UseMemo = () => {
    const [data,setData] =useState({
        a:'msg-a',
        b:'msg-b'
    })
    const handleA=()=>{
        setData({
            ...data,
            a:'msg--aa'
        })
    }
    const handleB=()=>{
        setData((prevState)=>{
            return {
                ...prevState,
                b:prevState.b+'b'
            }
        })
    }
    return (
        <>
            <Child1 data={data}></Child1>
            <Child2 data={data}></Child2>
            <button onClick={handleA}> change-a </button>
            <button onClick={handleB}> change-b </button>
        </>
    );
}

export default UseMemo;