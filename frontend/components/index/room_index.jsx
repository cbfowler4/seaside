import React from 'react';
import RoomMap from '../map/room_map';
import RoomList from './room_list';


class RoomIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    debugger
    this.props.fetchRooms(nextProps.filters);
  }

  render() {
    return (
      <div className='room-index-main'>
        <RoomList rooms={this.props.rooms}/>
        <RoomMap
          rooms={this.props.rooms}
          center={this.props.filters.bounds.center}
          receiveBounds={this.props.receiveBounds}/>
      </div>
    );
  }
}

export default RoomIndex;
