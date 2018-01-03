import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {search: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  handleChange (e) {
    this.setState({search: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.fetchRooms();
  }

  resetSearch () {
    this.setState({search: ""});
  }

  render() {
    let cancelInput;
    if (this.state.search.length > 0) {
      cancelInput =  <div className='clear-search' onClick={this.resetSearch}>X</div>;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
            placeholder='Try "New York"'
            value={this.state.search}
            onChange={this.handleChange}>
          </input>
          {cancelInput}
        </form>
      </div>
    );
  }
}

export default SearchBar;
