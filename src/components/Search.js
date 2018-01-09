import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }

    this.searchWikipedia = this.searchWikipedia.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  searchWikipedia() {
    var self = this;
    var url = "http://en.wikipedia.org/w/api.php";
    axios.get(url, {
      params: {
        action: 'query',
        list: 'search',
        format: 'json',
        origin: '*',
        srsearch: self.state.query
      }
    })
    .then(function(response) {
      console.log(response);
    });
  }

  updateQuery(evt) {
    this.setState({
      query: evt.target.value
    });
  }

  render() {
    return (
      <div className="Search">
        <input value={this.state.query} onChange={this.updateQuery}/>
        <button onClick={this.searchWikipedia}>Search</button>
      </div>
    );
  }
}

export default Search;