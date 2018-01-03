import React from 'react';

class RoomMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    const mapOptions = {
      center: {lat: 37.7, lng: -122.43},
      zoom: 10
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}></div>
    );
  }
}

export default RoomMap;
