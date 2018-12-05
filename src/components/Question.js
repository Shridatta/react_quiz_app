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
    var parentcard = {
      background: "white",
      color: "black"
    };
    return (
      <div className="card" id="parent-card" style={parentcard}>
        <div className="card-header">
          <ul className="list-group list-group-flush">
            <li>{this.state.label}</li>
          </ul>
        </div>
        {this.renderOptions()}
      </div>
    );
  }
}

function Option(props) {
  return (
    <div>
      <div className="card-custom">
        <ul className="list-group list-group-flush">
          <li>
            <span onClick={props.onClick}>
              <span>{props.label}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Question;
