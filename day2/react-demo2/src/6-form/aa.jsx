import React,{Component} from 'react';
let list=[
  {
    name:"百度",
    address:"http://www.baidu.com"
  },
  {
    name:"google",
    address:"http://www.google.cn"
  },
  {
    name:"firefox",
    address:"https://home.firefoxchina.cn"
  }
];
class forEach extends Component{
  render(){
    //定义一个数组，将数据存入数组
    const elements=[];
    list.forEach((item)=>{
      elements.push(
        <div>
          {item.name}&nbsp;
          <a>{item.address}</a>
          <hr/>
        </div>
      )
    });
    return(
      <div>
        {elements}
      </div>
    )
  }
}
export default forEach;