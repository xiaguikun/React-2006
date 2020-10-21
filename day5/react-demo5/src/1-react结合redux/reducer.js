//定义一个数据源，用于存方法数据
const defaultState={
    count:0,
    name:'zhangsan'
}

//定义一个纯函数，用于改变状态
const reducer=(state=defaultState,action)=>{
    action =action || {type:''};
    switch(action.type){
        case 'increment':
            return {
                ...state,
                count:state.count+action.num
            }
            // state.count = 87
        case 'decrement':
            return {
                ...state,
                count:state.count-action.num
            }
        default:
            return state
    }
}

export default reducer;