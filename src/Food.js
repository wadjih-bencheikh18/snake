import React, { Component } from 'react';

class Food extends Component {
    render(props) {
        return (
            <div>
                <div
                    className='snake-food'
                    style={{ 
                        left: this.props.FoodDots[0],
                        top: this.props.FoodDots[1]
                    }}
                />
            </div>
        );
    }
}

export default Food;