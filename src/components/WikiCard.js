import React, { Component } from 'react';
import '../assets/WikiCard.css';

class WikiCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clickCallback(this.props.pageID);
  }

  render() {
    return (
      <div className="WikiCard" onClick={this.handleClick}>
        <h2>{this.props.title}</h2>
        <p dangerouslySetInnerHTML={{__html: this.props.snippet}}></p>
      </div>
    );
  }
}

export default WikiCard;