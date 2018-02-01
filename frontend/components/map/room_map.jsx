import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { debounce } from 'lodash';


class RoomMap extends React.Component {
  constructor(props) {
    super(props);
    this.updateBounds = this.updateBounds.bind(this);
  }

  componentDidMount () {
    const mapOptions = {
      zoom: 6,
      center: this.props.center
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    // this.map.addListener('idle', this.updateBounds);
    this.map.addListener('load', this.updateBounds);
    // this.map.addListener('idle', _.throttle(this.updateBounds, 200));
    this.map.addListener('idle', _.debounce(this.updateBounds, 200));
  }

  updateBounds() {
    const northEast = this.map.getBounds().getNorthEast();
    const southWest = this.map.getBounds().getSouthWest();
    const center = this.map.getCenter();

    if (this.differentBounds() === true) {
      this.props.receiveBounds({
        north: northEast.lat(),
        east: northEast.lng(),
        south: southWest.lat(),
        west: southWest.lng()
      });
      this.props.receiveMapCenter({lat: center.lat(), lng: center.lng()});
    } else {
      this.MarkerManager.updateMarkers(this.props.rooms);
    }
  }

  componentWillReceiveProps({rooms, center}) {
    this.map.setCenter(center);
    this.MarkerManager.updateMarkers(rooms);
  }

  differentBounds() {
    const northEast = this.map.getBounds().getNorthEast();
    const southWest = this.map.getBounds().getSouthWest();
    return (northEast.lat() !== this.props.bounds.north ||
            northEast.lng() !== this.props.bounds.east ||
            southWest.lat() !== this.props.bounds.south ||
            southWest.lng() !== this.props.bounds.west);
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}></div>
    );
  }
}

export default RoomMap;
