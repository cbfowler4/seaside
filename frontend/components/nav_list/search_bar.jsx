import React from 'react';
import { connect } from 'react-redux';
import { fetchRooms } from '../../actions/room_index_actions';
import { receiveMapCenter } from '../../actions/map_actions';


const mapDispatchToProps = dispatch => {
  return {
    fetchRooms: () => dispatch(fetchRooms()),
    receiveMapCenter: (center) => dispatch(receiveMapCenter(center))
  };
};


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
    this.geocoder.geocode({'address': this.state.search}, (response)=>{
      const center = response[0].geometry.location.toJSON();
      this.props.receiveMapCenter(center);
    });
  }

  componentDidMount () {
    this.geocoder = new google.maps.Geocoder();
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
      <div className = 'search-bar'>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
            placeholder='Try "New York"'
            value={this.state.search}
            onChange={this.handleChange}>
          </input>
          {cancelInput}

          {this.props.onWelcomePage &&
            <button>Search</button>}
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);
