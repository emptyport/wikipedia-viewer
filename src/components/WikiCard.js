import React, { Component } from 'react';
import '../assets/WikiCard.css';

class WikiCard extends Component {
  constructor(props) {
    super(props);

    var tmp = document.createElement("DIV");
    tmp.innerHTML = this.props.snippet;
    var snippet = tmp.textContent || tmp.innerText;

    var url = "https://en.wikipedia.org/wiki/";
    var title = this.props.title.replace("_", " ");

    this.state = {
      url: url + title,
      title: title,
      snippet: snippet,
    }
  }

  render() {
    return (
      <a href={this.state.url} target="_blank">
      <div className="WikiCard" >
        <h2>{this.state.title}</h2>
        <p>{this.state.snippet}</p>
      </div>
      </a>
    );
  }
}

export default WikiCard;