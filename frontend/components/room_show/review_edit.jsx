import React from 'react';

class ReviewEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: this.props.review.body,
      rating: this.props.review.rating,
      authorId: this.props.authorId,
      roomId: this.props.roomId,
      reviewId: this.props.reviewId
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    this.props.action(this.state);
    e.stopPropagation();
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render(){
    return(
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
          <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.body} onChange={this.handleChange('body')}>
            </textarea>
            <button>Create Review</button>
          </form>
        </p>
      </li>
    );
  }
}

export default ReviewEdit;
