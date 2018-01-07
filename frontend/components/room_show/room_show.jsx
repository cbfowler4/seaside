import React from 'react';

class RoomShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoomInfo(this.props.roomId);
  }

  render() {
    return (
      <content className='room-show-main'>
        room show page
      </content>
    )
  }
}

export default RoomShow;
