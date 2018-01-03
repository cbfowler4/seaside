import React from 'react';

const RoomListItem = ({room}) => {
  const {roomType, title, price} = room;
  return(
    <li className='room-list-item'>
      <div className='room-thumbnail'></div>
      <h3>{roomType}</h3>
      <h1>{title}</h1>
      <p>{`From $${price} per night`}</p>
    </li>
  );
};

export default RoomListItem;
