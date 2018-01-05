
export const RECEIVE_GUESTS = 'RECEIVE_GUESTS';
export const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS';

export const updateFilters = (filter) => {
  if (filter.guests) {
    return ({
      type: RECEIVE_GUESTS,
      guest
    });
  } else {
    return ({
      type: CLEAR_ALL_FILTERS
    });
  }
};
