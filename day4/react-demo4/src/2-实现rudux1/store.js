//定义一个数据源
const defaultState={
    count:0
}

//定义一个changeState，用于修改状态
const changeState=(action)=>{
    action=action || {type:''}
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

//定义一个函数dispatch，用于触发changeState函数
const dispatch =(action)=>{
    changeState(action)
    renderDom()
}

//定义一个renderDom方法，用于渲染Dom
const renderDom=()=>{
    let domElem=document.getElementById('count');
    domElem.innerHTML=defaultState.count;
}

export {dispatch};



