//定义一个数据源
const defaultState={
    count:0
}

//定义一个changeState
const changeState=(action)=>{
    action =action || {type : ''};
    switch(action.type){
        case 'increment':
            defaultState.count++;
            break;
        case 'decrement':
            defaultState.count--;
            break;
        default:
    }
}

export {defaultState,changeState}