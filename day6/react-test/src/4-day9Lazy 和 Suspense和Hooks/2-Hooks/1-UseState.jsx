import React , { useState } from 'react';

//引入useState，结构出一个数组[data,setData] =useState({state数据}) 
//通过data.来获得数据
//通过setState()来修改数据  接收一个函数作为参数，函数接收prevState作为参数，return{...prevState,count:1}，也可以直接接受一个对象修改数据{...data,count:1}

const UseState = () => {
    let [data,setData] =useState({
        count:0,
        name:'zhangsan'
    })
    function handleClick(){
        setData((prevState)=>{
            return {
                ...prevState,
                count:prevState.count+1
            }
        })
    }
    return (
        <>
            <h4>name is {data.name}</h4>
            <span>{ data.count}</span>
            <button onClick={handleClick}>点击++</button>
        </>
    );
}

export default UseState;