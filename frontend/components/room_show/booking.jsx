import React from 'react';
import moment from 'moment';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      adult: 1,
      child: 0,
      roomId: this.props.room.id,
      currentUser: this.props.currentUser
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.getGuestSum = this.getGuestSum.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);

  }

  stopProp(e) {
    e.stopPropagation();
  }

  onDatesChange ({ startDate, endDate }) {
    this.setState({startDate, endDate});
  }

  onFocusChange () {
    this.setState({ focusedInput });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.currentUser) {
      this.props.requestBooking(this.state);
    }
  }

  addGuest(guestType) {
    return ((e) => {
      let sumGuests = (this.state[guestType] + 1);
      if (( this.getGuestSum()+ 1) <= this.props.room.max_guests) {
        this.setState({[guestType]: sumGuests});
      }
    }).bind(this);
  }

  removeGuest(guestType) {
    return ((e) => {
      let sumGuests = (this.state[guestType] - 1);
      if ((sumGuests > 0 ) || (sumGuests === 0 && guestType!=='adult')) {
        this.setState({[guestType]: sumGuests});
      }
    }).bind(this);
  }

  toggleDropDown(e) {
    e.stopPropagation();
    const guestDD = document.getElementsByClassName('guest-dropdown');
    if (guestDD[0].classList.contains('hidden-guest-dropdown')) {
      guestDD[0].classList.remove('hidden-guest-dropdown');
      guestDD[0].classList.add('active-guest-dropdown');
    } else {
      guestDD[0].classList.add('hidden-guest-dropdown');
      guestDD[0].classList.remove('active-guest-dropdown');
    }
  }


  guestDropDown() {
    return (
      <div className='guest-dropdown hidden-guest-dropdown' onClick={this.stopProp}>
        <ul>
          <li><div>Adults</div>
            <img onClick={this.removeGuest('adult')} src={window.staticImages.minusImage}></img>
            <span>{`${this.state.adult}+`}</span>
            <img onClick={this.addGuest('adult')} src={window.staticImages.plusImage}></img>
          </li>
          <li><div>Children</div>
            <img onClick={this.removeGuest('child')} src={window.staticImages.minusImage}></img>
            <span>{`${this.state.child}+`}</span>
            <img onClick={this.addGuest('child')} src={window.staticImages.plusImage}></img>
          </li>
          <div className='filter-links'>
            <a onClick={this.toggleDropDown}>Close</a>
          </div>
        </ul>
      </div>
    );
  }

  getGuestSum() {
    return (this.state.adult + this.state.child);
  }

  render() {

    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx)=> {
        return (<h2 className='booking-error' key={idx}>{error}</h2>);
      });
    }

    return (
      <div className='booking-component'>
        <div className='header'>
          <h1><span>{`$${this.props.room.price}`}</span> per night</h1>
          <h3>ratings here</h3>
        </div>
        {errors}
        <form onSubmit={this.handleSubmit}>
          <label>Dates
            <div><DateRangePicker
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                startDateId="dp_start_date"
                endDateId="dp_end_date"
                startDatePlaceholderText="Check In"
                endDatePlaceholderText="Check Out"/>
            </div>
          </label>
          <label>Guests
            <div className='guest-input' onClick={this.toggleDropDown}>
              {`${this.getGuestSum()} guest${this.getGuestSum() > 1 ? 's' : ''}`}
              <img src={window.staticImages.arrow} />
            </div>
          </label>
          {this.guestDropDown()}
          <button className='booking-button'>Request to Book</button>

        </form>

      </div>
    );
  }
}

export default Booking;
