### 1.React中使用static创建静态属性
    首先明确两个定义：
        静态属性：通过构造函数直接访问到的属性。
        实例属性：通过new出来的实例，访问到的属性。
        总结来说static并不是react定义的，而加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用
    补：为什么要使用静态属性 ：类内部的方法都会被子类继承，但是使用静态方法定义的不会被子类继承，也不会初始化到实例对象中。
### 2.函数组件类组件
    函数组件是无状态组件，没有自己的状态，事件，生命周期。只能通过调用父组件的状态事件使用
### 3.React的contextAPI
    context，不仅可以数据共享，还可以通过共享事件来获得子组件的参数，然后俩进行传参
### 4.React生命周期render和componentDidMount的执行顺序
    首先先执行父组件的render的函数然后是子组件的render，子组件的componentDidMount,然后是父组件的componentDidMount
### 5.关于setState的同步异步
    一般情况下是异步的，但是在js原生事件(而不是react的封装事件)是同步的，例如在setTimeOut(()=>{},2000)中this.setState(),以及document.querySelector().addEventListner('click',()=>{})中设置this.setState()是同步的





### Websocket