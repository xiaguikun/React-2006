// 父组件
import React, {Component} from 'react';

import Child from './child.jsx';

class Parents extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }
    
    handleCancel = (e) => {
        console.log('父组件的方法被子组件调用');
    }

    childClick = (e) => {
        this.child.onShow()
    }
    render() {
        return (
            <section>
                <Child onCancel={this.handleCancel} onRef={(ref)=>{ this.child = ref}}></Child>
                <div onClick={this.childClick}>调用子组件的函数</div>
            </section>
        );
    }
}

export default Parents;