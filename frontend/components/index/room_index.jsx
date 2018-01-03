import React from 'react';
import RoomMap from '../map/room_map';
import RoomList from './room_list';


class RoomIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRooms();
  }

  render() {
    return (
      <div className='room-index-main'>
        <RoomList rooms={this.props.rooms}/>
        <RoomMap />
      </div>
    );
  }
}

export default RoomIndex;
