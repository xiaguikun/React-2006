const pushDataAction=(task)=>{
    return {
        type:'pushData',
        task:task
    }
}

const delDataAction=(index)=>{
    return {
        type: "del",
        index: index,
      }
}

const getDataAction2=(arr)=>{
    return {
        type:'getData',
        arr:arr
      }
}

const getDataAction=()=>{
    // return {
    //     type:'getData'
    //   }
    return (dispatch)=>{
        setTimeout(()=>{
            let arr=['数据1','数据2']
            dispatch(getDataAction2(arr))
        },2000)
    }
}
export {
    pushDataAction,
    delDataAction,
    getDataAction
}