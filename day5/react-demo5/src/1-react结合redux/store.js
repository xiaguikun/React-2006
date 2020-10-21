//引入createStore 从redux中
import {createStore} from 'redux';

//引入reducer，然后作为参数传入到createStore中
import reducer from './reducer.js';

const store=createStore(reducer);
//这里的store是一个对象包括 getState,dispatch,subscribe,这几个方法

export default store;