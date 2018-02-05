import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
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
    this.cities = ["New York", "San Francisco", "Fort Lauderdale", 'Miami', 'Hartford', 'Havana', 'Virginia Beach', 'Charleston', 'Cape May', 'Jacksonville', 'Martha\'s Vineyard'];
  }

  handleChange (e) {
    this.setState({search: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();

    if (this.props.location.pathname !== '/explore') {
      this.props.history.push('/explore');
    }

    this.geocoder.geocode({'address': this.state.search !== "" ? this.state.search : "New York City"}, (response)=>{
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
            placeholder={`Try "${this.cities[Math.floor(Math.random()*this.cities.length)]}"`}
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

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));
