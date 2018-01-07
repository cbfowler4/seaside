import React from 'react';

class RoomShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoomInfo(this.props.roomId);
  }

  render() {
    return (
      <content className='room-show-main'>
        <div className='room-main-picture'>This is the main picture area</div>
        <main className='room-info-booking-container'>
          <section className='room-info'>
            <header>
              <div className='header-content'>
                <h1>this.props.title</h1>
                <h2>this.props.roomType</h2>
              </div>
              <div>host pic will be here</div>
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
