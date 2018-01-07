import { connect } from 'react-redux';
import RoomShow from './room_show';
import { fetchRoomInfo } from '../../actions/room_show_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    roomId: ownProps.match.params.roomId,
    room: state.entities.rooms[ownProps.match.params.roomId]
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchRoomInfo: (roomId) => dispatch(fetchRoomInfo(roomId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomShow);
