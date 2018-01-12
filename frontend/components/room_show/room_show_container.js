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

  if (room && !!state.entities.reviews[room.reviewIds[0]]) {
    //room photos
    room.photoIds.forEach((id) => {
      photos[id] = state.entities.photos[id];
    });

    //get all reviews
    room.reviewIds.forEach((id) => {
      reviews[id] = state.entities.reviews[id];
    });

    //get all renter info and pictures for reviews
    room.renterIds.forEach((id) => {
      if (Object.keys(state.entities.users).includes(id)) {
        users[id] = state.entities.users[id];
        users[id].photoIds.forEach((photoId) => {
          photos[photoId] = state.entities.photos[photoId];
        });
      }
    });

    //get all reviwer info for pictures and reviews (shouldnt be necessary)
    room.reviewerIds.forEach((id) => {
      users[id] = state.entities.users[id];
      users[id].photoIds.forEach((photoId) => {
        photos[photoId] = state.entities.photos[photoId];
      });
    });

    //get host info for pictures and name
    users[room.hostId] = state.entities.users[room.hostId];
    users[room.hostId].photoIds.forEach((photoId) => {
      photos[photoId] = state.entities.photos[photoId];
    });

    //get currentUser photo
    if (state.session.currentUser != null) {
      let currentUserPhotoId = state.session.currentUser.photoIds[0];
      photos[currentUserPhotoId] = state.entities.photos[currentUserPhotoId];
    }
  }
  return ({
    roomId: roomId,
    room: room,
    photos: photos,
    reviews: reviews,
    users: users,
    isFetching: state.ui.isFetching,
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchRoomInfo: (roomId) => dispatch(fetchRoomInfo(roomId)),
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomShow);
