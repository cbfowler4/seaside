import { connect } from 'react-redux';
import RoomIndex from './room_index';
import { fetchRooms } from '../../actions/room_index_actions';

const mapStateToProps = state => {
  return ({
    filters: state.filters
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchRooms: (filters) => dispatch(fetchRooms(filters)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomIndex);
