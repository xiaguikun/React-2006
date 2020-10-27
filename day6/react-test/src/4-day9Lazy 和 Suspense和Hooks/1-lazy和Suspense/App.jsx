import React, { Component ,lazy,Suspense} from 'react';

const Child=lazy(()=>import('./Child.jsx'));

class App extends Component {
    state = { 
        isShow:false
     }
     handleClick=()=>{
         this.setState({
             isShow:true
         })
     }
    render() {
        return (
            <>  
                <h3>父组件</h3>
                <button onClick={this.handleClick}>加载子组件</button>
                <Suspense fallback={<div> Loading... </div>}>
                    {
                        this.state.isShow && <Child></Child>
                    }
                </Suspense>
            </>
        );
    }
}

export default App;