import './App.css';
import React, { Component } from 'react';
import Snake from './Snake'
import Food from './Food';
class App extends Component {
  state={
    direction:'PAUSE',
    speed:'100',
    snakeDots:[
      [0,0],
      [1,0],
      [2, 0],
    ],
    over:false,
    score:1,
    FoodDots: [Math.floor(Math.random() * 50) * 2 + "%", Math.floor(Math.random() * 50) * 2 + "%"]
  }
  componentDidMount(){
    setInterval(this.moveSnake.bind(this),this.state.speed);
    document.onkeydown=this.onkeydown.bind(this);
  }
  onkeydown(state,key){
    key=key || window.event;
    switch(key.keyCode){
      case 38:
        this.setState({direction:'UP'});
        break;
      case 40:
        this.setState({ direction:'DOWN' });
        break;
      case 37:
        this.setState({ direction:'LEFT' });
        break;
      case 39:
        this.setState({ direction:'RIGHT' });
        break;
      case 27:
        this.setState({ direction: 'PAUSE' });
        break;
      default:
        break;
    }
  }
  moveSnake(){
    let dots=this.state.snakeDots;
    let head=dots[dots.length-1];
    switch(this.state.direction){
      case 'RIGHT':
        head=[head[0]+1,head[1]];
        break;
      case 'LEFT':
        head = [head[0]-1, head[1]];
        break;
      case 'UP':
        head = [head[0], head[1]-1];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 1];
        break;
      default:
        break;
    }
    if (head[0]===50) head[0]=0;
    if (head[1] === 50) head[1] = 0;
    if (head[0] === -1) head[0] = 49;
    if (head[1] === -1) head[1] = 49;
    let headp = false
    if (head[0] * 2 + "%" === this.state.FoodDots[0] && head[1] * 2 + "%" === this.state.FoodDots[1]){
      headp = true;
    }
    if (headp){
      this.setState({FoodDots : [Math.floor(Math.random() * 50) * 2 + "%", Math.floor(Math.random() * 50) * 2 + "%"]});
      this.setState({score: this.state.score+1});
      this.setState({ speed: this.state.speed - 1 });
    }
    if (this.state.direction!=='PAUSE'){
      dots.map(dot => {
        if (dot[0] === head[0] && dot[1] === head[1]) this.setState({over:true});
        return true;
      })
      dots.push(head);
      if (!headp) dots.shift();
      this.setState({ snakeDots: dots });
    } 
  }
  render() {
          if (!this.state.over) {
            return (
              <div>
                <h1>Score : {this.state.score}</h1>
                <div className='App'>
                  <Snake snakeDots={this.state.snakeDots} />
                  <Food FoodDots={this.state.FoodDots} />
                </div>
              </div>
            );
          }
          else {
            return (
              <div className='App'>
                <h1>GAME OVER</h1>
                <h1>Your Score is : {this.state.score}</h1>
              </div>
            );
            
          }
        }
}

export default App;