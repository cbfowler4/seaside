import { connect } from 'react-redux';
import { openFilter, closeModal } from '../../actions/ui_actions';
import FilterBar from './filter_bar';

const mapStateToProps = state => {
  return ({
    filterModal: state.ui.filter_modal,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    openFilter: (filterType) => dispatch(openFilter(filterType)),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
