import React from 'react';
import BookingContainer from './booking_container';
import ReviewContainer from './review_container';
import Spinner from '../spinner';

class RoomShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mapInitialize: false};
  }

  componentDidMount() {
    this.props.fetchRoomInfo(this.props.roomId);
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextState.mapInitialize){

      const mapOptions = {
        zoom: 13,
        center: this.props.room.position
      };

      this.map = new google.maps.Map(document.getElementById('show-map-container'), mapOptions);
      this.marker = new google.maps.Marker({
        position: this.props.room.position,
        map: this.map,
        title: this.props.room.title,
        icon: {
          scale: 50,
          path: google.maps.SymbolPath.CIRCLE,
          strokeWeight: 1,
          fillColor: '#05DCC9',
          fillOpacity: .5,
          strokeColor: '#00B5A5'

        },
      });
    }
  }

  render() {
    if (this.props.isFetching) {
      return (<Spinner />);
    }

    if (this.props.room && this.props.room.show === true) {
      if (!this.state.mapInitialize) {
        this.setState({mapInitialize: true});
      }


      //reviews
      const host = this.props.users[this.props.room.hostId];
      let reviews = this.props.room.reviewIds.map((reviewId) => {
        let review = this.props.reviews[reviewId];
        let user = this.props.users[review.authorId];
        return (<ReviewContainer
          key={reviewId}
          reviewId={reviewId}
          user={user}
          action={this.props.updateReview}
          roomId={this.props.room.id}
          imageUrl={user.imageAvatarUrl}
          new={false}
          />);
      })

      if (this.props.currentUser != null && !this.props.room.reviewerIds.includes(this.props.currentUser.id) &&
          this.props.room.renterIds.includes(this.props.currentUser.id)) {
            reviews.unshift(<ReviewContainer
              key={this.props.room.id}
              action={this.props.createReview}
              user={this.props.currentUser}
              roomId={this.props.room.id}
              imageUrl={this.props.currentUser.imageAvatarUrl}
              new={true}
              />);
          };

      return (
        <content className='room-show-main'>
          <div className='room-main-picture'>
            <img src={this.props.photos[this.props.room.photoIds[0]].imageBannerUrl}/>
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
                    <img src={this.props.users[this.props.room.hostId].imageAvatarUrl} />
                    <h2>{host.fname}</h2>
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
                <div className='review-header'>
                  <h1>{`${reviews.length} Review${reviews.length>1 ? 's': ''}`}</h1>
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
          <div className='location-container'>
            <h1>Location</h1>
            <div id='show-map-container'></div>


          </div>
        </content>
      )
    }
    else {
      return (null);
    }
  }
}

export default RoomShow;
