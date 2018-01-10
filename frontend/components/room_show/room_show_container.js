import { connect } from 'react-redux';
import RoomShow from './room_show';
import { fetchRoomInfo } from '../../actions/room_show_actions';

const mapStateToProps = (state, ownProps) => {
  const roomId = ownProps.match.params.roomId;
  const room = state.entities.rooms[roomId];
  // const host = state.entities.users[room.hostId];
  let photos = {};
  let reviews = {};
  let users = {};

  if (room) {
    room.photoIds.forEach((id) => {
      photos[id] = state.entities.photos[id];
    });

    room.reviewIds.forEach((id) => {
      reviews[id] = state.entities.reviews[id];
      let authorId = reviews[id].authorId;
      users[authorId] = state.entities.users[authorId];
    });

  }

  return ({
    roomId: roomId,
    room: room,
    photos: photos,
    reviews: reviews,
    users: users,
    isFetching: state.ui.isFetching
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchRoomInfo: (roomId) => dispatch(fetchRoomInfo(roomId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomShow);
