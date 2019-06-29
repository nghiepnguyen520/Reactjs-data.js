import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSeek : ''
    }
  }
  GetDataInputSearch = (event) => {
    console.log(event.target.value);
    this.setState({
      valueSeek : event.target.value
    });
    this.props.DataSearch(this.state.valueSeek);
  };
  DataSearch = () => {
    this.props.DataSearch(this.state.valueSeek);
  };
  render() {
    return (
      <div className="Search">
        <div className="ui icon input">
          <input
            onChange={(event)=>this.GetDataInputSearch(event)}
            type="text"
            placeholder="Search..."

            
          />
          <i
            aria-hidden="true"
            className="search circular inverted link icon"
            onClick={this.DataSearch}
          />
        </div>
      </div>
    );
  }
}

export default Search;
