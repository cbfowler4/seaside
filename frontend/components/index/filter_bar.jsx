import React from 'react';
import GuestFilter from './filters/guest';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.stopProp = this.stopProp.bind(this);
  }

  handleOpen(filterType) {
    return (e) => {
      e.stopPropagation();
      this.props.openFilter(filterType);
    };
  }

  handleClose (filterType) {
    return (e) => {
      this.props.closeModal();
    };
  }

  stopProp(e) {
    e.stopPropagation();
  }



  getModal() {
    switch (this.props.filterModal) {
      case "guest":
        return (
          <div className='filter-modal-background' onClick={this.handleClose(this.props.filterModal)}>
            <GuestFilter updateFilters = {this.props.updateFilters}
              clearFilter = {this.props.clearFilter}
              guests = {this.props.guests}
              handleClose = {this.handleClose(this.props.filterModal)}/>
          </div>
          );
      default:
        return (<div></div>);
    }
  }

  getGuestButton() {
    const activeGuests = (this.props.guests.adult !== 1 || this.props.guests.child !== 0);
    if (this.props.filterModal === 'guest' || activeGuests) {
      return (<button id='guest' className='filter-active' onClick={this.handleOpen('guest')}>Guests</button>);
    } else {
      return (<button  id='guest' onClick={this.handleOpen('guest')}>Guests</button>);
    }
  }

  getPriceButton() {
    const Price = (this.props.price.min !== 1 || this.props.price.max !== 0);
    if (this.props.filterModal === 'price' || Price) {
      return (<button id='price' className='filter-active' onClick={this.handleOpen('price')}>Price</button>);
    } else {
      return (<button  id='price' onClick={this.handleOpen('price')}>Price</button>);
    }
  }

  render() {
    const modalShown = this.getModal();

    const guestButton = this.getGuestButton();
    const priceButton = this.getPriceButton();

    return (
      <div className='filter-bar'>
          {guestButton}
          {priceButton}
          {modalShown}
      </div>
    );
  }
}

export default FilterBar;
