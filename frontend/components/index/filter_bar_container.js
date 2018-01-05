import { connect } from 'react-redux';
import { openFilter, closeModal } from '../../actions/ui_actions';
import FilterBar from './filter_bar';
import { updateFilters } from '../../actions/filter_actions';

const mapStateToProps = state => {
  return ({
    filterModal: state.ui.filter_modal,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    openFilter: (filterType) => dispatch(openFilter(filterType)),
    closeModal: () => dispatch(closeModal()),
    updateFilters: (filter) => dispatch(updateFilters(filter))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
