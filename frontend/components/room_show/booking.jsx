import React from 'react';
import moment from 'moment';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {startDate: null, endDate: null, focusedInput: null, guests: {adult: 1, child: 0}};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange ({ startDate, endDate }) {
    this.setState({startDate, endDate});
  }

  onFocusChange () {
    this.setState({ focusedInput });
  }

  handleSubmit(e) {
    e.preventDefault();
    dispatch(requestBooking(this.state));
  }

  render() {
    return (
      <div className='booking-component'>
        <h1><span>{`$${this.props.room.price}`}</span> per night</h1>
        <h3>ratings here</h3>
        <form onSubmit={this.handleSubmit}>
          <div><DateRangePicker
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              startDateId="dp_start_date"
              endDateId="dp_end_date"
              startDatePlaceholderText="Check In"
              endDatePlaceholderText="Check Out"  />
          </div>
          <div>guest drop down</div>
          <button>Request to Book</button>
        </form>

      </div>
    );
  }
}

export default Booking;
