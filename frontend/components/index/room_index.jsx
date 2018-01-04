import React from 'react';
import RoomMapContainer from '../map/room_map_container';
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
        <RoomListContainer rooms={this.props.rooms}/>
        <RoomMapContainer />
      </div>
    );
  }
}

export default RoomIndex;
