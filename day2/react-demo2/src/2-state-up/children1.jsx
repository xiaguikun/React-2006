import React from 'react';

const children1 = (props) => {
    return (
        <div onClick={props.onHandleClick.bind(this,1)}>子组件1</div>
    );
}

export default children1;