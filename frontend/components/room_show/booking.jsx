import React from 'react';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {start_date: "", end_date: "", guests: {adult: 1, child: 0}};
    this.handleSubmit = this.handleSubmit.bind(this);
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
          <div>calendar here</div>
          <div>guest drop down</div>
          <button>Request to Book</button>
        </form>

      </div>
    );
  }
}

export default Booking;
