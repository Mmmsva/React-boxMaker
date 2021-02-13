import React, {Component} from 'react';
import uuid from 'uuid';


class NewBoxForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = {...this.state, id: uuid()}
    this.props.createBox(newBox);
    this.setState(
      { height: "", width: "", color: "" }
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label htmlFor="height"><strong>Height</strong></label>
          <input 
            type="text" 
            name="height" 
            onChange={this.handleChange}
            value={this.state.height} 
            id="height" 
          />
        </div>
        <div>
          <label htmlFor="width"><strong>Width</strong></label>
          <input 
            type="text" 
            name="width" 
            onChange={this.handleChange}
            value={this.state.width} 
            id="width" 
          />
        </div>
        <div>
          <label htmlFor="color"><strong>Background Color</strong></label>
          <input 
            type="text" 
            name="color" 
            onChange={this.handleChange}
            value={this.state.color} 
            id="color" 
          />
        </div>
        <button>Add a new box!</button>
      </form>
    )
  }
}

export default NewBoxForm;