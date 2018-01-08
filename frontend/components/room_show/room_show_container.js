import { connect } from 'react-redux';
import RoomShow from './room_show';
import { fetchRoomInfo } from '../../actions/room_show_actions';

const mapStateToProps = (state, ownProps) => {
  const roomId = ownProps.match.params.roomId;
  const room = state.entities.rooms[roomId];
  // const host = state.entities.users[room.hostId];
  let photos = {};
  if (room) {
    room.photoIds.forEach((id) => {
      photos[id] = state.entities.photos[id];
    });
  }

  return ({
    roomId: roomId,
    room: room,
    photos: photos,
    isFetching: state.ui.isFetching
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchRoomInfo: (roomId) => dispatch(fetchRoomInfo(roomId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomShow);
