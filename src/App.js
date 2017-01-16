import React, { Component } from 'react';
import './App.css';
var data = require('../data/ingredients.json');

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: "Almond paste"};
  }

  handleChange() {
    this.setState({value: this.refs.textarea.value});
  }

  getRawMarkup() {
    var temp = data[this.state.value].substitution;
    return { __html:temp};
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.value} />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

export default App;
