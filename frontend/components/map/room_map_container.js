import { connect } from 'react-redux';
import RoomMap from './room_map';
import {  receiveBounds } from '../../actions/room_index_actions';
import {  receiveMapCenter } from '../../actions/map_actions';


const mapStateToProps = state => {
  return ({
    center: state.map.center,
    rooms: Object.values(state.entities.rooms),
    bounds: state.filters.bounds
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    receiveBounds: (bounds) => dispatch(receiveBounds(bounds)),
    receiveMapCenter: (bounds) => dispatch(receiveMapCenter(bounds))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomMap);
