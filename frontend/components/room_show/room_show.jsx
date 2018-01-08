import React from 'react';

class RoomShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchRoomInfo(this.props.roomId);
  }

  render() {
    debugger
    return (
      <content className='room-show-main'>
        <div className='room-main-picture'>This is the main picture area</div>
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
            <div className='ammenities'>
              ammenities here
            </div>
            <p className='description'>
              main room description will go here
            </p>
          </section>
          <aside className='booking-aside'>
            this will be the booking component
          </aside>
        </main>
        room show page
      </content>
    )
  }
}

export default RoomShow;
