import React from 'react';
import ReviewEdit from './review_edit';


class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: this.props.review.body,
      rating: this.props.review.rating,
      authorId: this.props.authorId,
      roomId: this.props.roomId,
      reviewId: this.props.reviewId
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleChangeEditId = this.handleChangeEditId.bind(this);
    this.handleChange = this.handleChange.bind(this);

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

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleCancel (){
    this.props.updateEditId(null);
    e.stopPropagation();
  }

  handleSubmit (e) {
    this.props.action(this.state);
    e.stopPropagation();
  }

  render() {
    var date = new Date(Date.UTC(2015+parseInt(Math.random()*2), parseInt(Math.random()*12)));

    let mode;
    if (this.props.new == true) {
      mode = "create";
    } else if (this.props.currentUser.id == this.props.review.authorId &&
    this.props.editId != this.props.review.authorId) {
      mode = "edit";
    } else if (this.props.currentUser.id == this.props.review.authorId &&
      this.props.editId == this.props.reviewId){
      mode = "editing";
    } else {
      mode = "inactive";
    }


    let buttons;
    if (mode == "create") {
      buttons =  (
        <div className='review-button-container'>
          <button>Create</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </div>
      );
    } else if (mode == "edit") {
      buttons =  (
        <div className='review-button-container'>
          <button onClick={this.handleChangeEditId}>Edit</button>
          <button onClick={this.handleDelete}>Remove</button>
        </div>
      );
    } else if (mode == "editing") {
        buttons = (
          <div className='review-button-container'>
            <button>Save</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
        );
    } else {
      buttons = null;
    }


    let body;
    if (mode == "create" || mode == "editing") {
      body =  (
        <div className='review-body'>
          <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.body} onChange={this.handleChange('body')}>
            </textarea>
            {buttons}
          </form>
        </div>
      );
    } else {
      body =  (
        <div className='review-body'>
          {buttons}
          {this.state.body}
        </div>
      );
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
        </div>
          {body}
      </li>
    );
  }
}

export default Review;
