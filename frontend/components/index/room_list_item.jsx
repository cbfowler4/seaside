import React from 'react';
import { withRouter } from 'react-router-dom';

class RoomListItem extends React.Component {
  constructor(props) {
    super(props);
    this.room = props.room;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.history.push(`rooms/${this.room.id}`);
  }

  render() {
    return(
      <div className={`room-list-item room-item-${this.room.id}`} onClick={this.handleClick}>
        <img src={this.props.photos[0].imageThumbUrl} className='room-thumbnail'/>
        <h3>{this.room.roomType}</h3>
        <h1>{this.room.title}</h1>
        <p>{`From $${this.room.price} per night`}</p>
      </div>
    );
  }
}

export default withRouter(RoomListItem);
