import React from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      value:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event)
  {
    console.log(event.target.value);
    this.setState({value:event.target.value});
  }
  handleSubmit(event)
  {
    alert('nmae was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render()
  {
    return(
      <form onSubmit={this.handleSubmit}>
      <label>name:</label>
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
      <input type="submit" value="Submit" />
      </form>
    );
  }
}

render(<App/>,document.getElementById('root'));