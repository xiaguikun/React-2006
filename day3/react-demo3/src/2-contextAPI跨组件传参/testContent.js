import {createContext} from 'react';

//执行createContext会返回一个对象
const testContent=createContext();

const {Provider,Consumer} =testContent

export {
    testContent,
    Provider,
    Consumer
}