import { connect } from 'react-redux';
import RoomIndex from './room_index';
import {fetchRooms} from '../../actions/room_index_actions';

const mapStateToProps = state => {
  return ({
    rooms: Object.values(state.entities.rooms)
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchRooms: () => dispatch(fetchRooms())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomIndex);
