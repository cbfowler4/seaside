import { connect } from 'react-redux';
import RoomIndex from './room_index';
import { fetchRooms, receiveBounds } from '../../actions/room_index_actions';

const mapStateToProps = state => {
  return ({
    rooms: Object.values(state.entities.rooms),
    filters: state.filters
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchRooms: (filters) => dispatch(fetchRooms(filters)),
    receiveBounds: (bounds) => dispatch(receiveBounds(bounds))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomIndex);
