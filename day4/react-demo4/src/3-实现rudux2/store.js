//引入defaultState,changeState
import {defaultState,changeState} from './changeState.js';

//定义一个仓库
const createStore=()=>{
    //获取数据
    const getState=()=>{
        return defaultState;
    }

    //观察者模式
    const listeners=[];
    //订阅
    const subscribe=(listener)=>{
        listeners.push(listener);
    }

    //定义一个dispatch来触发changeState和发布
    const dispatch=(action)=>{
        changeState(action);
        listeners.forEach(listener => listener());
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}

const store=createStore()


const renderDom=()=>{
    let domElem=document.getElementById('count');
    domElem.innerHTML=defaultState.count;
}

store.subscribe(renderDom)

export default store;

