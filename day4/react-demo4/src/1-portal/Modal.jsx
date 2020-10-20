import React, { Component } from 'react';

import './style.css'
import withPortal from './withPortal.js';

class Modal extends Component {
    state = {  }
    render() {
        return (
            <>
                {
                    this.props.flag ? (
                    <div className='wrap'>
                        <div className='content'>
                            <h1> Portal Header </h1>
                            <div>
                                <button> close </button>
                            </div>
                        </div>
                    </div>
                    ) : null
                }
            </>
        );
    }
}

export default withPortal(Modal);