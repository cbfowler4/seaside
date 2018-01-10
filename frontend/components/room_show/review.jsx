import React from 'react';

class Review extends React.Component {
  render() {
    var date = new Date(Date.UTC(2015+parseInt(Math.random()*2), parseInt(Math.random()*12)));
    return (
      <li className='review-component'>
        <div className='user-header'>
          <div className='user-picture'>
            <img src={this.props.imageUrl} />
          </div>
          <div className='user-info'>
            <h2>{this.props.user.fname}</h2>
            <h3>{date.toLocaleString('en-US', { year: 'numeric', month: 'long'})}</h3>
          </div>
        </div>
        <p>
          {this.props.review.body}
        </p>
      </li>
    );
  }
}

export default Review;
