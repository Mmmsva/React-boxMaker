import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div>
        <div 
          style={{
            width: `${this.props.width}em`,
            height: `${this.props.height}em`,
            backgroundColor: `${this.props.color}`
          }}
        />
        <button onClick={() => this.props.removeBox(this.props.id)}>Remove The Box!</button>
      </div>
    );
  }
}

export default Box;