import { connect } from 'react-redux';
import RoomShow from './room_show';
import { fetchRoomInfo } from '../../actions/room_show_actions';
import { createReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const roomId = ownProps.match.params.roomId;
  const room = state.entities.rooms[roomId];

  let photos = {};
  let reviews = {};
  let users = {};

  if (room && room.show === true) {
    return ({
      roomId: roomId,
      room: room,
      photos: state.entities.photos,
      reviews: state.entities.reviews,
      users: state.entities.users,
      isFetching: state.ui.isFetching,
      currentUser: state.session.currentUser,
    });
  } else {
    return ({
      roomId: roomId,
      room: room
    });
  }
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchRoomInfo: (roomId) => dispatch(fetchRoomInfo(roomId)),
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomShow);
