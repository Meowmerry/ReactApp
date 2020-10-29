
import React, { Component } from 'react';
import { Button } from './Button';

export default class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [153, 100, 255]
    }
  }
  componentDidMount() {
    this.applyColor();
  }
  componentDidUpdate(preProps, prevState) {
    this.applyColor();
  }
  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }
  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a, b) => a + b) < 127 * 3
  }
  applyColor() {
    const color = this.formatColor(this.state.color)
    document.body.style.background = color;
  }
  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  }
  handleClick = () => {
    this.setState({
      color: this.chooseColor()
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} />
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Your color is {this.formatColor(this.state.color)}</h1>
      </div>
    )
  }
}
