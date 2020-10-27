import React,{useState,useEffect} from 'react';

  // useEffect有两个参数,第一个参数是一个函数
  // useEffect类似于componentDidMount,还类似于componentDidUpdate
  // 第二个参数是一个数组，是依赖，只有依赖的数据发生了改变，那么才会再次执行前面的回调函数
  // 类似于shouldComponenUpdate
  // 可以写多个
  // 当里面有return语句时，类似于componentWillUnmount
  //取消挂载的方法ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  // useEffect(() => {
  //   console.log('useEffect')
  // }, [data.count])


const UseEffect = () => {
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

    function getData(){
        return fetch('https://www.fastmock.site/mock/0d881ee16ab4856889a471ab2db5d205/api/home/list')
        .then(response=>response.json())
        .then(res=>res)
    }

    useEffect(()=>{
        console.log('useEffect');
    },[])

    useEffect(()=>{
        (async()=>{
            let data=await getData()
            console.log(data);
            setData((prevState)=>{
                return {
                    ...prevState,
                    name:data.result[0].title
                }
            })
        })()

        // return ()=>{
        //     console.log('unMount')
        // }
    },[data.count])

    useEffect(()=>{
        return ()=>{
            console.log('unMount')
        }
    },[])


    return(
        <>
            <h4>name is {data.name}</h4>
            <span>{ data.count}</span>
            <button onClick={handleClick}>点击++</button>
        </>
    )

}

export default UseEffect;