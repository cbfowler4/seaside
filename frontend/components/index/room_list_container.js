import { connect } from 'react-redux';
import RoomList from './room_list';

const mapStateToProps = state => {
  return ({
    rooms: Object.values(state.entities.rooms),
  });
};


export default connect(mapStateToProps, null)(RoomList);
