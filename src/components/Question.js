import React, { Component } from "react";
import config from "../quiz-data.json";

class Question extends Component {
  constructor(props) {
    super();
    this.state = {
      index: props.index,
      label: props.label,
      options: props.options,
      onSelect: props.onSelect
    };
  }
  handleClick(option) {
    this.state.onSelect(this.state.index, option);
  }
  renderOptions() {
    const optionList = this.state.options.map((option, index) => {
      return (
        <Option
          key={index}
          label={option.label}
          onClick={() => {
            this.handleClick(index);
          }}
        />
      );
    });
    return optionList;
  }
  render() {
    return (
      <div>
        <h2>{this.state.label}</h2>
        {this.renderOptions()}
      </div>
    );
  }
}

function Option(props) {
  return (
    <div>
      <span onClick={props.onClick}>
        <i class="fas fa-caret-right" />
        <span>{props.label}</span>
      </span>
    </div>
  );
}

export default Question;
