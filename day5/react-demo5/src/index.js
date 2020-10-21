import React from 'react';
import ReactDOM from 'react-dom';
// import store from './1-react结合redux/store.js';
import {Provider} from 'react-redux'
// import store from './2-todoList/store/index';
import store from './3-todoList/store/index';

// import App from './1-react结合redux/App.jsx';
// import App from './2-todoList/App.jsx';
import App from './3-todoList/App.jsx';

// function render(){
//     ReactDOM.render(
//         <App></App>,
//         document.getElementById('root')
//     )
// }

// store.subscribe(()=>{
//     render();
// })

// render()

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
)
