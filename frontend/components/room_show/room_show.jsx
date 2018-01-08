import React from 'react';

class RoomShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoomInfo(this.props.roomId);
  }

  render() {
    if (this.props.room) {
      return (
        <content className='room-show-main'>
          <div className='room-main-picture'>
          <img src={this.props.photos[0].imageUrl}/>
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
                  <div className='host-pic'>host pic will be here</div>
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
            </section>
            <aside className='booking-aside'>
              this will be the booking component
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
