import React from 'react';
import RoomListItem from './room_list_item';
import Spinner from '../spinner';

class RoomList extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    let roomListArr = this.props.rooms.map((room) => {
      let photos = room.photoIds.map((id) => {
        return this.props.photos[id];
      });
      return (<RoomListItem room={room} photos={photos} key={room.id}/>);
    });

    if (this.props.isFetching) {
      return (<Spinner />);
    }

    return(
      <ul className='room-list'>
        {roomListArr}
      </ul>
    );
  }
}

export default RoomList;
