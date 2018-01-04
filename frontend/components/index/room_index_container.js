import { connect } from 'react-redux';
import RoomIndex from './room_index';
import { fetchRooms } from '../../actions/room_index_actions';

const mapStateToProps = state => {
  return ({
    rooms: Object.values(state.entities.rooms),
    center: state.filters.bounds.center
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchRooms: (filters) => dispatch(fetchRooms(filters)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomIndex);
