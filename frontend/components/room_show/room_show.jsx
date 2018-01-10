import React from 'react';
import BookingContainer from './booking_container';
import Review from './review';

class RoomShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoomInfo(this.props.roomId);
  }

  // <img src={`this.props.photos[this.props.host.photoIds[0]].imageUrl`} />
  render() {
    if (this.props.room) {
      let reviews = this.props.room.reviewIds.map((reviewId) => {
        let review = this.props.reviews[reviewId];
        return (<Review review={review} user={this.props.users[1]}/>);
      })
      return (
        <content className='room-show-main'>
          <div className='room-main-picture'>
          <img src={this.props.photos[this.props.room.photoIds[0]].imageUrl}/>
          </div>
          <main className='room-info-booking-container'>
            <section className='room-info'>
                <nav>
                  <a>Overview</a><span> · </span>
                  <a>Reviews</a><span> · </span>
                  <a>The Host</a><span> · </span>
                  <a>Location</a>
                </nav>
                <header>
                  <div className='header-content'>
                    <h1>{this.props.room.title}</h1>
                    <h2>{this.props.room.roomType}</h2>
                  </div>
                  <div className='host-pic'>

                  </div>
              </header>
              <div className='room-features'>
                <div id='guests-icon'></div><span>{`${this.props.room.max_guests} guest${this.props.room.max_guests > 1 ? 's' : ''}`}</span>
                <div id='bedroom-icon'></div><span>{`${this.props.room.bedrooms} bedroom${this.props.room.bedrooms > 1 ? 's' : ''}`}</span>
                <div id='bed-icon'></div><span>{`${this.props.room.beds} bed${this.props.room.beds > 1 ? 's' : ''}`}</span>
                <div id='bathtub-icon'></div><span>{`${this.props.room.bathrooms} bath${this.props.room.bathrooms > 1 ? 's' : ''}`}</span>
              </div>
              <p className='description'>
                {this.props.room.description}
              </p>

              <section className='reviews-container'>
                <div>
                  <h1>Review Numbers</h1>
                </div>
                <ul className='review-list'>
                  {reviews}
                </ul>
              </section>

            </section>
            <aside className='booking-aside'>
              <BookingContainer room={this.props.room}/>
            </aside>
          </main>
        </content>
      )
    }
    else {
      return null
    }
  }
}

export default RoomShow;
