import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// import App from './1-react路由/1-路由基础.jsx';
// import App from './1-react路由/2-动态路由.jsx';
// import App from './1-react路由/3-嵌套路由.jsx';
// import App from './1-react路由/4-渲染.jsx';
// import App from './1-react路由/5-重定向.jsx';
// import App from './1-react路由/6-登录.jsx';
// import App from './1-react路由/7-高亮.jsx';
import App from './1-react路由/8-改变标签.jsx';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);