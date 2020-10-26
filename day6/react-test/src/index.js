import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

  // import App from './0-补充/父组件调用子组件中的方法/Parent.jsx';

// import App from './1-react路由/1-路由基础.jsx';
// import App from './1-react路由/2-动态路由.jsx';
// import App from './1-react路由/3-嵌套路由.jsx';
// import App from './1-react路由/4-渲染.jsx';
// import App from './1-react路由/5-重定向.jsx';
// import App from './1-react路由/6-登录.jsx';
// import App from './1-react路由/7-高亮.jsx';
// import App from './1-react路由/8-改变标签.jsx';
// import App from './2-day7/1-参数获取.jsx';
// import App from './2-day7/2-404页面.jsx';
// import App from './2-day7/3-后台管理侧边栏sideBar.jsx';
// import App from './2-day7/4-路由表实现嵌套路由.jsx';
// import App from './2-day7/5-朋友的朋友.jsx';
// import App from './2-day7/6-模态框.jsx';




import App from './3-day8immutable/index.jsx';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);