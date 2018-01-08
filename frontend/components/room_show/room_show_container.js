import { connect } from 'react-redux';
import RoomShow from './room_show';
import { fetchRoomInfo } from '../../actions/room_show_actions';

const mapStateToProps = (state, ownProps) => {
  const roomId = ownProps.match.params.roomId;
  const room = state.entities.rooms[roomId];
  let photos = [];
  if (room) {
    photos = room.photoIds.map((id) => {
      return state.entities.photos[id];
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
