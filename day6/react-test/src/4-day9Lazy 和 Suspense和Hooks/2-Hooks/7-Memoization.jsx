import React, { Component } from 'react';
import memoize from "memoize-one";

class Example extends Component {
  // state 只需要保存当前的 filter 值：
  state = { filterText: "" };

  // 在 list 或者 filter 变化时，重新运行 filter：
  filter = memoize(
    (list, filterText) => {
      console.log(123)
      return list.filter(item => item.includes(filterText))
    }
  );

  handleChange = event => {
    this.setState({ filterText: event.target.value });
  };

  handleClick = () => {
    this.setState({
      filterText: 'kkkkk'
    })
  }

  render() {
    // 计算最新的过滤后的 list。
    // 如果和上次 render 参数一样，`memoize-one` 会重复使用上一次的值。
    const filteredList = this.filter(this.props.list, this.state.filterText);

    return (
      <>
        <input onChange={this.handleChange} value={this.state.filterText} />
        <ul>{filteredList.map((item, index) => <li key={index}>{item}</li>)}</ul>
        <button onClick={this.handleClick}>btn</button>
      </>
    );
  }
}

class App extends Component {
  state = {
    list: [
      'zhangsan',
      'lisi',
      'wangwu',
      'zhaoliu',
      'sunqi',
      'wangba'
    ]
  }
  render() {
    return (
      <div>
        <Example list={this.state.list}></Example>
      </div>
    )
  }
}

export default App