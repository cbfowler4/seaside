import { connect } from 'react-redux';
import { openFilter, closeModal } from '../../actions/ui_actions';
import FilterBar from './filter_bar';
import { updateFilters, clearFilter } from '../../actions/filter_actions';

const mapStateToProps = state => {
  return ({
    filterModal: state.ui.filter_modal,
    guests: state.filters.guests,
    price: state.filters.price
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    openFilter: (filterType) => dispatch(openFilter(filterType)),
    closeModal: () => dispatch(closeModal()),
    updateFilters: (filter) => dispatch(updateFilters(filter)),
    clearFilter: (filterType) => dispatch(clearFilter(filterType))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
