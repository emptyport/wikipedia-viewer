import React, { Component } from 'react';
import WikiCard from './WikiCard';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  render() {
    return (
      <div className="Results">
        {
          this.props.resultsList.map((result) => (
            <WikiCard title={result.title} snippet={result.snippet} pageID={result.pageid} clickCallback={this.props.setActiveArticleCallback} key={result.pageid}/>
          ))
        }
      </div>
    );
  }
}

export default Results;