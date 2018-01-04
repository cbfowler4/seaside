import React from 'react';
import { merge } from 'lodash';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { guest: {adult: 1, child: 0}};
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.stopProp = this.stopProp.bind(this);

  }

  handleOpen(filterType) {
    return (e) => {
      this.props.openFilter(filterType);
      const el = document.getElementById(filterType);
      el.classList.add('filter-active');
    };
  }

  handleClose (filterType) {
    return (e) => {
      this.props.closeModal();
      const el = document.getElementById(filterType);
      el.classList.remove('filter-active');
    };
  }

  stopProp(e) {
    e.stopPropagation();
  }

  addGuest(guestType) {
    return (e) => {
      const sum = this.state.guest[guestType] + 1;
      const newState = merge(this.state.guest, {[guestType]: sum});
      this.setState(newState);
    };
  }

  removeGuest(guestType) {
    return (e) => {
      const sum = this.state.guest[guestType] - 1;
      if (sum > 0) {
        const newState = merge(this.state.guest, {[guestType]: sum});
        this.setState(newState);
      } else {
        console.log('hey stop it!');
      }
    };
  }

  getModal() {
    switch (this.props.filterModal) {
      case "guest":
        return (
          <div className='filter-modal-background' onClick={this.handleClose(this.props.filterModal)}>
            <div className='filter-modal-main guest-modal' onClick={this.stopProp}>
              <ul>
                <li>Adults
                  <span onClick={this.removeGuest('adult')}>-</span>
                  <span>{`${this.state.guest.adult}+`}</span>
                  <span onClick={this.addGuest('adult')}>+</span></li>
                <li>Children
                  <span onClick={this.removeGuest('child')}>-</span>
                  <span>{`${this.state.guest.child}+`}</span>
                  <span onClick={this.addGuest('child')}>+</span></li>
                <a href='#'>Apply</a>
              </ul>
            </div>
          </div>
        );
      default:
        return (<div></div>);
    }
  }

  render() {
    const modalShown = this.getModal();

    return (
      <div className='filter-bar'>
        <button id='guest' onClick={this.handleOpen('guest')}>Guests</button>
        {modalShown}
      </div>
    );
  }
}

export default FilterBar;
