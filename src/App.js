import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';
import WikiArticle from './components/WikiArticle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      activeArticle: null,
    };
  }

  getSearchResults = (searchResultsObject) => {
    this.setState({
      activeArticle: null,
    });
    let searchResults = searchResultsObject.data.query.search;
    this.setState({
      searchResults: searchResults,
    });
  }

  setActiveArticle = (pageID) => {
    this.setState({
      activeArticle: pageID
    });
  }

  render() {
    return (
      <div className="App">
        <Search getSearchResultCallback={this.getSearchResults} />
        {
          this.state.activeArticle == null &&
          <Results resultsList={this.state.searchResults}  setActiveArticleCallback={this.setActiveArticle}/>
        }
        {
          this.state.activeArticle != null &&
          <WikiArticle pageid={this.state.activeArticle} />
        }
      </div>
    );
  }
}

export default App;
