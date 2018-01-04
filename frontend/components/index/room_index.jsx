import React from 'react';
import RoomMapContainer from '../map/room_map_container';
import RoomListContainer from './room_list_container';


class RoomIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps (nextProps) {
    this.props.fetchRooms(nextProps.filters);
  }

  render() {
    return (
      <div className='room-index-main'>
        <RoomListContainer />
        <RoomMapContainer />
      </div>
    );
  }
}

export default RoomIndex;
