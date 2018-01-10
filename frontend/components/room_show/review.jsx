import React from 'react';

class Review extends React.Component {
  render() {
    return (
      <li className='review-component'>
        <div className='user-header'>
          <div className='user-picture'> this is a pic </div>
          <div className='user-info'>
            <h2>User Name</h2>
            <h3>Review date</h3>
          </div>
        </div>
        <p>
          Review body
        </p>
      </li>
    );
  }
}

export default Review;
