import React from 'react';
import RoomListItem from './room_list_item';
import Spinner from '../spinner';

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.hasRenderedOnce = false;

  }

  componentWillUpdate() {
    this.hasRenderedOnce = true;
  }

  render () {
    let roomListArr = this.props.rooms.map((room) => {
      let photos = room.photoIds.map((id) => {
        return this.props.photos[id];
      });
      return (<RoomListItem room={room} photos={photos} key={room.id}/>);
    });

    if (this.props.isFetching || this.hasRenderedOnce === false) {
      return (<Spinner />);
    }

    if (roomListArr.length < 1 && this.hasRenderedOnce === true) {
      return (
        <ul className='room-list '>
          <div className='no-results-index'>
            <div id='life-saver'></div>
            <h1>There ARRR no boats in this area</h1>
          </div>
        </ul>
      );
    }
    return(
      <ul className='room-list'>
        {roomListArr}
      </ul>
    );
  }
}

export default RoomList;
