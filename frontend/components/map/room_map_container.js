import { connect } from 'react-redux';
import RoomMap from './room_map';
import {  receiveBounds } from '../../actions/room_index_actions';


const mapStateToProps = state => {
  return ({
    center: state.map.center,
    rooms: Object.values(state.entities.rooms)
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    receiveBounds: (bounds) => dispatch(receiveBounds(bounds))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomMap);
