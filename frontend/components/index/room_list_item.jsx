import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactStars from 'react-stars';


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
        <div className='stars'>
          <ReactStars
            count={5}
            value={this.props.room.rating} size={10}
            edit={false}
            half={true}
            color2={'#008489'}/>
          <span className='rating-length'>{this.room.reviewIds.length} ·
          {this.room.reviewIds.length > 10 ? ' Super Host' : ' Host'}</span>
        </div>

      </div>
    );
  }
}

export default withRouter(RoomListItem);
