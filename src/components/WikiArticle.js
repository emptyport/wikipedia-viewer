import React, { Component } from 'react';
import axios from 'axios';
import '../assets/WikiArticle.css';

class WikiArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleTitle: '',
      articleText: 'Loading...',
    }
  }

  componentDidMount() {
    var self = this;
    var url = "http://en.wikipedia.org/w/api.php";
    axios.get(url, {
      params: {
        action: 'parse',
        format: 'json',
        origin: '*',
        pageid: this.props.pageid,
      }
    })
    .then(function(response) {
      console.log(response);
      self.setState({
        articleText: response.data.parse.text['*'],
      });
    });
  } 

  render() {
    return (
      <div className="WikiArticle">
        <h2>{this.state.articleTitle}</h2>
        <p dangerouslySetInnerHTML={{__html: this.state.articleText}}></p>
      </div>
    );
  }
}

export default WikiArticle;