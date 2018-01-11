import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.deleteReview(this.props.review.id);
    e.stopPropagation();
  }

  render() {
    var date = new Date(Date.UTC(2015+parseInt(Math.random()*2), parseInt(Math.random()*12)));
    const editButton = (
      (this.props.currentUser.id == this.props.review.authorId &&
        this.props.editId != this.props.review.authorId) ?(
          <div className='review-buttons'>
            <button>Edit Review</button>)
            <button onClick={this.handleDelete}>Remove Review</button>)
          </div> ) : null );

    if (this.props.currentUser.id == this.props.review.authorId &&
      this.props.editId == this.props.review.authorId) {
        //render edit form
      }


    return (
      <li className='review-component'>
        <div className='user-header'>
          <div className='left'>
            <div className='user-picture'>
              <img src={this.props.imageUrl} />
            </div>
            <div className='user-info'>
              <h2>{this.props.user.fname}</h2>
              <h3>{date.toLocaleString('en-US', { year: 'numeric', month: 'long'})}</h3>
            </div>
          </div>
          <div className='right'>
            {editButton}
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
