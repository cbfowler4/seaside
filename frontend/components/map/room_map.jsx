import React from 'react';
import MarkerManager from '../../util/marker_manager';


class RoomMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    const mapOptions = {
      center: {lat: 43.213, lng: -72.2342},
      zoom: 10
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }

  componentWillReceiveProps({rooms}) {

    this.MarkerManager.updateMarkers(rooms);
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}></div>
    );
  }
}

export default RoomMap;
