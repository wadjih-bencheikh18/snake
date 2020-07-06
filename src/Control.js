import React, { Component } from 'react';

class Control extends Component {
    render(props) {
        return (
            <button onClick={this.props.onClick}>
                <h3>{this.props.BTN}</h3>
            </button>
        );
    }
}

export default Control;