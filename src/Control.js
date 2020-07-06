import React, { Component } from 'react';

class Control extends Component {
    render(props) {
        return (
            <button classeName='btn' onClick={this.props.onClick}>
                {this.props.BTN}
            </button>
        );
    }
}

export default Control;