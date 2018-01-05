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

  render() {
    const modalShown = this.getModal();

    const guestButton = this.getGuestButton();

    return (
      <div className='filter-bar'>
          {guestButton}
          {modalShown}
      </div>
    );
  }
}

export default FilterBar;
