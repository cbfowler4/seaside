import React from 'react';
import RoomListItem from './room_list_item';

class RoomList extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    let roomListArr = this.props.rooms.map((room) => {
      return (<RoomListItem room={room} key={room.id}/>);
    });

    return(
      <ul className='room-list'>
        {roomListArr}
      </ul>
    );
  }
}

export default RoomList;
