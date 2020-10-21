import React, {Component} from 'react';
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.onRef(this)
    }
    
    onShow(){
        console.log('子组件的方法被父组件调用')
    }

    render() {
        return (
            <section>
                <div onClick={()=>{this.props.handleCancel()}}>子组件用this.props调用父组件的函数</div>
            </section>
        );
    }
}

export default Child;