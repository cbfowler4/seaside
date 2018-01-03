import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type='text' placeholder='Try "New York"'></input>
      </div>
    );
  }
}

export default SearchBar;
