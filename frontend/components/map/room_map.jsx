import React from 'react';
import MarkerManager from '../../util/marker_manager';


class RoomMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    const mapOptions = {
      center: this.props.center,
      zoom: 10
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }

  componentWillReceiveProps({rooms, center}) {
    debugger
    this.map.setCenter(center);
    this.MarkerManager.updateMarkers(rooms);
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}></div>
    );
  }
}

export default RoomMap;
