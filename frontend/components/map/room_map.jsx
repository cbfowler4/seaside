import React from 'react';
import MarkerManager from '../../util/marker_manager';


class RoomMap extends React.Component {
  constructor(props) {
    super(props);
    this.updateBounds = this.updateBounds.bind(this);
  }

  componentDidMount () {
    const mapOptions = {
      zoom: 10,
      center: this.props.center
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.map.addListener('idle', this.updateBounds);
  }

  updateBounds() {
    const northEast = this.map.getBounds().getNorthEast();
    const southWest = this.map.getBounds().getSouthWest();
    this.props.receiveBounds({
      north: northEast.lat(),
      east: northEast.lng(),
      south: southWest.lat(),
      west: southWest.lng()
    });
  }

  componentWillReceiveProps({rooms, center}) {
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
