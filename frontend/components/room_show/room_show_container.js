import { connect } from 'react-redux';
import RoomShow from './room_show';
import { fetchRoomInfo } from '../../actions/room_show_actions';
import { updateEditId } from '../../actions/ui_actions';
import { createReview, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const roomId = ownProps.match.params.roomId;
  const room = state.entities.rooms[roomId];

  let photos = {};
  let reviews = {};
  let users = {};

  if (room && !!state.entities.reviews[room.reviewIds[0]]) {
    room.photoIds.forEach((id) => {
      photos[id] = state.entities.photos[id];
    });

    room.reviewIds.forEach((id) => {
      reviews[id] = state.entities.reviews[id];
      let authorId = reviews[id].authorId;

      users[authorId] = state.entities.users[authorId];

      users[authorId].photoIds.forEach((photoId) => {
        photos[photoId] = state.entities.photos[photoId];
      });
    });

    users[room.hostId] = state.entities.users[room.hostId];
    users[room.hostId].photoIds.forEach((photoId) => {
      photos[photoId] = state.entities.photos[photoId];
    });
  }

  return ({
    roomId: roomId,
    room: room,
    photos: photos,
    reviews: reviews,
    users: users,
    isFetching: state.ui.isFetching,
    currentUser: state.session.currentUser,
    editId: state.ui.editId
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchRoomInfo: (roomId) => dispatch(fetchRoomInfo(roomId)),
    updateEditId: (id) => dispatch(updateEditId(id)),
    createReview: (review) => dispatch(createReview(review)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomShow);
