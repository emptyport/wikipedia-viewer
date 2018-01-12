import React, { Component } from 'react';
import axios from 'axios';
import '../assets/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }

    this.searchWikipedia = this.searchWikipedia.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.openRandomArticle = this.openRandomArticle.bind(this);
  }

  searchWikipedia(event) {
    event.preventDefault();
    var self = this;
    var url = "https://en.wikipedia.org/w/api.php";
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
      self.props.getSearchResultCallback(response);
    });
  }

  openRandomArticle() {
    var url = "https://en.wikipedia.org/wiki/Special:Random";
    window.open(url, '_blank');
  }

  updateQuery(event) {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.searchWikipedia}>
          <input placeholder='Search Wikipedia' value={this.state.query} onChange={this.updateQuery}/>
          <button type='submit' id='search_button'>Search</button>
          <button onClick={this.openRandomArticle}>Random</button>
        </form>
      </div>
    );
  }
}

export default Search;

