import React, { Component } from 'react';

class App extends Component {
    state = { 
        count:1
     }
    constructor(props){
        super(props)
        this.handleClick2=this.handleClick2.bind(this)
    }

    handleClick1(){
        console.log(this.state.count);
    }
    handleClick2(){
        this.setState((prevValue,props)=>{
            return {
                count:prevValue.count+2
            }
        },()=>{
            console.log(this.state.count);
        })
    }
    handleClick3=()=>{
        this.setState((prevValue,props)=>{
            return {
                count:prevValue.count+3
            }
        },()=>{
            console.log(this.state.count);
        })
    }
    handleClick4(num){
        this.setState((prevValue,props)=>{
            return {
                count:num
            }
        },()=>{
            console.log(this.state.count);
        })
    }
    handleClick5(num){
        this.setState((prevValue,props)=>{
            return {
                count:num
            }
        },()=>{
            console.log(this.state.count);
        })
    }
    handleClick6=(num)=>{
        return ()=>{
            this.setState((prevValue,props)=>{
                return {
                    count:num
                }
            },()=>{
                console.log(this.state.count);
            })
        }
    }
    // handleClick7(num){
    //     this.state=Object.assign({count:num},this.state)
    //     console.log(this.state.count);
    // }
    render() {
        return (
            <>
                <div onClick={this.handleClick1.bind(this)}>直接在render里面的元素行内写.bind来改变this指向</div>
                <br/>
                <div onClick={this.handleClick2}>通过constructor来.bind 来修改this指向</div>
                <br/>
                <div onClick={this.handleClick3}>通过箭头函数来改变this指向</div>
                <br/>
                <div>传参，传参肯定可以修改this指向</div>
                <br/>
                <div onClick={this.handleClick4.bind(this,100)}>通过行内的.bind来修改this指向，传参</div>
                <br/>
                <div onClick={()=>{this.handleClick5(200)}}>直接在行内写箭头函数修改this指向并传参</div>
                <br/>
                <div onClick={this.handleClick6(300)}>函数柯里化,通过在上面的箭头函数来改变this指向</div>
                <br/>
                <br/>
                {/* <div>补充，不用setState</div>
                <div onClick={()=>{this.handleClick7(400)}}>补充，不用setState</div> */}
            </>
        );
    }
}

export default App;

// 改变this指向
// 直接在render里面的行内写 this.xxx.bind(this)
// 在constructor的函数里面 this.xxx = this.xxx.bind(this);
// 定义的时候写成箭头函数  xxx = () => {}

// 传参
// 直接在render里面的行内写 () => this.handleClick(8)
// 直接在render里面的行内写 this.xxx.bind(this, argument)
// 用柯里化 handleClick = () => {
  //   return () => {
  //     console.log(this.state.count)
  //   }
  // }