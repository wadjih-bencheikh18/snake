import React, { Component } from 'react';
class Snake extends Component {
    render(props) {
        return (
            <div>
                {this.props.snakeDots.map((dot, i) => 
                <div 
                    className='snake-dot' 
                    key={i} 
                    style={{left:dot[0]*2+"%", top:dot[1]*2+"%"}}
                />)}
            </div>
        );
    }
}

export default Snake;