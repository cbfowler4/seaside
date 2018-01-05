
export const RECEIVE_GUESTS = 'RECEIVE_GUESTS';
export const RECEIVE_PRICE = 'RECEIVE_PRICE';
export const CLEAR_PRICE_FILTER = 'CLEAR_PRICE_FILTER';
export const CLEAR_GUEST_FILTER = 'CLEAR_GUEST_FILTER';

export const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS';

export const updateFilters = (filter) => {
  if (filter.guests) {
    return ({
      type: RECEIVE_GUESTS,
      guests: filter.guests
    });
  } else if (filter.price) {
    return ({
      type: RECEIVE_PRICE,
      price: filter.price
    });
  }
};

export const clearFilter = (filterType) => {
  switch (filterType) {
    case 'guest':
      return ({
        type: CLEAR_GUEST_FILTER
      });
    case 'price':
      return ({
        type: CLEAR_PRICE_FILTER
      });
    default:
      return ({
        type: CLEAR_ALL_FILTERS
      });
  }
};
