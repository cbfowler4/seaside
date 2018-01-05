import React from 'react';
import GuestFilter from './filters/guest';
import PriceFilter from './filters/price';

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
      case "price":
        return (
          <div className='filter-modal-background' onClick={this.handleClose(this.props.filterModal)}>
            <PriceFilter updateFilters = {this.props.updateFilters}
              clearFilter = {this.props.clearFilter}
              price = {this.props.price}
              handleClose = {this.handleClose(this.props.filterModal)}/>
          </div>
          );
      default:
        return (<div></div>);
    }
  }

  getGuestButton() {
    const activeGuests = (this.props.guests.adult !== 1 || this.props.guests.child !== 0);
    let buttonText = 'Guest';

    if (activeGuests) {
      buttonText = `${this.props.guests.adult+this.props.guests.child} Guests`;
    }

    if (this.props.filterModal === 'guest' || activeGuests) {
      return (<button id='guest' className='filter-active' onClick={this.handleOpen('guest')}>{buttonText}</button>);
    } else {
      return (<button  id='guest' onClick={this.handleOpen('guest')}>{buttonText}</button>);
    }
  }

  getPriceButton() {
    const activePrice = (this.props.price.min !== 0 || this.props.price.max !== 1000);
    let buttonText = 'Price';

    if (activePrice) {
      buttonText = `$${this.props.price.min}-$${this.props.price.max}`;
    }

    if (this.props.filterModal === 'price' || activePrice) {
      return (<button id='price' className='filter-active' onClick={this.handleOpen('price')}>{buttonText}</button>);
    } else {
      return (<button  id='price' onClick={this.handleOpen('price')}>{buttonText}</button>);
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
