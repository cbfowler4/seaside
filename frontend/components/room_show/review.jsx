import React from 'react';
import ReactStars from 'react-stars';


class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: this.props.review.body,
      rating: this.props.review.rating,
      authorId: this.props.currentUser.id,
      reviewId: this.props.reviewId,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleChangeEditId = this.handleChangeEditId.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleUserShow = this.handleUserShow.bind(this);

    this.date = new Date(Date.UTC(2015+parseInt(Math.random()*2), parseInt(Math.random()*12)));
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.reviewId);
    e.stopPropagation();
  }

  handleChangeEditId(e) {
    this.props.updateEditId(this.props.reviewId);
    e.stopPropagation();
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value});
  }

  handleRatingChange(e) {
    this.setState({rating: e});
  }

  handleCancel (e) {
    this.props.updateEditId(null);
    e.stopPropagation();
  }

  handleSubmit (e) {
    this.props.action(this.state);
    e.stopPropagation();
  }

  handleUserShow (e) {
    this.props.history.push(`/users/${this.props.user.id}`);
    e.stopPropagation();
  }

  render() {
    let mode;
    if (this.props.new == true) {
      mode = "create";
    } else if (this.props.currentUser != null && this.props.currentUser.id == this.props.review.authorId &&
    this.props.editId != this.props.reviewId) {
      mode = "edit";
    } else if (this.props.currentUser != null && this.props.currentUser.id == this.props.review.authorId &&
      this.props.editId == this.props.reviewId){
      mode = "editing";
    } else {
      mode = "inactive";
    }


    let buttons;
    if (mode == "create") {
      buttons =  (
        <div className='review-button-container'>
          <ReactStars
            className='review-stars'
            count={5}
            value={this.state.rating}
            size={20}
            edit={true}
            half={true}
            color2={'#008489'}
            onChange={this.handleRatingChange}/>
          <div className='review-buttons'>
            <button onClick={this.handleSubmit}>Create</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
        </div>
      );
    } else if (mode == "edit") {
      buttons =  (
        <div className='review-button-container'>
          <div className='review-buttons'>
            <button onClick={this.handleChangeEditId}>Edit</button>
            <button onClick={this.handleDelete}>Remove</button>
          </div>
        </div>
      );
    } else if (mode == "editing") {
        buttons = (
          <div className='review-button-container'>
            <ReactStars
              className='review-stars'
              count={5}
              value={this.state.rating}
              size={20}
              edit={true}
              half={true}
              color2={'#008489'}
              onChange={this.handleRatingChange}/>
            <div className='review-buttons'>
              <button onClick={this.handleSubmit}>Save</button>
              <button onClick={this.handleCancel}>Cancel</button>
            </div>
          </div>
        );
    } else {
      buttons = null;
    }


    let body;
    if (mode == "create" || mode == "editing") {
      body =  (
        <div className='review-body'>
          <form  onSubmit={this.handleSubmit}>
            <textarea className='review-textarea' value={this.state.body} onChange={this.handleBodyChange} placeholder={`Leave a review...`}>
            </textarea>
          </form>
        </div>
      );
    } else {
      body =  (
        <div className='review-body'>
          <div>{this.state.body}</div>
        </div>
      );
    }


    return (
      <li className='review-component'>
        <div className='user-header'>
          <div className='left'>
            <div className='user-picture'>
              <img src={this.props.imageUrl} onClick={this.handleUserShow}/>
            </div>
            <div className='user-info'>
              <h2 onClick={this.handleUserShow}>{this.props.user.fname}</h2>
              <h3>{this.date.toLocaleString('en-US', { year: 'numeric', month: 'long'})}</h3>
            </div>
          </div>
          <div className='right'>
            {buttons}
          </div>
        </div>
          {body}
      </li>
    );
  }
}

export default Review;
