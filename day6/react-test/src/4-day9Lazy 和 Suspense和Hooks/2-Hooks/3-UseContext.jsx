import React, { Component ,createContext,useContext} from 'react';

//引入createContext,useContext  
//执行const context=createContext(),在父辈组件的地方用<context.Provider value={{name:'a'}}></context.Provide>包起来，并传值
//子组件中用 const value=useContext(context) 得到传的值

const nameContext=createContext();
const nickNameContext=createContext();

const Sun =()=>{
    const name=useContext(nameContext);
    const nickName=useContext(nickNameContext)
    return (
        <div>
            <div>这是孙组件</div>
            <h5>来自父组件信息---{nickName.name}</h5>
            <h5>来自爷组件信息---{name.name}</h5>
        </div>
    )
}

const Child=()=>{
    return (
        <nickNameContext.Provider value={{name:'xiaoming'}}>
            <Sun></Sun>
        </nickNameContext.Provider>
    )
}

class UseContext extends Component {
    state = {  }
    render() {
        return (
            <nameContext.Provider value={{name:'zhangsan'}}>
                <Child></Child>
            </nameContext.Provider>
        );
    }
}

export default UseContext;