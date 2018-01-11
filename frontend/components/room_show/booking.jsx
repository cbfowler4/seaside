import React from 'react';
import moment from 'moment';
import ReactStars from 'react-stars';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      adult: 1,
      child: 0,
      roomId: this.props.room.id,
      currentUser: this.props.currentUser
    };
    this.state = this.defaultState;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.getGuestSum = this.getGuestSum.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);

  }

  stopProp(e) {
    e.stopPropagation();
  }

  onDatesChange ({ startDate, endDate }) {
    this.props.bookingChanged();
    this.setState({startDate, endDate});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentUser != nextProps.currentUser) {
      this.setState({currentUser: nextProps.currentUser});
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.startDate === null || this.state.endDate === null) {
      this.props.receiveErrors(['Must specify a start and end date!']);
    }
    else if (this.props.currentUser) {
      this.props.requestBooking(this.state);
      this.setState(this.defaultState);
    } else {
      this.props.openSignup();
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
    if (this.props.errors.length>0) {
      errors = this.props.errors.map((error, idx)=> {
        return (<h2 className='booking-error' key={idx}>{error}</h2>);
      });
    }

    return (
      <div className='booking-component'>
        <div className='header'>
          <h1><span>{`$${this.props.room.price}`}</span> per night</h1>
          <h3><ReactStars count={5} value={this.props.room.rating} size={20} edit={false} half={true} color2={'#008489'}/></h3>
        </div>
        {this.props.errors.length > 0 &&
          <div className='errors'>
            {errors}
          </div>
        }
        <form onSubmit={this.handleSubmit}>
          <label>Dates
            <div><DateRangePicker
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={this.onDatesChange}
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
          <button className='booking-button'>{this.props.booked ? 'Booked!' : 'Request to Book'}</button>

        </form>

      </div>
    );
  }
}

export default Booking;
