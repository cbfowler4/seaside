import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RoomList from './room_list';

const mapStateToProps = state => {
  return ({
    rooms: Object.values(state.entities.rooms),
  });
};


export default withRouter(connect(mapStateToProps, null)(RoomList));
