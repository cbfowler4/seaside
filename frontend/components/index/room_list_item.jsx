import React from 'react';

const RoomListItem = ({room}) => {
  const {room_type, title, price} = room;
  return(
    <li className='room-list-item'>
      <div className='room-thumbnail'></div>
      <h1>{title}</h1>
      <p>{`From $${price} per night`}</p>
    </li>
  );
};
// <h3>{room_type}</h3>

export default RoomListItem;
